---
category: data-model
title: Changeset
nav_order: 1
description: >-
    Multiple collaborators independently making entries into a database makes it difficult to understand how the dataset reached its current state.
context: >-
    When the only view of the dataset is its current state, it can be difficult to understand how, when and why changes have been made by users. For example the reason why an individual entry was made by a user might be unclear. Contributors might be repeatedly editing the same records to fix seemingly incorrect data, or may be making repeated mistakes across their contributions.
solution: |
    In addition to tracking the current state of the database, maintain a record of every entry made to the system. Capture metadata about each entry that will help provide context to how, when and why changes have been made.
examples:
    -
        title: "OpenStreetMap"
        thumbnail: /uploads/patterns/changeset-1.jpg
        large_image: /uploads/patterns/changeset-1.jpg
        description: >-
            Summary of the contents of a changeset
    -
        title: "OSM"
        thumbnail: /uploads/patterns/changeset-2.jpg
        large_image: /uploads/patterns/changeset-2.jpg
        description: >-
            The details for a single changeset
    -
        title: "eBird"
        thumbnail: /uploads/patterns/changeset-3.jpg
        large_image: /uploads/patterns/changeset-3.jpg
        description: >-
            A single changeset - here called “checklist”

related:
    - track-changes
---

Managing contributions from multiple people is a specific challenge of collaboratively maintained datasets. If the system storing the data only captures the latest data without context then it can be difficult to manage contributions.

Modelling entries as separate database records can help you to capture context that will help understand how, when and why a specific change was made to the database. Some systems refer to an entry and its metadata as a “changeset”.

This metadata might be automatically added by the system, e.g. a timestamp recording when a change what made, or the user identifier of the contributor making the change. Some metadata might also be added by the user, e.g. a comment to describe why they are making a specific edit.

The metadata associated with the entry would include:

* a unique identifier for the entry
* the identifier for the user that made the change
* a timestamp that captures the date and time at which the change was made
* a note from the user that describes the reason for making a change
* a machine-readable description of what was changed, e.g. the state of the database before and after making the change

It might also include other information, for example, an identifier for the tool or application that was used to make the change, or an IP address or geographic coordinates that helps to indicate the source of the change.

Implementing this pattern, or using a system that supports it, makes it easier to implement a range of other features that can help to support collaborative maintenance. For example:

* metadata makes it possible to search for all changes made to a given record to help users to **[Track Changes](/patterns/workflow/track-changes)**
* tracking individual entries makes it possible to support both **[Mandatory Reviews](/patterns/maintaining-quality/mandatory-review)** and **[Retrospective Reviews](/patterns/maintaining-quality/retrospective-review)**
* **[Reverting Changes](/patterns/editing/revert-change)**, requires that the system captures the state of the database before and after a change (or a means of calculating that)

Other things to consider when implementing this pattern include:

* what metadata to store and whether some information should be mandatory. For example should users be required to provide a reason for making a change?
* the privacy implications of tracking individual user edits and/or the location from which contributions are made. Your system might track this information but not expose it externally. Your system should ethically and legally process all user data
* the storage overheads of tracking the extra data. You might decide to only retain the most recent changes and discard or archive older edits
