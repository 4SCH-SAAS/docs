---
id: super-admin-guide
title: Super Admin Guide
description: Complete Super Admin guide for 4SCH — provision new schools, assign custom subscription packages, review School Inquiries, switch tenant context, and manage global platform settings (email, payment providers, demo mode, maintenance mode, 2FA, email templates).
keywords: [Super Admin, school provisioning, custom subscription package, school inquiries, tenant switcher, platform settings, maintenance mode, two-factor authentication, email templates, 4SCH]
sidebar_position: 11
---

import TOCInline from '@theme/TOCInline';

# Super Admin Guide

Welcome! This guide is for **4SCH Super Admins** — the people who provision and oversee every school on the platform. Your job is different from a School Admin's: you don't run one school, you run the platform itself.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## The Super Admin Dashboard

When you sign in as a Super Admin, the dashboard you land on is platform-wide — not school-specific.

### What You'll See

- **Total Schools** — count of every school on the platform
- **Active Schools** — schools with a valid subscription
- **Inactive Schools** — schools whose subscription has ended or been suspended
- **Subscriptions Generated This Month** — billing activity at a glance
- **Recent Inquiries** — new sign-up requests waiting on you
- **Last Scheduled Run** — a green tick confirms overnight billing and reminder jobs ran successfully

### Sidebar Items That Are Only Yours

Normal School Admins don't see these — they're your tools for running the platform:

- **Schools** — every school on the platform; provision new ones; review status
- **Inquiries** — the public sign-up queue
- **Packages** — the standard catalog (recurring and prepaid) plus custom plans
- **System Settings** — all global, platform-wide configuration
- **Email Templates** — the wording of every system email

### Tenant Switcher

The top bar has one extra control just for you: a **tenant switcher** that lets you look at the system as if you were inside any specific school — invaluable when a school admin asks for help and you want to see what they're seeing.

---

## Provisioning a New School

This is one of your most common tasks. Open **Schools → Add School** and fill in the form.

### Step 1: School Identity

- **School name** — the official name of the school
- **Subdomain** — what becomes the school's sign-in URL (e.g. `sunshine` → `sunshine.4sch.com`). Pick something short and recognisable.
- **First School Admin's first name, last name, and email** — this person will receive the welcome email
- **Phone number** — including the country code
- **School address** — appears on official documents
- **Logo upload** — shows on every report card, receipt, and printed page

### Step 2: Subscription Package

You have two choices here:

- **Pick a standard package** from the catalog — recurring or prepaid — that the school will pay for through their connected payment provider
- **Assign Custom Package** — attach a custom plan you've built specifically for this school. Use this when you've agreed bespoke pricing, or when none of the standard plans fit the school's size or needs

### Step 3: Save

Click **Save**. 4SCH automatically:
- Creates the school
- Creates the first School Admin user
- Emails them a welcome message with their sign-in URL, username, and temporary password

No further action is needed from you for the school to start using the platform.

:::tip Before You Provision
Make sure the school admin's email address is one they actually check. If the welcome email bounces (typo, full inbox, blocked sender), the school can't sign in until you resend it from **Schools → [school name] → Resend Welcome Email**.
:::

---

## Reviewing School Inquiries

When the public inquiry form is enabled on the homepage, every submission lands in **Schools → Inquiries**.

### The Inquiry Queue

Each row shows the school name, contact email, contact phone, submission date, and a status badge:

| Status | Meaning |
|---|---|
| **New** | Just submitted; needs your attention |
| **Contacted** | You've followed up by email or phone |
| **Provisioned** | The school now has a real account |
| **Declined** | Not a fit — wrong region, wrong school type, or spam |

Use the filter at the top to show only **New** inquiries first.

### Acting On an Inquiry

1. Click a row to open the detail panel — you'll see all four fields the prospective school submitted (name, email, phone, tagline / about)
2. After your first contact attempt, change the status to **Contacted** so your team knows it's already in motion
3. When you're ready to give the school a real account, click **Provision This School** at the top right — the **Add School** form opens pre-filled with the inquiry's details. Fill in the subscription package and click Save. The inquiry's status moves to **Provisioned** automatically.
4. If an inquiry isn't a fit, change its status to **Declined** so it drops out of your active list.

### Turning the Inquiry Form On or Off

You control whether the inquiry form appears on the public homepage:

1. Open **System Settings → School Inquiry**
2. Toggle the form on or off

Turn it off temporarily if you can't keep up with response times — you don't want inquiries to wait more than 1–2 business days.

---

## Managing Subscription Packages

Every package a school can subscribe to lives in **Packages**.

### Catalog Structure

| Tab | Description |
|---|---|
| **Recurring** | Bills every billing cycle and renews automatically |
| **Prepaid** | One-off purchase for a fixed number of days, no auto-renewal |

