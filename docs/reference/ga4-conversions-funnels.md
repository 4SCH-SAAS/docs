---
sidebar_position: 11
title: GA4 Conversions & Funnels
description: Set up conversion tracking and funnel analysis for documentation success metrics
---

# GA4 Conversions & Funnels

Track meaningful user actions and analyze the journey from discovery to documentation success.

## 🎯 What Are Conversions?

Conversions are important user actions that indicate documentation success. For our documentation site, conversions include:

- ✅ Reading a complete guide (100% scroll)
- ✅ Copying code examples
- ✅ Downloading resources
- ✅ Finding answers (FAQ interactions)
- ✅ Successful self-service (no support contact needed)
- ✅ Video completion
- ✅ Multiple guide visits (cross-role learning)

---

## 📊 Pre-Configured Conversion Events

These events are automatically tracked and ready to mark as conversions:

### 1. Guide Completion
**Event**: `scroll_depth` with label `100%` on `/guides/*` pages

**What it means**: User read entire guide  
**Goal**: 60%+ completion rate  
**Action if low**: Shorten content, improve formatting

### 2. Code Copy Success
**Event**: `code_copy`

**What it means**: User found useful code example  
**Goal**: 30%+ of guide visitors copy code  
**Action if low**: Add more examples, improve code quality

### 3. Resource Download
**Event**: `file_download`

**What it means**: User downloaded documentation/asset  
**Goal**: 15%+ download rate on resource pages  
**Action if low**: Make downloads more visible

### 4. Video Completion
**Event**: `video_complete`

**What it means**: User watched entire video  
**Goal**: 50%+ completion rate  
**Action if low**: Shorten videos, improve quality

### 5. Self-Service Success
**Event**: Custom event `self_service_success`

**What it means**: User spent more than 2min, scrolled more than 75%, no support contact  
**Goal**: 80%+ self-service rate  
**Action if low**: Improve content clarity

### 6. FAQ Resolution
**Event**: `faq_expand`

**What it means**: User found answer in FAQ  
**Goal**: 3+ FAQ views per support page visit  
**Action if low**: Expand FAQ coverage

---

## ⚙️ Setting Up Conversions in GA4

### Step 1: Access Events Configuration

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select property: `G-9DY20V8FQD`
3. Click **Admin** (bottom left)
4. Under **Data display**, click **Events**

### Step 2: Mark Existing Events as Conversions

For each event you want to track as a conversion:

1. Find the event in the list (e.g., `code_copy`)
2. Toggle **Mark as conversion** to ON
3. The event now appears in conversion reports

**Recommended conversions to enable:**
- ✅ `code_copy`
- ✅ `file_download`
- ✅ `video_complete`
- ✅ `contact_support` (negative indicator)
- ✅ `guide_view` (awareness metric)

### Step 3: Create Custom Conversion Events

For more complex conversions, create custom events:

#### Example: Guide Completion Conversion

1. **Admin** → **Events** → **Create event**
2. **Event name**: `guide_complete`
3. **Matching conditions**:
   - Parameter: `event_name` equals `scroll_depth`
   - AND Parameter: `event_label` equals `100%`
   - AND Parameter: `page_path` contains `/guides/`
4. Click **Create**
5. Toggle **Mark as conversion**

#### Example: Engaged Documentation User

1. **Event name**: `engaged_user`
2. **Matching conditions**:
   - Parameter: `event_name` equals `time_on_page`
   - AND Parameter: `value` greater than `60`
   - AND Parameter: `event_label` equals `120_seconds`
3. **Mark as conversion** ✅

#### Example: Multi-Guide Learner

1. **Event name**: `multi_guide_user`
2. **Matching conditions**:
   - Parameter: `event_name` equals `guide_view`
   - AND Parameter: `event_count` greater than `2`
3. **Mark as conversion** ✅

---

## 🔄 Conversion Funnels

Funnels help you understand the user journey and identify drop-off points.

### Funnel 1: New User Onboarding

**Goal**: Guide new users to documentation success

**Steps:**
1. **Landing** → Land on any page
2. **Discover** → View getting-started or quick-start
3. **Engage** → Scroll more than 50%
4. **Action** → code_copy OR file_download
5. **Success** → Return visit within 7 days

**Setup in GA4:**
1. **Explore** → **Funnel exploration**
2. **Name**: "New User Onboarding"
3. **Add steps**:
   - Step 1: `session_start`
   - Step 2: `page_view` (path contains `/intro/`)
   - Step 3: `scroll_depth` (value ≥ 50)
   - Step 4: `code_copy` OR `file_download`
   - Step 5: Custom (returning user event)

**Key metrics:**
- Overall completion rate
- Drop-off at each step
- Time between steps
- Conversion by traffic source

### Funnel 2: Guide Learning Journey

