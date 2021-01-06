---
title: Go SDK
---

import Shields from "../../src/components/shields";

<Shields
	github="https://github.com/istreamlabs/go-sdk"
	docs="https://pkg.go.dev/github.com/istreamlabs/go-sdk"/>

This is the iStreamPlanet SDK for the Go programming language. It is generated from the [iStreamPlanet OpenAPI](https://api.istreamplanet.com/openapi.json) with [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

Install is optional, as Go will get the required dependencies automatically.

```sh
$ go get github.com/istreamlabs/go-sdk
```

## Hello, Go!

Getting started is easy. Save the following as `main.go` making sure to replace the `CLIENT_ID`, `CLIENT_SECRET`, and `ORGANIZATION` with your own string values.

```go
package main

import (
	"context"
	"fmt"

	"github.com/istreamlabs/go-sdk/isp"
)

func main() {
	// Create a new API client.
	client := isp.NewWithClientCredentials(CLIENT_ID, CLIENT_SECRET, ORGANIZATION)

	// Create an empty context. You may already have a context from an incoming
	// request and can use that instead.
	ctx := context.Background()

	// Get a list of all source summaries. Pagination is handled
	// automatically and all source summaries are returned in one list.
	summaries, _, err := client.SourcesApi.ListSources(ctx).Execute()
	if err.Error() != "" {
		panic(err)
	}

	// For each source, print out its ID and self link.
	for _, s := range summaries {
		fmt.Println(s.Id + " " + *s.Self)
	}
}
```

Run it and see your sources:

```sh
# Run the main file in the current directory.
$ go run .
```

## Features

The following features are available in the SDK.

### Pagination

Paginated responses (e.g. listing sources, listing channels) are automatically handled by the SDK. If you do **not** want to read all pages of results this can be disabled on a per-request basis.

```go
// Disable paging for all calls that are passed this context.
ctx = context.WithValue(ctx, isp.ContextDisablePaging, true)

// Make the call like normal. Only the first page of results will be returned.
// You can manually check the response headers for additional page links.
summaries, resp, err := client.SourcesApi.ListSources(ctx).Execute()
```

### Resource Links

Many embedded resources in the API contain `Self` links to fetch more information. They are easy to use from the SDK:

```go
// Assume you have a channel loaded from somewhere else.
var channel isp.Channel

var source isp.Source
resp, err := client.GetModel(*channel.Source.Self, &source)
if err != nil {
	panic(err)
}
```
