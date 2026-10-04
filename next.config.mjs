/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // React's development error overlay and Turbopack source maps use eval to
    // reconstruct call stacks. Production React does not require it, so never
    // include this exception in the deployed policy.
    const scriptSource = isDevelopment
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      : "script-src 'self' 'unsafe-inline'";

    const contentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://api.web3forms.com",
      scriptSource,
      "style-src 'self' 'unsafe-inline'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
