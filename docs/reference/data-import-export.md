---
id: data-import-export
title: Data Import & Export
sidebar_position: 2
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
