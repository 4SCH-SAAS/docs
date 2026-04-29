---
sidebar_position: 5
title: Adding In-App Help (Tooltips)
description: Guide for contributors and developers to add helpful tooltips throughout the 4SCH application.
keywords: [contributing, tooltips, in-app help, documentation, developer guide]
---

# Adding In-App Help Tooltips

import Link from '@docusaurus/Link';

This guide explains how to add helpful tooltips to screens in the 4SCH application. The tooltip system pulls help text from documentation, ensuring in-app help and documentation stay in sync.

## How the System Works

```
┌─────────────────────────────────────────────────────────────┐
│  /docs/docs/guides/*.md                                     │
│  (Markdown files with help_keys frontmatter)                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼  php artisan help:generate
┌─────────────────────────────────────────────────────────────┐
│  public/assets/user-guide/inline-help.json                  │
│  (Auto-generated JSON file)                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼  HelpService loads & caches
┌─────────────────────────────────────────────────────────────┐
│  <x-help-tooltip key="..." />                               │
│  (Blade component renders tooltip in views)                 │
└─────────────────────────────────────────────────────────────┘
```

## Step 1: Add Help Content to Documentation

Add `help_keys` to the frontmatter of relevant markdown files in `/docs/docs/guides/`.

### Example: Adding Help for Term Exams

**File:** `docs/docs/guides/continuous-assessment.md`

```yaml
---
sidebar_position: 12
title: Continuous Assessment Guide
help_keys:
  term_exams:
    intro: "Term Exams organize your assessments and CA calculations."
    name: "Give it a clear name like 'Term 1 Exam'."
    start_date: "When this assessment period begins."
    end_date: "When this assessment period ends. Must be after start date."
  ca_config:
    intro: "Configure CA weightages. Total must equal 100%."
    weightage: "Percentage weight (0-100) of this CA component."
---
```

### Best Practices for Help Text

**Do:**
- ✅ Keep text short (1-2 sentences ideal)
- ✅ Use friendly, end-user language
- ✅ Provide examples when helpful
- ✅ Explain **why**, not just **what**
- ✅ Include constraints (e.g., "Must equal 100%")

**Don't:**
- ❌ Don't use technical jargon
- ❌ Don't write paragraphs (use docs guides for that)
- ❌ Don't repeat the field label
- ❌ Don't include HTML (will be escaped)

## Step 2: Generate the Help JSON

After adding/updating `help_keys` in documentation, regenerate the JSON:

```bash
cd /path/to/staging.4sch.com
php artisan help:generate
```

**Expected output:**
```
🔍 Generating inline help content from documentation...
📂 Scanning: /path/to/docs/docs
📄 Found 25 markdown files
  ✓ guides/continuous-assessment.md: 12 keys
  ✓ guides/offline-exams.md: 8 keys

📊 Summary:
  • Files processed: 25
  • Files with help_keys: 2
  • Total help keys: 20
  • Output path: public/assets/user-guide/inline-help.json

✅ Help content generated successfully!
🗑️  Cache cleared
```

### Useful Command Options

```bash
# Dry run (preview without writing)
php artisan help:generate --dry-run

# Custom docs path
php artisan help:generate --docs-path=/custom/docs

# Custom output path
php artisan help:generate --output=/custom/path/inline-help.json
```

## Step 3: Add Tooltips to Views

Use the `<x-help-tooltip>` component anywhere in your Blade templates.

### Basic Usage

```blade
<label>{{ __('start_date') }} <x-help-tooltip key="term_exams.start_date" /></label>
```

### Component Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | string | null | Help content key (e.g., 'term_exams.name') |
| `text` | string | null | Direct help text (overrides key lookup) |
| `placement` | string | 'top' | Tooltip position: top, bottom, left, right |
| `icon` | string | 'mdi-help-circle-outline' | Material Design icon |
| `class` | string | '' | Additional CSS classes |
| `showWhen` | bool | true | Conditionally show tooltip |

### Examples

#### Basic Tooltip
```blade
<x-help-tooltip key="term_exams.name" />
```

#### With Custom Placement
```blade
<x-help-tooltip key="ca_config.intro" placement="bottom" />
```

#### Direct Text (No Key Lookup)
```blade
<x-help-tooltip text="This field is auto-calculated based on CA scores" />
```

#### Conditional Display
```blade
<x-help-tooltip key="advanced_setting" :showWhen="$user->isAdmin()" />
```

#### Custom Styling
```blade
<x-help-tooltip key="term_exams.name" class="text-primary" />
```

### Common Placement Patterns

#### 1. Page Title Tooltip
```blade
<h3 class="page-title">
    {{ __('manage_term_exams') }}
    <x-help-tooltip key="term_exams.intro" placement="right" />
</h3>
```

