---
title: Auth & Tokens
---

Each client or SDK should handle the low-level aspects of authentication & authorization for you. However, should you need to customize how auth happens the below describes the process.

## Overview

Auth at iStreamPlanet is handled via OAuth 2.0 bearer tokens, specifically JSON Web Tokens (JWT). Multiple flows are supported for fetching a token, and which you use will depend on your use-case.

| Flow               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| Authorization Code | User login flow                                                |
| Client Credentials | Machine-to-machine flow with a pre-shared client ID and secret |

### Authorization Code Flow

The Authorization Code flow allows a user to login without ever sharing their credentials with the app. You will typically be redirected to a login page in the browser, which in turn shares an authorization code with the app that is used to fetch a token linked to that user.

Proof Key for Code Exchange (PKCE) is supported for added security.

See details of the [Authorization Code](https://auth0.com/docs/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce) flow.

### Client Credentials Flow

The Client Credentials flow allows an app to fetch a token given a pre-shared client identifier and secret. It is commonly used for machine-to-machine scenarios where an individual user is not acting on the system.

While the Client Credentials flow can be used for any type of application, it is recommended that you prefer the Authorization Code flow when possible for better auditing & tracing.

See details of the [Client Credentials](https://auth0.com/docs/flows/client-credentials-flow) flow.

## Endpoints & Params

These are the iStreamPlanet auth endpoints:

| Name          | Endpoint                                    |
| ------------- | ------------------------------------------- |
| Authorize URI | https://istreamplanet.auth0.com/authorize   |
| Token URI     | https://istreamplanet.auth0.com/oauth/token |

The following parameters are **required**:

| Name       | Description                                 |
| ---------- | ------------------------------------------- |
| `audience` | URI containing your organization identifier |

## Example

Here is an example of how to get a token using Client Credentials:

```sh
$ curl --request POST \
  --url 'https://istreamplanet.auth0.com/oauth/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=client_credentials \
  --data client_id=YOUR_CLIENT_ID \
  --data client_secret=YOUR_CLIENT_SECRET \
  --data audience=https://platform.dtc.istreamplanet.net/YOUR_ORGANIZATION
```

The response will be JSON and will contain an `access_token` field.
