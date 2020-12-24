---
title: Getting Started
slug: /guide/
---

## Prerequisites

Before using the iStreamPlanet APIs you will first need an account. There are two ways to get set up:

1. If your company has no existing relationship with iStreamPlanet, then [contact us](https://istreamplanet.com/contact/) to set up a new organization.
2. If your company has an existing iStreamPlanet organization, then ask your administrator to create a new user account in the Portal UI.

Whichever way you create your account, you should end up with a few pieces of information:

- Your email + password for login
- Organization ID
- OAuth client ID for calling the API
- (optional) OAuth client secret for machine-to-machine use-cases

## Overview

This getting started guide will assume the above has been completed. It will cover some general concepts, introduce our CLI & SDKs, and walk you through several important workflows in the iStreamPlanet system.

### Aventus Concepts

![Aventus workflow](/img/aventus-workflow.png)

Aventus is a live media streaming platform that takes live video and audio feeds from many sources, encodes & publishes them for your customers to view. As such, the core of the streaming API is the **Channel** configuration object.

A **Channel** has an input source. You must have legal access to a source before it can be used. Each **Channel** has input, encoding, packaging, publishing and other settings. A **Channel** outputs playlists and media segments to a location of your choice (usually a CDN), where they become publicly accessible and streamable for your customers.

In the next sections we will see how to create and operate a new channel, but first we need a tool to talk to the API.
