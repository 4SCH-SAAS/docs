---
sidebar_position: 9
title: Analytics & Tracking
description: Guide to Google Analytics 4 implementation and custom event tracking in 4SCH documentation
---

# Analytics & Tracking

This documentation site uses Google Analytics 4 (GA4) to understand how users interact with our documentation and improve the user experience.

## Overview

**Tracking ID**: `G-9DY20V8FQD`

Our GA4 implementation includes:
- Standard page view tracking
- Enhanced measurement features
- Custom event tracking for documentation-specific interactions
- Privacy-focused configuration with IP anonymization

## What We Track

### 1. **Page Views** 📄
Automatically tracked for all pages to understand which documentation is most valuable.

### 2. **Guide Section Views** 📚
When users view role-specific guides (teachers, parents, students, etc.), we track:
- Guide type (e.g., "teacher-guide", "parent-guide")
- Page path
- Time spent on page

**Event Name**: `guide_view`

### 3. **Search Interactions** 🔍
Tracks when users open the documentation search:
- Search button clicks
- Search box interactions

**Event Name**: `search_open`

### 4. **External Link Clicks** 🔗
Monitors clicks on external links to understand what external resources users need:
- Destination URL
- Link context

**Event Name**: `click` (category: `outbound`)

### 5. **Code Snippet Copies** 📋
Tracks when users copy code examples:
- Code snippet copied
- Page where code was copied from

**Event Name**: `code_copy`

### 6. **File Downloads** ⬇️
Monitors documentation and resource downloads:
- File name
- File URL
- Download timestamp

**Event Name**: `file_download`

## Privacy & Compliance

Our analytics implementation respects user privacy:

✅ **IP Anonymization**: All IP addresses are anonymized  
✅ **Secure Cookies**: SameSite=None;Secure flags set  
✅ **No PII**: We don't collect personally identifiable information  
✅ **GDPR Compliant**: Follows European data protection regulations  

## Custom Dimensions

We use custom dimensions to better understand documentation usage:

| Dimension | ID | Purpose |
|-----------|-----|---------|
| User Role | dimension1 | Track which user types view which content |
| Documentation Section | dimension2 | Identify popular documentation areas |
| Guide Type | dimension3 | Understand which guides are most used |

## Testing & Verification

### Browser Console Method

1. Open the documentation site
2. Open browser Developer Tools (F12)
3. Go to the Console tab
4. Run: `verifyGA4()`

This will check:
- ✅ Google Tag Manager script loaded
- ✅ dataLayer exists
- ✅ gtag function available
- ✅ Tracking ID configured
- ✅ Custom events setup

### Send Test Event

```javascript
// In browser console
testGA4Events()
```

This sends a test event to GA4. Verify in:
- GA4 Dashboard → Reports → Realtime → Events

### Monitor Events

```javascript
// Monitor for 10 seconds
monitorGA4(10000)
```

This will log all GA4 events to the console as they occur.

## Automated Testing

We provide a Node.js script for automated verification using Puppeteer:

### Installation

```bash
npm install puppeteer --save-dev
```

### Run Verification

```bash
node scripts/verify-ga4.js
```

Or programmatically:

```javascript
const { verifyGA4WithPuppeteer } = require('./scripts/verify-ga4.js');

// Test local development
await verifyGA4WithPuppeteer('http://localhost:3000');

// Test production
await verifyGA4WithPuppeteer('https://docs.4sch.com');
```

## Viewing Analytics Data

### Real-Time Reports
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select property with ID: `G-9DY20V8FQD`
3. Navigate to: **Reports** → **Realtime**
4. View:
   - Active users
   - Current page views
   - Events in last 30 minutes

### Custom Events
1. Go to: **Reports** → **Engagement** → **Events**
2. Look for custom events:
   - `guide_view`
   - `search_open`
   - `code_copy`
   - `file_download`
   - Outbound clicks

### Most Viewed Pages
1. Go to: **Reports** → **Engagement** → **Pages and screens**
2. Sort by:
   - Views
   - Average engagement time
   - Event count

## Configuration Details

The GA4 implementation is configured in `docusaurus.config.js`:

```javascript
gtag('config', 'G-9DY20V8FQD', {
  'send_page_view': true,
  'anonymize_ip': true,
  'cookie_flags': 'SameSite=None;Secure',
  'custom_map': {
    'dimension1': 'user_role',
    'dimension2': 'documentation_section',
    'dimension3': 'guide_type'
  }
});
```

## Debugging

### Check if GA4 is Loaded

```javascript
// Browser console
console.log('dataLayer:', window.dataLayer);
console.log('gtag function:', typeof window.gtag);
```

### View Network Requests

1. Open Developer Tools → Network tab
2. Filter by: `google-analytics.com` or `googletagmanager.com`
3. Check for:
   - `/gtag/js?id=G-9DY20V8FQD` (script load)
   - `/g/collect` or `/j/collect` (event tracking)

### Common Issues

**Issue**: Events not appearing in GA4  
**Solution**: 
- Check browser console for errors
- Verify gtag script loaded successfully
- Wait 24-48 hours for data to appear in non-realtime reports
- Check Realtime reports for immediate verification

**Issue**: Duplicate events  
**Solution**: 
- Ensure GA4 is only initialized once
- Check for multiple gtag script tags
- Verify no browser extensions are interfering

## Best Practices

1. **Test in Realtime Reports**: Always verify new events in GA4 Realtime before relying on them
2. **Use Debug Mode**: Enable GA4 debug mode during development
3. **Respect Do Not Track**: Consider implementing DNT header respect
4. **Regular Audits**: Review tracked events quarterly to ensure relevance
5. **Document Changes**: Update this page when modifying tracking implementation

## Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [gtag.js Reference](https://developers.google.com/tag-platform/gtagjs/reference)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [Custom Dimensions Guide](https://support.google.com/analytics/answer/10075209)

## Support

If you have questions about analytics tracking or need help interpreting data:
- Contact: Technical Team
- Documentation: This page
- Verification Script: `scripts/verify-ga4.js`
