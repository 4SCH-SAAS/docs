# Video Script: Super Admin Guide

**Duration:** 12 minutes
**Target Audience:** 4SCH Super Admins — the people who provision and oversee every school on the platform
**Learning Objectives:**
- Sign in as a Super Admin and recognise the platform-wide dashboard
- Provision a new school (with or without a custom subscription package)
- Review and act on School Inquiries
- Switch tenant context to look inside a specific school
- Manage global platform settings (branding, payment providers, demo mode, maintenance mode, two-factor authentication)
- Handle the day-to-day Super Admin checklist confidently

---

## [00:00-00:25] INTRO (25 sec)

**[VISUAL]** 4SCH logo with the subtitle "Super Admin Guide". Background pulses gently between three large school logos to convey "you look after every school on the platform".

**[MUSIC]** Confident, calm background music

**[VOICEOVER]:**
"As a Super Admin, you have a different job from everyone else on 4SCH. You don't run one school — you run the platform itself. Schools, packages, branding, and global settings all live with you. This video walks through your day-to-day."

---

## [00:25-01:15] What's Different About the Super Admin Dashboard (50 sec)

**[VISUAL]**
- Sign-in page → enter Super Admin credentials → land on the dashboard
- Dashboard cards: "Total Schools", "Active Schools", "Inactive Schools", "Subscriptions Generated This Month", "Recent Inquiries"
- Sidebar shows top-level entries that a normal School Admin doesn't see: **Schools**, **Packages**, **Inquiries**, **System Settings**, **Email Templates**
- Top bar shows a tenant switcher that's empty by default (no specific school selected)

**[VOICEOVER]:**
"When you sign in as Super Admin, the dashboard you land on is very different from a School Admin's.

Instead of one school's stats, you see a roll-up across every school on the platform: how many schools are active, how many are inactive, how many new subscriptions were generated this month, and any recent inquiries that need your attention.

The sidebar exposes top-level entries that normal admins never see — **Schools**, **Packages**, **Inquiries**, **System Settings**, and **Email Templates**. These are your tools for running the platform.

And the top bar has one extra control that's only yours: a **tenant switcher** that lets you look at the system as if you were inside any specific school — handy when a school admin asks for help and you want to see what they're seeing."

**[ON-SCREEN TEXT]**
- "Super Admin = platform-wide view"
- "Top-level menu: Schools · Packages · Inquiries · System Settings"
- "Tenant switcher = see inside any school"

---

## [01:15-03:00] Provisioning a New School (105 sec)

**[VISUAL]**
- Sidebar → **Schools → Add School**
- Form fills in step by step:
  - **School name** — Sunshine Academy
  - **Subdomain** — sunshine
  - **School admin's first/last name + email** — admin@sunshineacademy.example
  - **Phone number** — +234…
  - **School address**, **logo upload**
  - Subscription package section: dropdown shows the available **standard packages** plus an option labelled **Assign Custom Package**
  - Select **Assign Custom Package** → second dropdown unlocks showing custom-built plans
- Click **Save**
- Success toast → school appears in the **Schools** list with an Active badge
- A welcome email animation pops up showing the new school admin receiving credentials

**[VOICEOVER]:**
"Provisioning a new school is one of your most common tasks. Open **Schools → Add School** and fill in the form.

The first half is the school's identity — name, subdomain, the first school admin's name and email, phone number, address, and logo. The subdomain is what becomes the school's sign-in URL, so pick something short and recognisable.

The second half is the subscription. You have two choices here:

- Pick a **standard package** from the catalog — recurring or prepaid — that the school will pay for through their connected payment provider.
- Pick **Assign Custom Package** to attach a custom plan you've built specifically for this school. Use this when you've agreed bespoke pricing with a school, or when none of the standard plans fit their size or needs.

Click **Save**. 4SCH creates the school, creates the first school admin user, and emails them a welcome message with their sign-in URL, username, and temporary password — exactly the welcome email covered in the **First-Time Visitor Onboarding** video. No further action is needed from you for the school to start using the platform."

