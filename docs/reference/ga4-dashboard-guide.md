---
sidebar_position: 10
title: GA4 Dashboard & Reporting Guide
description: Complete guide to creating custom dashboards and reports in Google Analytics 4 for documentation analytics
---

# GA4 Dashboard & Reporting Guide

Learn how to create powerful dashboards and reports to understand how users interact with the 4SCH documentation.

## Quick Start

**Access your analytics**: [Google Analytics Dashboard](https://analytics.google.com/) → Select property `G-9DY20V8FQD`

---

## 📊 Pre-Built Reports

### 1. Real-Time Overview

**Path**: Reports → Realtime

**What to watch:**
- 👥 Active users right now
- 📄 Pages being viewed currently
- 🌍 User locations
- ⚡ Events firing in real-time

**Use cases:**
- Test new features immediately
- Monitor traffic during launches
- Verify event tracking
- See immediate user response

### 2. Engagement Overview

**Path**: Reports → Engagement → Overview

**Key metrics:**
- 📈 Total users
- ⏱️ Average engagement time
- 📱 Engaged sessions per user
- 🔄 Event count

**Use cases:**
- Measure overall documentation health
- Track engagement trends
- Identify popular content
- Monitor user retention

### 3. Pages and Screens

**Path**: Reports → Engagement → Pages and screens

**What you'll see:**
- Most viewed pages
- Average time on page
- Bounce rate per page
- Entry/exit pages

**Use cases:**
- Find most popular documentation
- Identify pages that need improvement
- Optimize high-traffic pages
- Understand user journey

### 4. Events Report

**Path**: Reports → Engagement → Events

**All tracked events:**
- `guide_view` - Guide section visits
- `search_open` - Search interactions
- `code_copy` - Code snippet copies
- `file_download` - Downloads
- `video_start/pause/complete` - Video engagement
- `scroll_depth` - Reading depth
- `time_on_page` - Engagement duration
- `navigation_click` - Navigation patterns
- `contact_support` - Support requests
- `faq_expand` - FAQ usage
- And more...

---

## 🎨 Creating Custom Dashboards

### Dashboard 1: Documentation Health Monitor

**Purpose**: Quick overview of documentation performance

**Setup:**
1. Go to **Explore** → Create a new exploration
2. Name it: "Documentation Health Monitor"
3. Add the following cards:

#### Card 1: Total Users (Last 7 Days)
- **Metric**: Total users
- **Visualization**: Scorecard
- **Time range**: Last 7 days
- **Comparison**: Previous period

#### Card 2: Top 10 Pages
- **Dimension**: Page path
- **Metrics**: Views, Avg. engagement time
- **Visualization**: Table
- **Rows**: 10
- **Sort**: By Views (descending)

#### Card 3: Daily Traffic Trend
- **Dimension**: Date
- **Metrics**: Users, Sessions
- **Visualization**: Line chart
- **Time range**: Last 30 days

#### Card 4: Events Overview
- **Dimension**: Event name
- **Metrics**: Event count
- **Visualization**: Bar chart
- **Filter**: Custom events only

### Dashboard 2: User Engagement Deep Dive

**Purpose**: Understand how users interact with content

#### Card 1: Scroll Depth Analysis
- **Dimension**: Event label (scroll_depth)
- **Filter**: Event name = 'scroll_depth'
- **Visualization**: Donut chart
- **Shows**: How many users read 25%, 50%, 75%, 100%

#### Card 2: Time on Page Distribution
- **Dimension**: Event label (time_on_page)
- **Filter**: Event name = 'time_on_page'
- **Visualization**: Bar chart
- **Shows**: 10s, 30s, 60s, 120s retention

#### Card 3: Navigation Patterns
- **Dimension**: Event label (navigation_click)
- **Filter**: Event name = 'navigation_click'
- **Visualization**: Pie chart
- **Shows**: Navbar, sidebar, footer, TOC usage

#### Card 4: Code Copy Rate
- **Dimension**: Page path
- **Metrics**: code_copy event count
- **Visualization**: Table
- **Shows**: Pages where users copy code most

### Dashboard 3: Guide Performance Tracker

**Purpose**: Compare performance across different user guides

#### Card 1: Guide Views Comparison
- **Dimension**: Event parameter: guide_type
- **Filter**: Event name = 'guide_view'
- **Metrics**: Event count, Unique users
- **Visualization**: Column chart

#### Card 2: Guide Engagement Time
- **Dimension**: Page path
- **Filter**: Page path contains '/guides/'
- **Metrics**: Average engagement time
- **Visualization**: Table

#### Card 3: Guide Completion Rate
- **Dimension**: Page path
- **Filter**: Page path contains '/guides/'
- **Metrics**: scroll_depth (100%) events
- **Visualization**: Table

### Dashboard 4: Support Insights

**Purpose**: Understand support needs and FAQ usage

#### Card 1: Contact Support Clicks
- **Dimension**: Page location (from event parameters)
- **Filter**: Event name = 'contact_support'
- **Metrics**: Event count
- **Visualization**: Table
- **Shows**: Which pages trigger support requests

#### Card 2: FAQ Expansions
- **Dimension**: Event label (question text)
- **Filter**: Event name = 'faq_expand'
- **Metrics**: Event count
- **Visualization**: Table
- **Shows**: Most common questions

#### Card 3: Search Patterns
- **Filter**: Event name = 'search_open'
- **Metrics**: Event count by page
- **Shows**: Where users need to search

---

## 📈 Custom Reports & Explorations

### Report 1: User Journey Analysis

**What it shows**: How users navigate through documentation

**Setup:**
1. **Explore** → **Path exploration**
2. **Starting point**: Landing page
3. **Steps**: Show next 3 pages
4. **Segment**: New vs. Returning users

**Insights:**
- Common documentation paths
- Where users drop off
- Popular entry points
- Navigation efficiency

### Report 2: Content Gap Analysis

**What it shows**: Pages with high traffic but low engagement

**Setup:**
1. **Explore** → **Free form**
2. **Dimensions**: Page path
3. **Metrics**:
   - Views (high)
   - Average engagement time (low)
   - Scroll depth 100% (low)
4. **Filter**: Views > 100, Avg time < 30s

**Insights:**
- Pages that need improvement
- Content that doesn't meet user needs
- Opportunities for enhancement

### Report 3: Video Performance

**What it shows**: Video engagement metrics

**Setup:**
1. **Explore** → **Free form**
2. **Dimensions**: Event label (video URL)
3. **Metrics**:
   - video_start count
   - video_complete count
   - video_pause average value (% watched)
4. **Calculated metric**: Completion rate = (completes / starts) * 100

**Insights:**
- Which videos are watched completely
- Drop-off points
- Video effectiveness

### Report 4: Download Analytics

**What it shows**: File download patterns

**Setup:**
1. **Explore** → **Free form**
2. **Dimension**: File name (from event parameters)
3. **Filter**: Event name = 'file_download'
4. **Metrics**: Event count, Unique users

**Insights:**
- Most downloaded resources
- Download trends
- Resource popularity

---

## 🎯 Conversion & Goal Setup

### Conversion 1: Documentation Completion

**Definition**: User reads guide to 100% scroll depth

**Setup in GA4:**
1. **Admin** → **Events** → **Create event**
2. **Event name**: `documentation_complete`
3. **Matching conditions**:
   - Event name = `scroll_depth`
   - Event label = `100%`
   - Page path contains `/guides/`
4. **Mark as conversion**: ✅ Yes

### Conversion 2: Support Contact Intent

**Definition**: User clicks contact support

**Setup:**
1. **Admin** → **Events** → Mark as conversion
2. **Select event**: `contact_support`
3. **Toggle**: Mark as conversion ✅

### Conversion 3: Code Implementation

**Definition**: User copies code snippet

**Setup:**
1. **Admin** → **Events** → Mark as conversion
2. **Select event**: `code_copy`
3. **Toggle**: Mark as conversion ✅

### Conversion 4: Resource Download

**Definition**: User downloads documentation resource

**Setup:**
1. **Admin** → **Events** → Mark as conversion
2. **Select event**: `file_download`
3. **Toggle**: Mark as conversion ✅

---

## 🔍 Advanced Segments

### Segment 1: Engaged Readers

**Criteria:**
- Time on page > 60 seconds
- Scroll depth ≥ 50%
- Sessions ≥ 1

**Use case**: Find highly engaged users

### Segment 2: Quick Browsers

**Criteria:**
- Time on page < 10 seconds
- Scroll depth < 25%
- Bounce rate = 100%

**Use case**: Identify content that doesn't engage

### Segment 3: Code-Focused Users

**Criteria:**
- code_copy events ≥ 1
- Page path contains guides or reference

**Use case**: Understand developer documentation needs

### Segment 4: Support Seekers

**Criteria:**
- contact_support events ≥ 1 OR
- search_open events ≥ 3 OR
- FAQ views ≥ 5

**Use case**: Users who need help finding answers

### Segment 5: Guide Power Users

**Criteria:**
- guide_view events ≥ 3
- Different guide types ≥ 2
- Return visits ≥ 2

**Use case**: Active documentation users across roles

---

## 📊 Key Metrics to Monitor

### Daily Metrics
- ✅ Active users (realtime)
- ✅ Page views
- ✅ Top 5 pages
- ✅ Error events (if configured)

### Weekly Metrics
- 📈 User growth (vs. previous week)
- 📊 Engagement rate
- 🎯 Conversion events
- 🔍 Search usage
- 📄 New vs. returning users

### Monthly Metrics
- 📚 Content performance (all guides)
- 🎬 Video completion rates
- 💬 Support contact rate
- 📥 Download trends
- 🌍 Geographic distribution
- 📱 Device breakdown
- ⏱️ Average engagement time trends

---

## 🚀 Action Items from Analytics

### If bounce rate is high (>70%)
- ❗ Review page content quality
- ❗ Improve page load speed
- ❗ Add better internal links
- ❗ Check for broken links

### If scroll depth is low (<50%)
- ❗ Content too long or complex
- ❗ Add table of contents
- ❗ Break into smaller sections
- ❗ Improve formatting

### If search usage is high
- ❗ Navigation might be unclear
- ❗ Content discovery issues
- ❗ Add popular searches to navigation
- ❗ Improve search functionality

### If support contacts are increasing
- ❗ Documentation gaps exist
- ❗ Complex features need better explanation
- ❗ Add more examples
- ❗ Create FAQ entries

---

## 🎓 Best Practices

### 1. Regular Reviews
- 📅 Daily: Check realtime for issues
- 📅 Weekly: Review engagement metrics
- 📅 Monthly: Deep dive into trends
- 📅 Quarterly: Strategy adjustment

### 2. Data-Driven Decisions
- ✅ Use data to prioritize documentation updates
- ✅ A/B test significant changes
- ✅ Track impact of improvements
- ✅ Share insights with team

### 3. Dashboard Hygiene
- 🧹 Archive unused dashboards
- 🧹 Update filters regularly
- 🧹 Document custom metrics
- 🧹 Share dashboards with team

### 4. Privacy Compliance
- 🔒 Review data retention settings
- 🔒 Respect user privacy preferences
- 🔒 Document data usage
- 🔒 Regular privacy audits

---

## 📱 Mobile App (GA4 Dashboard)

Download the Google Analytics app to monitor on the go:

- 📱 [iOS App Store](https://apps.apple.com/app/google-analytics/id881599038)
- 📱 [Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.giant)

**Features:**
- Real-time monitoring
- Push notifications for anomalies
- Quick metric checks
- Report sharing

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| GA4 Property | [G-9DY20V8FQD Dashboard](https://analytics.google.com/) |
| Realtime Report | Admin → Reports → Realtime |
| Custom Dashboards | Admin → Explore |
| Event Configuration | Admin → Events |
| Conversion Setup | Admin → Events → Mark as conversion |

---

## 💡 Pro Tips

1. **Set up alerts**: Get notified of traffic spikes or drops
2. **Compare periods**: Always compare to previous period
3. **Use annotations**: Mark significant events (launches, updates)
4. **Export data**: Regular backups to Google Sheets
5. **Share insights**: Create automatic reports for stakeholders
6. **Mobile monitoring**: Use GA4 app for quick checks
7. **Custom dimensions**: Leverage user_role, guide_type dimensions
8. **Event debugging**: Use DebugView for event verification

---

## 🎯 Success Criteria

Your documentation analytics are working well if:

✅ **High engagement time** (>2 minutes average)  
✅ **Deep scroll rates** (>50% reach 75% depth)  
✅ **Low bounce rate** (<40% for guides)  
✅ **Active code copying** (indicates useful examples)  
✅ **Low support contact rate** (self-service working)  
✅ **Increasing return visits** (valuable resource)

---

## 📞 Support

Need help with GA4 dashboards?
- 📖 [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- 📖 [Exploration Guide](https://support.google.com/analytics/answer/9327768)
- 📖 [Custom Dashboards](https://support.google.com/analytics/answer/1151300)

**Internal Resources:**
- Analytics Setup Guide: `/reference/analytics-setup`
- Verification Script: `scripts/verify-ga4.js`
