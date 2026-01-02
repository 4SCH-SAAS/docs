---
id: billing-finance
title: Billing & Finance
slug: /guides/billing-finance
sidebar_position: 6
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';

import CardGrid from '@site/src/components/CardGrid';
import FinanceIcon from '@site/src/components/icons/Finance';
import ReportsIcon from '@site/src/components/icons/Reports';

# Billing & Finance

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#finance-setup', title: 'Setup', description: 'Gateways, fee items, policies', icon: <FinanceIcon /> },
    { to: '#invoices', title: 'Invoices', description: 'Create, send, track', icon: <FinanceIcon /> },
    { to: '#payments', title: 'Payments', description: 'Methods, refunds, reconciliation', icon: <FinanceIcon /> },
    { to: '#reports', title: 'Reports', description: 'Aging, collections, trends', icon: <ReportsIcon /> },
  ]}
/>


## <span className="heading-icon"><FinanceIcon size={18} /></span> Finance Setup {#finance-setup}
- Fee heads: Tuition, Lab, Transport, Library
- Structures: Per-class or per-student customization
- Cycles: Monthly, termly, annual

:::note Screenshot
Billing overview

<Screenshot src="/img/screens/billing/billing-overview.svg" alt="Billing dashboard summarizing outstanding balances and recent payments" caption="Get a snapshot of collections and overdue balances." width={960} />

_Get a snapshot of collections and overdue balances._
:::

## <span className="heading-icon"><FinanceIcon size={18} /></span> Invoices {#invoices}
- Generate for a class, group, or individual
- Set due dates, discounts, and penalties
- Auto-reminders for overdue invoices

## <span className="heading-icon"><FinanceIcon size={18} /></span> Payments {#payments}
- Online via payment gateway
- Offline recording (cash, bank transfer, cheque)
- Reconciliation and ledger view

:::tip Screenshot
Finance — Invoices list

![Invoices table with status filters, due amounts, and action menu](/img/finance-invoices.svg)

_Filter, send reminders, and record payments in one place._
:::

## <span className="heading-icon"><ReportsIcon size={18} /></span> Reports {#reports}
- Collection summary by period
- Outstanding and aging analysis
- Concession impact and write-offs
