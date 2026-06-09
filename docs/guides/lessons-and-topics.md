---
id: lessons-and-topics
title: Lessons & Topics
description: Create lessons in 4SCH and attach learning materials — PDFs, videos, YouTube links, and other resources. Organise lessons by class and subject so students always see what's relevant to them.
keywords: [lessons, topics, learning materials, lesson plans, video lessons, YouTube, PDF, teaching resources, 4SCH]
sidebar_position: 7
---

import TOCInline from '@theme/TOCInline';

# Lessons & Topics

Lessons are how 4SCH's teachers share learning material with students — slide decks, recorded video classes, YouTube playlists, links to external resources, and any combination of those. Each lesson is scoped to a class section and subject, so students only see what's actually relevant to them.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Quick Overview

The lessons workflow in 4SCH is:

1. **Teacher creates a lesson** for one or more class sections in a specific subject
2. **Teacher attaches files or links** to the lesson (PDFs, videos, YouTube, other URLs)
3. **Students see the lesson** under their subject when they sign in to the web portal or mobile app
4. **The teacher can update or delete** files at any time

---

## Who Can Create Lessons?

By default, only the **teacher** assigned to a class–subject pair can create lessons for that pair. The mapping is set up under **Staff → Teacher–Subject Assignment** (see **[Teacher–Subject Assignment](./teacher-subject-assignment.md)**).

If you're a Class Teacher with multiple subjects, you'll see one lesson list per subject; the **Subject** filter at the top of the lessons page is how you switch between them.

---

## Creating a Lesson

1. Sign in as a Teacher
2. Open **Lessons** in the sidebar
3. Click **Add Lesson**
4. Fill in the form:

| Field | Notes |
|---|---|
| **Name** | A clear, learner-friendly title (e.g. "Chapter 3: The Water Cycle") |
| **Description** | A short summary or learning objective — appears on the lesson card so students know what's inside |
| **Class Section** | One or more class sections this lesson applies to (you can tick multiple) |
| **Subject** | Which subject the lesson belongs to |

5. Click **Save** to create the lesson — you'll then be on the lesson's detail page where you can attach materials

---

## Attaching Files and Links

Each lesson can have one or more **attachments**. 4SCH supports four kinds:

| Type | What it is | When to use |
|---|---|---|
| **File Upload** | A document (PDF, DOC, slide deck, image, etc.) | Slide decks, worksheets, notes |
| **Video Upload** | A video file uploaded directly to 4SCH | Short clips you've recorded yourself |
| **YouTube Link** | A regular YouTube URL | Public YouTube videos — preferred over uploading a copy |
| **Other Link** | Any other URL (Khan Academy, a Google Drive folder, a website) | External resources |

### Adding an Attachment

1. On the lesson's detail page, click **Add Attachment** (or the relevant tab)
2. Pick the **Type** from the dropdown
3. Fill in the fields the type asks for:
   - **Name** — a short label (e.g. "Lecture slides", "Khan Academy intro")
   - **File** — for File Upload or Video Upload
   - **Thumbnail** — for any non-file type (so the attachment has a preview image)
   - **Link** — for YouTube Link or Other Link (4SCH validates that YouTube URLs are real YouTube URLs)
4. Click **Save**

The attachment appears immediately on the lesson page and is visible to students who can access that class section.

### Size and Type Limits

- The maximum file size is set platform-wide (typically a few MB per file)
- File uploads must use a supported file extension — the form will block anything else with a clear error message

If a file is too large or the wrong type, the form tells you exactly what's wrong so you can resize or convert before retrying.

---

## Editing or Deleting a Lesson

### Edit

1. In the lessons list, click the **edit** icon on the lesson's row
2. Update the name, description, class sections, or subject as needed
3. Click **Save**

### Delete

1. Click the **delete** icon on the lesson's row
2. Confirm — the lesson and all of its attachments are removed for every class section it was assigned to

### Removing One Attachment Without Deleting the Lesson

On the lesson's detail page, hover any attachment row and click the small **delete** icon next to it. Only that attachment is removed; the lesson itself and the other attachments stay.

---

## How Students See Lessons

When a student signs in (web or mobile):

1. They open **Subjects** (or **My Subjects**) in the sidebar
2. They pick a subject — they see all lessons their teacher has shared for that subject in the current session year
3. Each lesson card shows the **name**, **description**, the date it was published, and an icon for each attachment type
4. They click into the lesson to view or download attachments

YouTube and Other Link attachments open in a new tab. File and Video attachments either preview inline or download depending on the browser.

---

## Searching Lessons

Use the **Search** box at the top of the lessons list to find a lesson by name. Useful when you have a long lesson list spanning multiple terms.

---

## A Note on Topics

In the 4SCH dashboard you'll see the word **Topic** in a few places — for example, in **Class Subjects → Topics** and on student timetables. Topics are the **syllabus headings** that lessons relate to. Right now they're managed alongside lessons (creating a lesson can implicitly create the matching topic), so most teachers don't need to think about Topics separately — focus on Lessons and the Topic side takes care of itself.

If your school uses a **detailed syllabus tracker**, the Topics list under each class subject lets you tick off completed topics so the principal can see progress at a glance.

---

## Practical Tips

### One Lesson Per Class Period (Roughly)

A good rule of thumb is one lesson per scheduled class period — that keeps the list scannable for students and lets them find the materials for "yesterday's lesson" without scrolling forever.

### Use YouTube Where You Can

YouTube Link attachments are faster, more reliable, and free of upload limits. Prefer them over uploading large video files unless your school is in an environment with limited or paid YouTube access.

### Add a Thumbnail to Every Video and Link

A clear thumbnail makes the lesson page feel tidy. For YouTube links, an obvious thumbnail is the video's existing cover image (download it once and re-use).

### Spread Multi-Class Lessons

If two or more class sections cover the same content, create the lesson once and tick all the relevant **Class Section** checkboxes. There's no need to duplicate work.

---

## Troubleshooting

### "Lesson Management feature not enabled"

Your school's subscription package may not include the Lessons module. Ask your School Admin to check **Settings → Subscription** — they may need to switch to a package that includes Lessons, or you may need a different plan.

### "I don't have permission to create lessons"

Lessons require the **lesson-create** permission. Your School Admin grants this from **Settings → Roles & Permissions**. If you're a Class Teacher, this should already be enabled — check with your admin if it isn't.

### Students can't see the lesson I created

- Confirm you ticked the correct **Class Sections** when creating it
- Confirm the **Subject** matches one that's actually assigned to those class sections
- Ask the student to refresh the page — newly published lessons appear immediately, but a long-open browser tab may not pick them up

### My file won't upload

- Check the error message — it usually tells you exactly what's wrong (file too large, wrong extension)
- Try compressing the file or converting it to a supported type
- For very large videos, upload them to YouTube (unlisted is fine) and use a YouTube Link attachment instead

### A YouTube link is rejected as invalid

Confirm the URL starts with `https://www.youtube.com/...` or `https://youtu.be/...`. Shortened third-party redirects to YouTube aren't recognised — paste the full YouTube URL directly.

---

## Related Reading

- **[Teacher–Subject Assignment](./teacher-subject-assignment.md)** — the prerequisite mapping that decides which lessons a teacher can create
- **[Assignments](./assignments.md)** — for tasks students complete and submit (different from lesson materials)
- **[Continuous Assessment](./continuous-assessment.md)** — for grading the work students do based on these lessons
- **[Teacher Guide](./teachers.md)** — broader teacher context

---

## Video Walkthrough

A related video walks through the daily teacher workflow including lessons — see `video-tutorials/scripts/02-role-based/02-teacher-guide.md`.
