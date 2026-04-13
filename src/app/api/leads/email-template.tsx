import * as React from "react";

interface LeadEmailProps {
  firstName: string;
  guideUrl: string;
}

export function LeadWelcomeEmail({ firstName, guideUrl }: LeadEmailProps) {
  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9fafb",
          margin: 0,
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#1C1917",
              padding: "28px 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#F59E0B",
                fontWeight: "bold",
                fontSize: "20px",
                margin: 0,
              }}
            >
              ⛏ FIFO Ready
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: "32px" }}>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#111827",
                marginTop: 0,
              }}
            >
              G&apos;day {firstName}, your guide is ready 🎯
            </h1>
            <p style={{ color: "#4B5563", lineHeight: "1.6" }}>
              Here&apos;s your copy of the{" "}
              <strong>FIFO Fast-Track Guide</strong> — the exact 5-step process
              2,400+ Aussies have used to land their first mining role.
            </p>
            <p style={{ color: "#4B5563", lineHeight: "1.6" }}>
              Inside you&apos;ll find:
            </p>
            <ul style={{ color: "#4B5563", lineHeight: "2", paddingLeft: "20px" }}>
              <li>
                The certifications you actually need (and the ones that are a
                waste of money)
              </li>
              <li>The 8 documents every FIFO employer will ask for</li>
              <li>How to prepare for your pre-employment medical</li>
              <li>
                The 12 companies actively hiring entry-level workers right now
              </li>
              <li>
                The 3 interview questions every hiring manager asks — with
                sample answers
              </li>
            </ul>

            {/* CTA Button */}
            <div style={{ textAlign: "center", margin: "32px 0" }}>
              <a
                href={guideUrl}
                style={{
                  backgroundColor: "#F59E0B",
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Read Your Free Guide →
              </a>
            </div>

            {/* Soft pitch */}
            <div
              style={{
                borderTop: "1px solid #E5E7EB",
                paddingTop: "24px",
                marginTop: "24px",
              }}
            >
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ color: "#111827" }}>
                  Want the full toolkit?
                </strong>{" "}
                The guide gives you the roadmap.{" "}
                <a
                  href="https://fifoready.com.au"
                  style={{ color: "#F59E0B" }}
                >
                  FIFO Ready
                </a>{" "}
                gives you every document template, medical prep guide, interview
                question bank, and resource to execute each step — all for a
                one-time $4.99 AUD.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              backgroundColor: "#F9FAFB",
              padding: "20px 32px",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <p
              style={{
                color: "#9CA3AF",
                fontSize: "12px",
                margin: 0,
                textAlign: "center",
              }}
            >
              You&apos;re receiving this because you requested the FIFO
              Fast-Track Guide from fifoready.com.au.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