**[ON-SCREEN TEXT]**
- "Schools → Add School"
- "Standard package or Assign Custom Package"
- "Welcome email sent automatically"

:::tip Before You Provision
Make sure the school admin's email address is one they actually check. If the welcome email bounces (typo, full inbox, blocked sender), the school can't sign in until you resend it from **Schools → [school name] → Resend Welcome Email**.
:::

---

## [03:00-04:30] Reviewing School Inquiries (90 sec)

**[VISUAL]**
- Sidebar → **Schools → Inquiries**
- List of inquiries, each row showing: school name, contact email, contact phone, submission date, status (**New**, **Contacted**, **Provisioned**, **Declined**)
- Filter at top: "Show only New"
- Click into a "New" row → detail panel slides in showing all four fields the prospective school submitted (name, email, phone, tagline)
- Status dropdown: change to **Contacted** → tick mark
- After a follow-up conversation, click **Provision This School** at the top right → opens the **Add School** form pre-filled with the inquiry's details
- Save → status auto-updates to **Provisioned** and the inquiry is moved to the archive

**[VOICEOVER]:**
"When the public inquiry form is enabled on the homepage, every submission lands in **Schools → Inquiries**. This is where you triage potential new customers.

Each inquiry shows the school name, contact email, contact phone, and the short "About your school" note the prospective admin filled in. New inquiries have a **New** status badge — start by filtering to those.

Open an inquiry to see the full submission. Once you've reached out by email or phone, change the status to **Contacted** so you and your team know what's already in motion.

When you're ready to give the school a real account, click **Provision This School**. The Add School form opens pre-filled with the inquiry's details, so you only need to fill in the subscription package and click Save. The inquiry's status moves to **Provisioned** automatically.

If an inquiry isn't a fit — wrong region, wrong school type, spam — change its status to **Declined** so it drops out of your active list."

**[ON-SCREEN TEXT]**
- "Schools → Inquiries"
- "New → Contacted → Provisioned (or Declined)"
- "Provision This School pre-fills the form"

:::tip Turning the Inquiry Form On or Off
You control whether the inquiry form appears on the public homepage. Open **System Settings → School Inquiry** and toggle it on or off. Turn it off temporarily if you can't keep up with response times — you don't want inquiries to wait more than 1–2 business days.
:::

---

## [04:30-06:00] Managing Subscription Packages (90 sec)

**[VISUAL]**
- Sidebar → **Packages**
- Two tabs at the top: **Recurring** and **Prepaid**
- Each row shows: package name, price, billing cycle in days, feature limits (max users, max storage, included modules), status (Active / Inactive)
- Click **Add Package** → form with:
  - Name, type (recurring / prepaid)
  - Price + currency
  - Billing cycle (days)
  - Trial flag (boolean) — toggling it on shows a trial-duration field
  - Feature limits & module checkboxes
- Save → new package appears in the catalog
- Switch to a Custom Plans area → existing custom plans tied to specific schools

**[VOICEOVER]:**
"Every package a school can subscribe to lives in **Packages**. You manage the whole catalog from here.

Each package has a name, a type (recurring or prepaid), a price, a billing cycle in days, and a list of feature limits and included modules. When you create or edit a package, you can also mark it as a **Trial** — trial packages let a school try a higher tier free for a short window before being moved onto a paid plan automatically.

Custom plans you've assigned to specific schools also appear here so you can see exactly what each school is on at a glance. To change a custom plan's terms, open the school in **Schools → [school name]** and update its package from there.

A few rules of thumb when building packages:

- Keep your standard catalog small — three to five well-differentiated tiers tend to outperform ten almost-identical ones.
- Set the **billing cycle in days**, not months — 4SCH calculates renewals from that number, so a clear 30 or 90 is better than ambiguous wording.
- Use **trial** sparingly, and set a short, well-defined trial window so trials don't drag on indefinitely."