Each row shows: package name, price, billing cycle (in days), feature limits (max users, max storage, included modules), and status (Active / Inactive).

### Creating a Package

Click **Add Package** → fill in:

- **Name** — what schools will see in the catalog
- **Type** — recurring or prepaid
- **Price + currency**
- **Billing cycle (days)** — 4SCH calculates renewals from this number, so use a clear `30` or `90` rather than ambiguous wording
- **Trial flag** — toggling it on shows a trial-duration field. Trial packages let a school try a higher tier free for a short window before being moved onto a paid plan automatically.
- **Feature limits & module checkboxes**

### Custom Plans

Custom plans you've assigned to specific schools also appear in **Packages** so you can see exactly what each school is on at a glance. To change a custom plan's terms, open the school in **Schools → [school name]** and update its package from there.

### Rules of Thumb

- Keep the standard catalog small — three to five well-differentiated tiers tend to outperform ten almost-identical ones
- Set the billing cycle in **days**, not months
- Use **trial** sparingly with a short, well-defined window

---

## Switching Tenant Context

When a school admin asks for help and you want to see exactly what they're seeing, use the tenant switcher in the top bar.

1. Click the tenant switcher in the top bar
2. Type the school's name → suggestions appear
3. Click to select

You'll know you're in that school's context because:

- A **banner at the top** explicitly states "You are now viewing [School Name] as Super Admin"
- The **sidebar redraws** to match a normal School Admin's
- A **"Back to Super Admin View"** button appears in the top bar so you never lose your way home

Tenant switching is read-and-help, not a long-term takeover. Try not to make changes in a school's setup unless they've explicitly asked you to — keep the school admin in control of their own data.

---

## Global System Settings

**System Settings** is your control room for the whole platform. The page is organised into side tabs.

### General

The platform's name, logo, contact email and phone, and the default language new users land on.

### Payment Configuration

Platform-level access keys for Paystack, Flutterwave, and Stripe. The form is identical to the one individual schools use, just at platform scope.

### Email Settings

The full SMTP form used to send every email the platform produces — welcome emails, password resets, payment receipts.

| Field | Notes |
|---|---|
| Mail Driver | usually `smtp` |
| Mail Host | e.g. `smtp.gmail.com`, `smtp.office365.com`, `smtp.sendgrid.net` |
| Mail Port | `587` for TLS, `465` for SSL |
| Mail Username | the sending email address |
| Mail Password | For Gmail/M365 with 2-Step Verification, use an **App Password** (not your normal login password) |
| Mail Encryption | `tls` or `ssl` |
| Mail From Address / Mail From Name | What recipients see in their inbox |

### School Inquiry

Toggle the public inquiry form on/off and edit the acknowledgement email template that prospective schools receive.

### Demo Mode

- Toggle demo schools on or off platform-wide
- Cap how many demo schools can be created per day
- Set how long demo data lives before being reset

### Maintenance Mode

A single toggle. When on, only Super Admins can sign in. Use it during upgrades or planned downtime so nobody gets stuck mid-action.

### Two-Factor Authentication

Require a second verification step for Super Admin and School Admin sign-ins. Strongly recommended for Super Admin in particular.

### Email Templates

Edit the wording of every system email. Each template supports placeholder variables that get filled in automatically when the email is sent:

- `{school_name}`
- `{super_admin_name}`
- `{login_url}`
- `{username}`
- `{temporary_password}`
- `{payment_amount}`
- `{invoice_number}`

---

## Daily & Weekly Checklist

### Every Morning

- [ ] Skim **Inquiries** for new submissions (aim to respond within 1 business day)
- [ ] Skim **Schools → Recently Inactive** to spot any school whose plan just lapsed; reach out before they churn
- [ ] Confirm the **Last Scheduled Run** indicator on the dashboard is green
- [ ] Check **Recent Schools** for any provisioning that completed overnight
- [ ] Glance at the notification feed for anything addressed to you

### Once a Week

- [ ] Review **Packages** sales to see which tiers are converting and which aren't
- [ ] Review **Schools → Subscription Status** to spot any school sliding into a grace period

---

## Related Reading

- **[Subscription, Billing & Expiry](./subscription-expiry-retention-policy.md)** — the rules that govern grace periods, terminations, and the scheduled jobs that drive renewals
- **[Notification Settings & Management](./notification-settings-management.md)** — for the full SMTP / FCM setup details
- **[School Admin Guide](./school-admin.md)** — what the people you provision are doing on their side
- **[Integrations](../reference/integrations.md)** — Paystack / Flutterwave / Stripe setup details

---

## Video Walkthrough

A 12-minute video version of this guide lives at `video-tutorials/scripts/02-role-based/08-super-admin-guide.md`.
