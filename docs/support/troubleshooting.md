---
id: troubleshooting
title: Troubleshooting
sidebar_position: 2
description: Troubleshooting guide for 4SCH. Fix login issues, data import errors, attendance problems, payment failures, and messaging delivery issues.
keywords: [troubleshooting, fix errors, login problems, student password reset, GR number, CSV import errors, payment failed, attendance issues, technical support, error solutions, student login issues]
---

# Troubleshooting

Sign-in issues:
- Can't log in as a student:
  - Verify all three login credentials (case-sensitive):
    - **School Code** (provided by your school)
    - **GR Number** (General Roll Number - check your student ID card)
    - **Password** (initial password from school)
  - Try the self-service password reset on mobile app or web portal at [ngs.4sch.com](https://ngs.4sch.com)
  - Ensure you're entering the School Code exactly as provided
  - Clear browser cache and cookies (web portal)
  - Try the mobile app if web portal isn't working (or vice versa)
- Student password reset not working:
  - **Available on both platforms:** Password reset works on mobile app and web portal
  - **Verify GR Number:** Must match exactly as registered (check student ID card)
  - **Check Date of Birth format:** Must be dd-mm-yyyy (e.g., 15-08-2010, not 15/08/2010)
  - **Confirm School Code:** Ask your class teacher if unsure
  - **Common mistakes:** Wrong date format, incorrect GR Number, typing School Code incorrectly
  - **If still failing:** Contact school admin for manual reset
- Password reset doesn't arrive (Teachers/Parents/Staff):
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