**Goal**: Track user progression through role-specific guides

**Steps:**
1. **Entry** → Land on guide page
2. **Start Reading** → Scroll to 25%
3. **Engaged** → Reach 50% scroll
4. **Deep Dive** → Reach 75% scroll
5. **Complete** → Reach 100% scroll

**Setup:**
1. **Explore** → **Funnel exploration**
2. **Name**: "Guide Reading Funnel"
3. **Filter**: Page path contains `/guides/`
4. **Add steps**:
   - Step 1: `page_view`
   - Step 2: `scroll_depth` (label = `25%`)
   - Step 3: `scroll_depth` (label = `50%`)
   - Step 4: `scroll_depth` (label = `75%`)
   - Step 5: `scroll_depth` (label = `100%`)

**Insights:**
- Where users lose interest
- Average completion time
- Completion rate by guide type
- Device impact on completion

### Funnel 3: Problem Resolution Flow

**Goal**: Measure self-service effectiveness

**Steps:**
1. **Problem** → View troubleshooting/FAQ
2. **Search** → Open search OR expand FAQ
3. **Explore** → View 2+ related pages
4. **Resolution** → Engage more than 2min, no support contact
5. **Validation** → Return within 7 days (successful solution)

**Setup:**
1. **Explore** → **Funnel exploration**
2. **Name**: "Self-Service Resolution"
3. **Add steps**:
   - Step 1: `page_view` (path contains `/support/`)
   - Step 2: `search_open` OR `faq_expand`
   - Step 3: `page_view` (event_count ≥ 2)
   - Step 4: `time_on_page` (value ≥ 120)
   - Step 5: Custom returning user event
4. **Exclusion**: `contact_support` event

### Funnel 4: Code Implementation Journey

**Goal**: Track users from learning to implementation

**Steps:**
1. **Learn** → View guide with code examples
2. **Review** → Scroll to code section (more than 50%)
3. **Copy** → Copy code snippet
4. **Research** → View related reference docs
5. **Return** → Come back for more (successful implementation)

**Setup:**
1. **Name**: "Code Implementation Flow"
2. **Steps**:
   - Step 1: `page_view` (guides or reference)
   - Step 2: `scroll_depth` (≥ 50%)
   - Step 3: `code_copy`
   - Step 4: `page_view` (path contains `/reference/`)
   - Step 5: Return visit within 3 days

### Funnel 5: Video Learning Path

**Goal**: Understand video engagement and learning outcomes

**Steps:**
1. **Discover** → Land on page with video
2. **Start** → Play video
3. **Engage** → Watch more than 50%
4. **Complete** → Watch to end
5. **Apply** → Visit related guide/reference

**Setup:**
1. **Name**: "Video Learning Funnel"
2. **Steps**:
   - Step 1: `page_view` (has video)
   - Step 2: `video_start`
   - Step 3: `video_pause` (value ≥ 50)
   - Step 4: `video_complete`
   - Step 5: `page_view` (related content)

---

## 📈 Conversion Goals & Targets

### Overall Documentation Goals

| Metric | Current | Target | Excellent |
|--------|---------|--------|-----------|
| Guide completion rate | - | 60% | 75% |
| Code copy rate | - | 30% | 45% |
| Self-service rate | - | 80% | 90% |
| Video completion | - | 50% | 70% |
| Return visit rate | - | 40% | 60% |
| Avg engagement time | - | 2:00 | 4:00 |
| Scroll depth (75%+) | - | 50% | 70% |

### Guide-Specific Goals

| Guide Type | Completion | Engagement Time | Return Rate |
|------------|-----------|-----------------|-------------|
| Quick Start | 80% | 1:30 | 30% |
| Teacher Guide | 70% | 5:00 | 60% |
| Parent Guide | 75% | 3:00 | 50% |
| Student Guide | 70% | 2:30 | 40% |
| Admin Guide | 65% | 8:00 | 70% |
| Reference Docs | 40% | 1:00 | 80% |

---

## 🎓 Analyzing Conversion Data

### Daily Checks (5 minutes)
1. **Admin** → **Reports** → **Realtime**
2. Check: Active conversions happening now
3. Verify: Events firing correctly
4. Alert: Any sudden drops or spikes

### Weekly Reviews (30 minutes)
1. **Reports** → **Conversions**
2. Compare: Week-over-week changes
3. Identify: Top converting pages
4. Note: Anomalies or trends

### Monthly Deep Dives (2 hours)
1. **Explore** → Custom funnel analysis
2. Review: Each funnel completion rate
3. Identify: Drop-off points
4. Plan: Content improvements
5. Test: Hypothesis with changes
6. Measure: Impact on conversions

---

## 🔍 Advanced Conversion Tracking

### Event Parameter Conversions

Track conversions based on specific parameters:

