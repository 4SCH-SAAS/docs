---
id: integrations
title: Integrations
sidebar_position: 3
---

# Integrations

Supported integration types:
- Payment gateways for online fee collection
- Email/SMS providers for notifications
- SSO (e.g., Google, Microsoft) for sign-in
- LMS integrations for assignments and content

Configuration flow:
```mermaid
sequenceDiagram
  participant Admin
  participant 4SCH
  participant Provider
  Admin->>4SCH: Enter API keys / credentials
  4SCH->>Provider: Validate credentials
  Provider-->>4SCH: Success token
  4SCH-->>Admin: Integration active
```

:::tip Screenshot
Payment gateway configuration

![Payment gateway settings page showing API key inputs and webhook URL](../../static/img/payment-gateway-config.svg)

_Add provider keys and verify webhooks to activate online payments._
:::
