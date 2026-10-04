import { describe, expect, it, vi } from "vitest";
import { submitContactMessage, validateContactInput } from "@/lib/contact";

describe("contact form validation and submission", () => {
  it("rejects submission if botcheck honeypot field is filled", () => {
    const result = validateContactInput({
      name: "Bot",
      email: "bot@example.com",
      message: "Spam message",
      botcheck: "something",
      accessKey: "test-key",
    });

    expect(result.valid).toBe(false);
    expect(result.error).toBe("Submission blocked");
  });

  it("rejects submission if required fields are missing or whitespace only", () => {
    const resultNoName = validateContactInput({
      name: "   ",
      email: "test@example.com",
      message: "Hello world",
      accessKey: "test-key",
    });
    expect(resultNoName.valid).toBe(false);
    expect(resultNoName.error).toBe("Please fill in all required fields");

    const resultNoEmail = validateContactInput({
      name: "Nidish",
      email: "   ",
      message: "Hello world",
      accessKey: "test-key",
    });
    expect(resultNoEmail.valid).toBe(false);
    expect(resultNoEmail.error).toBe("Please fill in all required fields");

    const resultNoMsg = validateContactInput({
      name: "Nidish",
      email: "test@example.com",
      message: "   ",
      accessKey: "test-key",
    });
    expect(resultNoMsg.valid).toBe(false);
    expect(resultNoMsg.error).toBe("Please fill in all required fields");
  });

  it("validates email format properly", () => {
    const invalidEmail = validateContactInput({
      name: "Visitor",
      email: "not-an-email",
      message: "Hello",
      accessKey: "test-key",
    });
    expect(invalidEmail.valid).toBe(false);
    expect(invalidEmail.error).toBe("Please enter a valid email address");

    const validEmail = validateContactInput({
      name: "Visitor",
      email: "visitor@domain.com",
      message: "Hello",
      accessKey: "test-key",
    });
    expect(validEmail.valid).toBe(true);
    expect(validEmail.error).toBeUndefined();
  });

  it("requires an accessKey to be configured", () => {
    const noKey = validateContactInput({
      name: "Visitor",
      email: "visitor@domain.com",
      message: "Hello",
      accessKey: undefined,
    });
    expect(noKey.valid).toBe(false);
    expect(noKey.error).toBe("Contact form is not configured yet");
  });

  it("submits message successfully with valid payload and mock fetch", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: "Message sent!" }),
    });

    const result = await submitContactMessage(
      {
        name: "Alice",
        email: "alice@example.com",
        subject: "Collaboration",
        message: "Let's connect!",
        accessKey: "mock-key-123",
      },
      "https://api.web3forms.com/submit",
      mockFetch as unknown as typeof fetch,
    );

    expect(result.success).toBe(true);
    expect(result.message).toBe("Message sent!");
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(options.method).toBe("POST");
    const parsedBody = JSON.parse(options.body);
    expect(parsedBody.access_key).toBe("mock-key-123");
    expect(parsedBody.name).toBe("Alice");
    expect(parsedBody.email).toBe("alice@example.com");
    expect(parsedBody.subject).toBe("Collaboration");
    expect(parsedBody.message).toBe("Let's connect!");
  });

  it("throws when remote endpoint returns error", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ success: false, message: "Invalid access key" }),
    });

    await expect(
      submitContactMessage(
        {
          name: "Bob",
          email: "bob@example.com",
          message: "Test",
          accessKey: "bad-key",
        },
        "https://api.web3forms.com/submit",
        mockFetch as unknown as typeof fetch,
      ),
    ).rejects.toThrow("Invalid access key");
  });
});
