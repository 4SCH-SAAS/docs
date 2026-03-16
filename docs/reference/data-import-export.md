---
id: data-import-export
title: Data Import & Export
sidebar_position: 2
description: Import and export data in 4SCH using CSV templates. Bulk upload students, staff, subjects. Best practices for data migration in Nigerian schools.
keywords: [data import, CSV upload, bulk student import, export data, data migration, staff import, student enrollment, CSV templates, data transfer]
---

import CardGrid from '@site/src/components/CardGrid';
import DataIcon from '@site/src/components/icons/Data';
import ReportsIcon from '@site/src/components/icons/Reports';

# Data Import & Export

<CardGrid
  cards={[
    { to: '#imports', title: 'Imports', description: 'CSV templates, mapping, validation', icon: <DataIcon /> },
    { to: '#best-practices', title: 'Best practices', description: 'Normalization, identifiers, testing', icon: <ReportsIcon /> },
    { to: '#exports', title: 'Exports', description: 'CSV/PDF reports and full exports', icon: <ReportsIcon /> },
  ]}
/>


## Imports {#imports}
- Staff, students, subjects, and enrollments via CSV
- Templates downloadable from each import page
- Validation preview before applying changes

### Bulk Marks Upload (Offline Exams)

Schools can upload offline exam marks in bulk using an Excel/CSV template.

**Where you’ll find it (typical):** Exams → Offline Exams → Select Exam → Mark Entry / Bulk Upload

#### Template Columns

The exported “dummy” file includes these columns:

- `exam_marks_id` (optional)
- `student_id` (required)
- `student_name` (for reference)
- `total_marks` (required)
- `obtained_marks` (required)

#### How updates vs new uploads work

- **First-time upload (new marks):** leave `exam_marks_id` empty.
- **Updating existing marks:** download the latest dummy file and keep the `exam_marks_id` values, then re-upload.

If you try to upload new rows (empty `exam_marks_id`) for a student who already has marks for that exam + subject, the system returns an error like:

> "Marks already exist. Please download the latest Dummy file to update marks."

#### Validation rules

- `student_id` must be numeric
- `total_marks` must be numeric
- `obtained_marks` must be numeric

The system also calculates:
- pass/fail based on the timetable’s **passing marks**
- grade based on the configured grade ranges

:::note Grades required
If grade ranges are not configured, bulk upload may fail with a "Grades data does not exist" type error.
:::

:::note Screenshot
Bulk data import

<figure>
  <img src="/img/data-import.svg" alt="Data import wizard with file upload, field mapping, and validation preview" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Data import wizard with file upload, field mapping, and validation preview</figcaption>
</figure>

_Map CSV columns and resolve validation errors before import._
:::

## Best Practices {#best-practices}
- Normalize class/section names to avoid duplicates
- Keep unique identifiers stable across terms
- Test with a small file before full import

## Exports {#exports}
- Standard reports as CSV/PDF
- Full data exports upon request (subject to permissions)
