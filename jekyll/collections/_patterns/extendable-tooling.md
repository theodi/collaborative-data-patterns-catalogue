---
category: workflow
title: Extendable Tooling
nav_order: 1
description: >-
    The project has limited capacity to create new and improved tools to support the community
context: >-
    Contributors to your project may benefit from specific tools that make it easier for them to participate. Specialised tools might help to better **[Retrospective Reviews](/patterns/maintaining-quality/retrospective-review)** or in applying **[Bulk Changes](/patterns/workflow/bulk-changes)**, or better support people with different abilities. But your project will have limited resources to build all of these tools.
solution: |
    Encourage the community to create specialised tools. Publish an API that exposes the editing and reviewing functionality of your project so that the community can create new tools that conform to your **[Published Policies](/patterns/project-governance/published-policies)**.
examples:
    -
        title: "Humanitarian OpenStreetMap tools"
        thumbnail: /uploads/patterns/extendable-tooling-1.jpg
        large_image: /uploads/patterns/extendable-tooling-1.jpg
        description: >-
            Tools created by the community
    -
        title: "MusicBrainz tools"
        thumbnail: /uploads/patterns/extendable-tooling-2.jpg
        large_image: /uploads/patterns/extendable-tooling-2.jpg
    -
        title: "Wikidata"
        thumbnail: /uploads/patterns/extendable-tooling-3.jpg
        large_image: /uploads/patterns/extendable-tooling-3.jpg
        description: >-
            Tools organised by task

related:
    - changeset
    - moderation
---

Web and mobile based tools to edit and contribute data will typically be implemented using an API. Projects that use this pattern are just widening access to that API.

Exposing an API is a great way to **[Invite All Contributions](/patterns/encouraging-contributions/invite-all-contributions)** from your community. An API provides developers with the ability to create open source software that can help both contributors and data users to maximise the value and quality of the data you are collecting.

Encouraging an ecosystem of third-party tools will make your project richer, make it easier for different people to contributor, and will allow the community to be more autonomous.

Third-party tools might provide:

* custom editing interfaces to support collection of specific types of data
* tools that support offline editing for people with restricted bandwidth
* tools that simplifies the process of importing and reviewing data from other sources to carry out **[Bulk Changes](/patterns/workflow/bulk-changes)**
* reporting to help provide insight into the quality and coverage of the dataset
* provide insight into the patterns of contribution across the community
* automated tools that carry out **[Machine Editing](/patterns/editing/machine-editing)** of data

Design the API so that is exposes the same range of data collection and editing options that are available in the core project tools. This will ensure that developers can benefit from the same functionality.

Showcasing third-party tools will help your community find the tools they need.
