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
- (optional) OAuth2 client ID for calling the API
- (optional) OAuth2 client secret for machine-to-machine use-cases

## Overview

This getting started guide will assume the above has been completed. It will cover some general concepts, introduce our <abbr title="Command Line Interface">CLI</abbr> & <abbr title="Software Development Kits">SDKs</abbr>, and walk you through several important workflows in the iStreamPlanet system.

iStreamPlanet's tools enable you to process live video streams so that your customers can watch the content. The core of iStreamPlanet's live video processing pipeline is Aventus.

### Aventus Concepts

<img src="/img/aventus-workflow.png" style={{background: "white", padding: "24px"}}/>

Aventus is a live media streaming platform that takes live video and audio feeds from many sources, encodes & publishes them for your customers to view. As such, the core of the streaming API is the **Channel** configuration object.

A **Channel** has an input source. You must have legal access to a source before it can be used. Each **Channel** has input, encoding, packaging, publishing and other settings. Aventus natively understands codecs like H.264 and H.265 (<abbr title="High Efficiency Video Coding">HEVC</abbr>) as well as formats like <abbr title="HTTP Live Streaming">HLS</abbr> and <abbr title="Dynamic Adaptive Streaming over HTTP">DASH</abbr>. You can choose our defaults or dig in and configure each **channel** however you need.

A **Channel** outputs playlists and media segments to a location of your choice (usually an origin being served by a <abbr title="Content Delivery Network">CDN</abbr>), where they become publicly accessible and streamable for your customers.

In the next sections we will see how to create and operate a new channel, but first we need a tool to talk to the API.
