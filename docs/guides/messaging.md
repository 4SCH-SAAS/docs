---
id: messaging
title: Messaging & Announcements
slug: /guides/messaging
sidebar_position: 5
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';

import CardGrid from '@site/src/components/CardGrid';
import MessagingIcon from '@site/src/components/icons/Messaging';
import UsersIcon from '@site/src/components/icons/Users';

# Messaging & Announcements

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#channels', title: 'Channels', description: 'Email, SMS, in-app', icon: <MessagingIcon /> },
    { to: '#composing-a-message', title: 'Compose', description: 'Audience, scheduling, templates', icon: <MessagingIcon /> },
    { to: '#visibility-rules', title: 'Visibility', description: 'Recipients and permissions', icon: <UsersIcon /> },
    { to: '#approval-workflows-optional', title: 'Approvals', description: 'Optional review flows', icon: <UsersIcon /> },
  ]}
/>


## <span className="heading-icon"><MessagingIcon size={18} /></span> Channels {#channels}
- In-app messages and announcements
- Email and push notifications
- SMS (if configured)

## <span className="heading-icon"><MessagingIcon size={18} /></span> Composing a Message {#composing-a-message}
- Choose audience: All users, roles, classes, sections, custom group
- Draft message with title and body
- Attach files or links
- Schedule or send immediately

:::tip Screenshot
Compose message screen

<Screenshot src="/img/screens/messaging/messaging-compose.svg" alt="Compose message form with audience selector, title, and body editor" caption="Draft and schedule messages to the right audience." width={960} />

_Draft and schedule messages to the right audience._
:::

## <span className="heading-icon"><UsersIcon size={18} /></span> Visibility Rules {#visibility-rules}
- Admins can message all audiences
- Teachers can message their classes/groups
- Parents/Students can message allowed recipients only

## <span className="heading-icon"><UsersIcon size={18} /></span> Approval Workflows (Optional) {#approval-workflows-optional}
- Require moderator approval for school-wide messages
- Track status: Draft → Pending → Approved → Sent

:::note Screenshot
Messaging approvals queue

![Approvals queue showing pending messages and approver actions](/img/messaging-approvals.svg)

_Review and approve school-wide announcements before sending._
:::
