---
title: Linking & Pagination
---

Most resources in the iStreamPlanet API support hypermedia cross linking, using either HTTP link relation headers or fields in the returned model.

## Pagination

Pagination uses HTTP link relation headers. Any paginated response (most "list" calls, e.g. listing channels) may include a `Link` header to the next and previous pages. For example:

```http
Link: </v2/channels?cursor=...>; rel="next"
```

Keep following the links until a response has no `next` link and then you will have paginated through the entire list. Note that the link may be relative and should be resolved before following, and any response may contain multiple links with different `rel` values.

## Self Links

Most embedded resources will have a `self` link in their data model. This link can be followed to get more information about the resource. For example, a **Channel** may have a reference to a **Source** but not contain all of that source's information:

```json
{
  "self": "https://api.istreamplanet.com/v2/channels/my-channel",
  "source": {
    "self": "https://api.istreamplanet.com/v2/sources/s-demo"
  }
}
```

Following that source's `self` link will give you the source details.