#### High-Value Guide Views
```javascript
// Already tracked automatically
// Users viewing admin or teacher guides
gtag('event', 'guide_view', {
  'guide_type': 'school-admin',  // or 'teachers'
  'page_path': '/guides/school-admin'
});
```

**Mark as conversion**: guide_view where guide_type = 'school-admin'

#### Complete Code Implementation
```javascript
// Track when user copies code AND views results
gtag('event', 'code_implemented', {
  'implementation_type': 'complete',
  'code_section': 'authentication'
});
```

#### Documentation Referral Success
```javascript
// Track when doc link leads to signup/action
gtag('event', 'doc_referral_conversion', {
  'referral_type': 'register_school',
  'source_page': document.referrer
});
```

---

## 📊 Conversion Attribution

### Understanding Traffic Sources

**Path**: Reports → Acquisition → Traffic acquisition

**Compare conversions by:**
- 🔍 Organic Search
- 🔗 Direct
- 📧 Email
- 🌐 Social Media
- 📱 Referral

**Insights:**
- Which channels bring engaged users?
- Which need better landing pages?
- Where to invest marketing effort?

### Content Attribution

**Which pages drive conversions?**

1. **Explore** → **Free form**
2. **Dimension**: Landing page
3. **Metrics**: Conversions, Conversion rate
4. **Secondary dimension**: Traffic source

**Optimize:**
- ⬆️ Promote high-converting pages
- 🔧 Fix low-converting pages
- 📝 Replicate success patterns

---

## 🎯 Optimization Strategies

### If Guide Completion is Low (Less than 60%)

**Diagnose:**
- Check scroll depth drop-off point
- Review time on page
- Analyze exit rates

**Actions:**
1. Add table of contents
2. Break into smaller sections
3. Add visual elements
4. Improve formatting
5. Remove unnecessary content

### If Code Copy Rate is Low (Less than 30%)

**Diagnose:**
- Are examples visible?
- Is code highlighted correctly?
- Are examples relevant?

**Actions:**
1. Add more code examples
2. Improve code formatting
3. Add copy buttons (already implemented)
4. Provide working examples
5. Explain code context better

### If Self-Service Rate is Low (Less than 80%)

**Diagnose:**
- High support contact rate
- Many search queries
- Short engagement time

**Actions:**
1. Expand FAQ coverage
2. Add more examples
3. Improve search functionality
4. Create video tutorials
5. Add interactive diagrams

---

## 🚀 Advanced Features

### Predictive Metrics (GA4 ML)

GA4 can predict:
- **Purchase probability** (adapt for "documentation success")
- **Churn probability** (users likely to not return)
- **Revenue prediction** (adapt for "engagement score")

**Enable in**: Admin → Data Settings → Predictive metrics

### Enhanced Measurement

**Already enabled:**
- Page views ✅
- Scrolls ✅
- Outbound clicks ✅
- Site search ✅
- Video engagement ✅
- File downloads ✅

**Optional additions:**
- Form interactions
- Element visibility
- Custom user properties

---

## 📱 Conversion Tracking Best Practices

1. **Start Simple**: Focus on 3-5 key conversions
2. **Test Thoroughly**: Verify events before marking as conversions
3. **Review Regularly**: Monthly conversion performance reviews
4. **Document Changes**: Log when you modify tracking
5. **Compare Periods**: Always benchmark against previous periods
6. **Segment Users**: Analyze by user type, device, source
7. **Set Alerts**: Get notified of conversion anomalies
8. **A/B Test**: Test improvements and measure impact

---

## 📚 Resources

- [GA4 Conversions Guide](https://support.google.com/analytics/answer/9267568)
- [Funnel Exploration](https://support.google.com/analytics/answer/9327974)
- [Event Tracking Reference](https://support.google.com/analytics/answer/9267735)
- [Conversion Best Practices](https://support.google.com/analytics/answer/11083358)

**Internal:**
- Analytics Setup: `/reference/analytics-setup`
- Dashboard Guide: `/reference/ga4-dashboard-guide`
- Verification: `scripts/verify-ga4.js`

---

## ✅ Quick Setup Checklist

- [ ] Mark `code_copy` as conversion
- [ ] Mark `file_download` as conversion
- [ ] Mark `video_complete` as conversion
- [ ] Create `guide_complete` custom event
- [ ] Mark `guide_complete` as conversion
- [ ] Set up "New User Onboarding" funnel
- [ ] Set up "Guide Reading" funnel
- [ ] Set up "Self-Service Resolution" funnel
- [ ] Create weekly conversion report
- [ ] Set conversion goal targets
- [ ] Enable conversion alerts
- [ ] Document tracking in team wiki

**Time to complete**: ~1 hour  
**Impact**: High - Understand documentation effectiveness