**[ON-SCREEN TEXT]**
- "Packages → Recurring · Prepaid"
- "Billing cycle in DAYS, not months"
- "Trial = time-limited free tier"

---

## [06:00-07:30] Switching Tenant Context (90 sec)

**[VISUAL]**
- Top bar → tenant switcher dropdown
- Type "Sunshine" → suggestions appear → click **Sunshine Academy**
- Confirmation banner appears: "You are now viewing Sunshine Academy as Super Admin"
- The sidebar redraws to look like a School Admin's sidebar (Students, Staff, Classes, Fees, Exams, Settings, etc.)
- Dashboard now shows the school's own stats
- Top bar shows a clear "← Back to Super Admin View" button highlighted

**[VOICEOVER]:**
"When a school admin asks for help and you want to see exactly what they're seeing, use the tenant switcher in the top bar.

Type the school's name, click to select it, and 4SCH loads the same view that the school's own admins use. You can browse their classes, view their fees module, look at their report cards — anything you'd be able to do as their own admin.

You'll notice three things confirming you're now in that school's context:

- A **banner at the top** explicitly stating you're viewing the school as Super Admin
- The **sidebar redraws** to match a normal School Admin's
- A **"Back to Super Admin View"** button in the top bar so you never lose your way home

Tenant switching is read-and-help, not a long-term takeover. Try not to make changes in a school's setup unless they've explicitly asked you to — keep the school admin in control of their own data."

**[ON-SCREEN TEXT]**
- "Tenant switcher = type · pick · enter their world"
- "Banner + redrawn sidebar = you're in their view"
- "Use to help, not to take over"

---

## [07:30-09:30] Global System Settings (120 sec)

**[VISUAL]**
- Sidebar → **System Settings**
- Settings page with side-tab navigation:
  - **General** (platform name, logo, contact email/phone, default language)
  - **Payment Configuration** (Paystack / Flutterwave / Stripe access keys at platform level)
  - **Email Settings** (Mail Driver, Host, Port, Username, Password, Encryption, From Address, From Name — exactly the same form covered in the Notification Settings video)
  - **School Inquiry** (toggle public inquiry form on/off, set acknowledgement email template)
  - **Demo Mode** (toggle, daily demo-school limit, demo data retention days)
  - **Maintenance Mode** (toggle — when on, only Super Admin can sign in)
  - **Two-Factor Authentication** (require 2FA for Super Admin and School Admin sign-ins)
  - **Email Templates** (welcome email, password reset, payment receipt, inquiry acknowledgement — each editable with variable placeholders like {school_name}, {super_admin_name})

**[VOICEOVER]:**
"**System Settings** is your control room for the whole platform. The page is organised into side tabs:

**General** is where you set the platform's name, logo, contact email and phone, and the default language new users land on.

**Payment Configuration** holds the platform-level access keys for Paystack, Flutterwave, and Stripe — exactly the same form individual schools use, but at platform scope.

**Email Settings** is the SMTP form used to send every email the platform produces — welcome emails, password resets, payment receipts. Fill it in just as you would for a single school.

**School Inquiry** controls whether the public inquiry form appears on the homepage and what acknowledgement email a prospective school receives.

**Demo Mode** lets you enable demo schools, cap how many can be created per day, and decide how long demo data lives before being reset.

**Maintenance Mode** is a single toggle — when on, only Super Admins can sign in. Use it during upgrades or planned downtime so nobody gets stuck mid-action.

**Two-Factor Authentication** lets you require a second verification step for Super Admin and School Admin sign-ins. Strongly recommended for Super Admin in particular.

**Email Templates** is where you edit the wording of every system email. Each template supports placeholder variables like `{school_name}`, `{super_admin_name}`, `{login_url}` that get filled in automatically when the email is sent."