#### 2. Form Field Label
```blade
<label>
    {{ __('field_name') }} 
    <span class="text-danger">*</span>
    <x-help-tooltip key="screen.field_name" />
</label>
```

#### 3. Card Header
```blade
<div class="card-header">
    <h6>{{ __('section_title') }} <x-help-tooltip key="screen.section" /></h6>
</div>
```

#### 4. Modal Title
```blade
<h5 class="modal-title">
    {{ __('configure_settings') }}
    <x-help-tooltip key="screen.settings" placement="bottom" />
</h5>
```

## Step 4: Test Your Tooltips

### Manual Testing

1. **Refresh the page** in your browser
2. **Hover over the help icon** (small circle with question mark)
3. **Verify the tooltip appears** with correct text
4. **Check positioning** - tooltip shouldn't overflow viewport

### Common Issues

#### Tooltip Not Showing

**Cause:** Help key not found in inline-help.json

**Fix:**
1. Check the key exists in your docs frontmatter
2. Run `php artisan help:generate`
3. Clear cache: `php artisan cache:clear`

#### Wrong Text Displayed

**Cause:** Cache not refreshed after updating docs

**Fix:**
```bash
php artisan help:generate
php artisan cache:clear
```

#### Tooltip Position Cut Off

**Cause:** Default placement doesn't fit

**Fix:** Use `placement` prop:
```blade
<x-help-tooltip key="..." placement="left" />
```

## Coverage Guidelines

### Phase 1: Critical Admin Screens

Priority screens to cover first:

- ✅ Term Exams (`terms/index`)
- ✅ CA Configuration modal
- ✅ Manage Exams (`exams/index`)
- ⏳ Schools, Classes, Subjects
- ⏳ Students, Staff, Grades
- ⏳ Sessions, Semesters

### What Deserves a Tooltip?

**Always add tooltips to:**
- ✅ Page titles (intro/overview)
- ✅ Required form fields (`*` marked)
- ✅ Configuration options with constraints
- ✅ Fields with non-obvious behavior
- ✅ Settings affecting calculations
- ✅ Permissions and access controls

**Skip tooltips for:**
- ❌ Self-explanatory fields (Name, Email, Address)
- ❌ Read-only displays
- ❌ Standard buttons (Save, Cancel, Close)
- ❌ Static informational text

## Adding a New Screen's Tooltips

### Step-by-Step Workflow

1. **Identify the screen** and its key fields
2. **Open the relevant docs guide** (or create one)
3. **Add `help_keys` to frontmatter:**
   ```yaml
   help_keys:
     screen_name:
       intro: "What this screen is for"
       field_1: "Help for field 1"
       field_2: "Help for field 2"
   ```
4. **Generate JSON:** `php artisan help:generate`
5. **Edit the Blade view:**
   ```blade
   <h3>{{ __('page_title') }} <x-help-tooltip key="screen_name.intro" placement="right" /></h3>
   <label>{{ __('field_1') }} <x-help-tooltip key="screen_name.field_1" /></label>
   ```
6. **Test in browser**
7. **Commit your changes**

## Maintenance

### When to Update Help Text

Update help_keys when:
- 🔄 Field behavior changes
- 🔄 New constraints are added
- 🔄 User feedback indicates confusion
- 🔄 New features added

### Build Hook

The help generation can be automated in deployment:

```json
// composer.json
{
    "scripts": {
        "post-update-cmd": [
            "@php artisan help:generate"
        ]
    }
}
```

## Architecture Reference

### File Locations

| File | Purpose |
|------|---------|
| `app/Services/HelpService.php` | Loads and caches help content |
| `app/Console/Commands/GenerateHelpContent.php` | Artisan command for generation |
| `resources/views/components/help-tooltip.blade.php` | Reusable tooltip component |
| `public/assets/user-guide/inline-help.json` | Generated help content (don't edit manually) |
| `resources/views/layouts/footer_js.blade.php` | Global tooltip initialization |

### Translation Support

Help text is currently in English. To add translations:

1. Add language-specific help_keys:
   ```yaml
   help_keys:
     en:
       term_exams:
         name: "Give it a clear name..."
     fr:
       term_exams:
         name: "Donnez-lui un nom clair..."
   ```

2. Update `HelpService` to use `app()->getLocale()`

## Related Documentation

- <Link to="/guides/continuous-assessment">Continuous Assessment Guide</Link>
- <Link to="/guides/offline-exams">Offline Exams Guide</Link>
- [Docusaurus Frontmatter Docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter)

## Need Help?

If you have questions about adding tooltips:
- Check existing tooltip implementations in `terms/index.blade.php`
- Review the CA Configuration modal for complex examples
- Open an issue if you find bugs in the help system

---

**Tip:** Good tooltips reduce support burden and improve user experience. Take time to write helpful, clear help text! 💡
