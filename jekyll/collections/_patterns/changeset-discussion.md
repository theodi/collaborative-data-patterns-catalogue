---
category: workflow
title: Changeset Discussion
nav_order: 1
description: >-
    Contributors or moderators want to discuss a specific entry before rejecting or improving it.
context: >-
    A change has been submitted to the project in the form of a **[Changeset](/patterns/data-model/changeset)**, and someone, often a moderator or another contributor, would like to start a discussion or provide feedback.
solution: |
    Allow contributors and moderators to comment directly on a **[Changeset](/patterns/data-model/changeset).**
examples:
    -
        title: "ISFDB"
        thumbnail: /changeset-discussion-1.jpg
        large_image: /changeset-discussion-1.jpg
        description: >-
            A single comment recorded by a moderator against a changeset to explain why it was rejected
    -
        title: "OpenStreetMap"
        thumbnail: /changeset-discussion-2.jpg
        large_image: /changeset-discussion-2.jpg
        description: >-
            A discussion in a **[Linkable Changeset](/patterns/workflow/linkable-changeset)**
    
related:
    - changeset
    - track-changes
    - moderation
    - Record Discussion
---

An entry that makes a change to a database will often be reviewed by moderators.

If a moderator or contributor wants to discuss something about the change, provide feedback or show appreciation, it helps to contextualise the discussion if it can be held alongside the details of the specific entry.

The discussion can be either a single comment or a back-and-forth conversation.