**[ON-SCREEN TEXT]**
- "System Settings = platform control room"
- "General · Payment · Email · Inquiry · Demo · Maintenance · 2FA · Templates"
- "Tip: turn on 2FA for Super Admin first"

---

## [09:30-11:00] Day-to-Day Super Admin Checklist (90 sec)

**[VISUAL]**
- Daily checklist appears item-by-item:
  - ☐ Skim **Inquiries** for new submissions
  - ☐ Skim **Schools → Recently Inactive** for any school whose subscription just lapsed
  - ☐ Confirm overnight scheduled tasks ran (see the dashboard "Last Scheduled Run" indicator)
  - ☐ Check **Recent Schools** for any provisioning that completed last night
  - ☐ Skim the global notification feed for anything that needs your attention
  - ☐ Once a week — review **Packages** sales and **Schools → Subscription Status** for renewal trends

**[VOICEOVER]:**
"Here's a sensible daily and weekly rhythm.

Every morning:
- Skim **Inquiries** for new submissions. Aim to respond within one business day.
- Skim **Schools → Recently Inactive** to spot any school whose plan just lapsed; reach out before they churn.
- Confirm the **Last Scheduled Run** indicator on the dashboard is green — that tells you overnight billing and reminders ran successfully.
- Check **Recent Schools** if your team provisioned any schools overnight.
- Glance at the notification feed for anything addressed to you.

Once a week:
- Review **Packages** sales to see which tiers are converting and which aren't.
- Review **Schools → Subscription Status** to spot any school sliding into a grace period so you can reach out proactively."

**[ON-SCREEN TEXT]**
- "Daily: Inquiries · Recently Inactive · Scheduled tasks · Recent Schools · Notifications"
- "Weekly: Package sales · Subscription Status trends"
- "Respond to inquiries within 1 business day"

---

## [11:00-12:00] Wrap-up & What's Next (60 sec)

**[VISUAL]**
- Recap of the seven main areas Super Admins own: Schools, Inquiries, Packages, Tenant Switcher, System Settings, Daily Checklist, Email Templates
- Up-next teaser: Payroll, Staff Attendance & Leave, Issuing Certificates
- 4SCH logo + soft outro music

**[VOICEOVER]:**
"Those are the seven main areas you own as a Super Admin — schools, inquiries, packages, tenant switching, system settings, your daily checklist, and email templates.

Two videos that pair well with this one if you also help with day-to-day school operations: **System Configuration** (a deeper dive into the email, payment, and integration settings) and **Choosing a Subscription Package** (the school admin's view of subscribing, so you can guide them when they get stuck). See you in the next video."

**[ON-SCREEN TEXT]**
- "Pair with: System Configuration"
- "Pair with: Choosing a Subscription Package"

---

### SEO Metadata

**Title:** Super Admin Guide for 4SCH — Provisioning Schools, Packages, Inquiries & Global Settings

**Description:** A 12-minute walkthrough of the Super Admin role in 4SCH — provisioning new schools, assigning custom subscription packages, reviewing public inquiries, switching tenant context to help a specific school, managing global platform settings (email, payment providers, demo mode, maintenance mode, two-factor authentication, email templates), and the daily and weekly Super Admin checklist.

**Tags:** Super Admin, school provisioning, custom package, school inquiries, tenant switcher, platform settings, maintenance mode, two-factor authentication, email templates, 4SCH tutorial

---

## Script Version History

- **v1.0** — June 2026 — Initial script creation. Covers Super Admin flows verified against the `ng.4sch.com` codebase (`SchoolController::store` with `assign_package`, `SchoolController::schoolInquiryIndex/List/Update`, `Auth::user()->hasRole('Super Admin')` middleware in `WizardSettings`, `CheckSchoolStatus`, `DemoMiddleware`, `CheckForMaintenanceMode`, `CheckTwoFactorAuthenticated`, the platform-level tenant switching via `APISwitchDatabase`). Standard end-user UI voice; real on-screen labels; no SMS, no backend/code references beyond what an admin sees.
