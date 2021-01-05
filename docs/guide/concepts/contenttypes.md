---
title: Content Types & Encoding
---

The iStreamPlanet APIs support client-driven content negotiation through standard HTTP headers like `Accept` and `Accept-Encoding`. The following content types and encodings are built-in.

If clients do not specify a preference then JSON is returned without any encoding/compression.

## Content Types

Content types control the response serialization format. Use the `Accept` HTTP header to communicate your preferences to the server.

| Name                                                    | Example Content Type |
| ------------------------------------------------------- | -------------------- |
| JSON ([RFC 8259](https://tools.ietf.org/html/rfc8259})) | `application/json`   |
| YAML                                                    | `application/yaml`   |
| CBOR ([RFC 7049](https://tools.ietf.org/html/rfc7049))  | `application/cbor`   |

## Content Encodings

Content encodings control how data is compressed when sent over the wire. Use the `Accept-Encoding` HTTP header to communicate your preferences to the server.

| Name                                                     | Accept Encoding |
| -------------------------------------------------------- | --------------- |
| gzip ([RFC 1952](https://tools.ietf.org/html/rfc1952))   | `gzip`          |
| Brotli ([RFC 7932](https://tools.ietf.org/html/rfc7932)) | `br`            |
