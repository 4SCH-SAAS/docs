---
id: troubleshooting
title: Troubleshooting
sidebar_position: 2
---

# Troubleshooting

Sign-in issues:
- Password reset doesn’t arrive:
  - Check spam folder; confirm email on file; ask admin to resend or verify SMTP
- SSO loop or error:
  - Confirm time sync (NTP), client IDs, redirect URIs, and user mapping

Data imports:
- CSV rejected:
  - Validate headers match template; ensure required fields; check UTF-8 encoding and delimiters
- Duplicate records:
  - Confirm unique IDs; use merge/update mode where available

Attendance & grades:
- Cannot submit attendance:
  - Verify timetable is published; check teacher’s class assignment; confirm policy windows
- Gradebook locked:
  - Assessment may be finalized; request admin to unlock if policy allows

Billing:
- Payment fails:
  - Verify gateway status, invoice currency, and payer details; check webhooks for reconciliation
- Missing receipt:
  - Confirm payment settled; regenerate receipt from invoice view

Messaging:
- Messages not delivered:
  - Check audience filters, throttling limits, and provider status; review bounce logs
