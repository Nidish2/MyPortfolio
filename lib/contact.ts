export interface ContactSubmissionPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  botcheck?: string;
  accessKey?: string;
}

export interface SubmissionResult {
  success: boolean;
  message?: string;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(data: {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
  accessKey?: string;
}): { valid: boolean; error?: string } {
  if (data.botcheck) {
    return { valid: false, error: "Submission blocked" };
  }

  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return { valid: false, error: "Please fill in all required fields" };
  }

  if (!EMAIL_REGEX.test(data.email.trim())) {
    return { valid: false, error: "Please enter a valid email address" };
  }

  if (!data.accessKey) {
    return { valid: false, error: "Contact form is not configured yet" };
  }

  return { valid: true };
}

export async function submitContactMessage(
  payload: ContactSubmissionPayload,
  submitUrl: string,
  fetchFn: typeof fetch = fetch,
): Promise<SubmissionResult> {
  const validation = validateContactInput({
    name: payload.name,
    email: payload.email,
    message: payload.message,
    botcheck: payload.botcheck,
    accessKey: payload.accessKey,
  });

  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const response = await fetchFn(submitUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: payload.accessKey,
      name: payload.name.trim(),
      email: payload.email.trim(),
      subject: payload.subject?.trim() || "New Message from Portfolio",
      message: payload.message.trim(),
      from_name: "Portfolio Notification",
      botcheck: payload.botcheck,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (response.ok && result.success) {
    return { success: true, message: result.message };
  }

  throw new Error(result.message || "Failed to send message");
}
