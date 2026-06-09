---
id: certificates
title: Issuing Certificates
description: Build reusable certificate templates with the drag-and-drop design canvas, issue student certificates individually or in bulk for a whole class, issue staff certificates, and distribute as PDFs.
keywords: [certificates, certificate template, student certificate, staff certificate, employment letter, school awards, graduation, end of term, QR verification, 4SCH]
sidebar_position: 14
---

import TOCInline from '@theme/TOCInline';

# Issuing Certificates

Certificates are one of those tasks that always seem to come up at the worst time — graduation week, sports day, the day someone needs a letter for a visa. 4SCH lets you build clean, reusable templates once, then issue certificates in seconds.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Quick Overview

The full Certificates flow in 4SCH is:

1. **Build a template** once with the drag-and-drop design canvas
2. **Issue certificates** to one or many students (or staff)
3. **Distribute** as PDFs — download, email, or bulk-download as ZIP

---

## Building a Certificate Template

Open **Certificate Templates → Add Template**.

### Step 1: Template Settings

| Field | Notes |
|---|---|
| **Name** | What you'll pick from the template dropdown when issuing (e.g. "End-of-Term Award", "Leaving Certificate") |
| **Type** | Student or Staff — determines which Issue page can use this template |
| **Page size** | A4 or Letter |
| **Orientation** | Portrait or Landscape |

Click **Save & Design** to open the design canvas.

### Step 2: The Design Canvas

The canvas shows a blank page with a side panel of drag-and-drop elements:

- **Background image** — upload your school's certificate border
- **Text blocks** — for the wording; double-click any block to edit and apply font/colour
- **Logo** — your school logo
- **Signature image** — the principal's or head of school's signature
- **Date stamp**
- **QR code** — automatically embeds a verification URL (see below)
- **Form-field placeholders** — drag these onto the canvas wherever you want a real value to appear

### Available Placeholders

| Placeholder | Filled in with |
|---|---|
| `{student_name}` | The recipient's full name (for Student templates) |
| `{staff_name}` | The recipient's full name (for Staff templates) |
| `{class}` | The student's class |
| `{section}` | The student's section/stream |
| `{session}` | The current session year |
| `{issued_date}` | The date you specify at issue time |
| `{certificate_number}` | Auto-generated unique reference number |
| `{achievement}` | Free-text field you specify at issue time |
| `{position}` | The staff member's position (for Staff templates) |
| `{date_of_joining}` | The staff member's joining date (for Staff templates) |

4SCH fills in each placeholder with the right value at the moment you issue a certificate.

### Step 3: Save

Click **Save Design**. The template appears in your templates list with a small preview thumbnail, ready to use as many times as you like.

---

## Issuing Student Certificates

1. Open **Certificates → Issue Certificate**
2. Fill in:
   - **Template** dropdown — picks a saved Student template
   - **Class / Section** filter — narrows the student list
   - **Student picker** — multi-select with checkboxes; **Select All** is at the top of the list
   - **Extra fields** specific to your template (e.g. **Achievement**, **Issued Date**)
3. Click **Preview** to spot-check the first selected student's certificate
4. Click **Generate**

4SCH renders one PDF per selected student, fills in all placeholders with each student's real details, and shows them on a results page with:

- **Download PDF** button per row
- **Email to Parent** button per row
- **Download All as ZIP** at the top — perfect for graduation day when you want to print fifty certificates in one go

---

## Issuing Staff Certificates

Staff certificates work the same way, in their own area:

1. Open **Certificates → Staff Certificate**
2. Pick the Staff template you built — typical examples include an **employment letter**, a **service certificate**, or a **teaching-recognition award**
3. Pick the staff members it applies to
4. Fill in any extra fields the template needs
5. Click **Generate**

The same per-person PDF, email, and bulk-download options apply.

---

## QR-Code Verification

The QR code element in the design canvas automatically embeds a verification URL. Anyone scanning the QR with their phone is taken to a 4SCH page that confirms:

- The certificate is genuine
- It was issued by your school
- The recipient's name and certificate number match

This makes 4SCH-issued certificates straightforward to authenticate for parents sharing them with future schools, employers, or visa offices.

---

## Practical Tips

### Build Templates Once

A school typically only needs five or six templates:
- End-of-Term Award
- End-of-Year Award
- Sports Award
- Leaving Certificate
- Employment Letter
- Service Certificate

Re-use them across events; don't redesign per ceremony.

### Always Preview Before Generating Fifty

Click **Preview** before clicking **Generate**. It's the cheapest way to catch a typo before you've printed an entire batch.

### Use a Fixed Issued Date

Set `{issued_date}` to a fixed batch date — typically your ceremony date — rather than "today", so all the certificates in the batch share a consistent date.

### Save Your Signature Image Once

Upload your school's official signature image in **School Settings → Branding** so it's available in the side panel of every template you build.

### Use the Certificate Number

The auto-generated `{certificate_number}` placeholder makes every certificate uniquely traceable. Invaluable when a parent calls a year later asking for a duplicate.

---

## Troubleshooting

### A placeholder is showing as `{student_name}` literally on the PDF

The template wasn't saved with that placeholder dragged onto the canvas. Open the template's design canvas, drag the correct placeholder element from the side panel onto the page, and **Save Design**.

### The certificate is too small / too large / cut off

Open the template's design canvas and check the **Page size** and **Orientation** match the certificate paper you're printing on. Re-position elements to fit if needed.

### Email to Parent didn't send

- Confirm the parent has a valid email address on the student's profile
- Confirm your school's email is set up correctly under **Settings → Email Settings** (see **[Notification Settings & Management](./notification-settings-management.md)**)

### QR code scans to the wrong URL

The QR is generated by 4SCH at issue time. If the URL is wrong, contact 4SCH support — this usually means your school's verification domain hasn't been configured at the platform level.

---

## Related Reading

- **[Report Card Generation](./offline-exams.md)** — the closely related document-issuing workflow
- **[School Admin Guide](./school-admin.md)** — for the broader admin context
- **[Notification Settings & Management](./notification-settings-management.md)** — for the email setup that powers "Email to Parent"

---

## Video Walkthrough

A 5-minute video version of this guide lives at `video-tutorials/scripts/05-feature-focused/20-issuing-certificates.md`.
