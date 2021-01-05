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

	// Get a list of all source summaries. Pagination is handled via the
	// `ListSourcesAll()` utility. For calls without pagination you can simply
	// call the `Execute()` method on the request.
	request := client.SourcesApi.ListSources(context.Background())
	summaries, _, err := client.ListSourcesAll(request)
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
