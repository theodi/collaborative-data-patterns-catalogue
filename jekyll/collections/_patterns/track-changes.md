---
category: workflow
title: Track Changes
nav_order: 1
description: >-
    It is difficult to understand how a record came to be in its current or previous state.
context: >-
    Changes have been made to a record or set of records, which another contributor or user would like to understand.
solution: |
    Create and display a log of **[Changesets](/patterns/data-model/changeset)**, where each entry represents an amendment to a record.
examples:
    -
        title: "Open Library"
        thumbnail: /uploads/patterns/track-changes-1.jpg
        large_image: /uploads/patterns/track-changes-1.jpg
        description: >-
            Displaying the history of changes to a single record (in this case a book)
    -
        title: "Wikidata"
        thumbnail: /uploads/patterns/track-changes-2.jpg
        large_image: /uploads/patterns/track-changes-2.jpg
        description: >-
            A list of recent changes made to the whole database

related:
    - changeset
---

Records may evolve through multiple amendments from different contributors.  Amendments can include:

* Creation of a new record
* Additions of new data to an existing record
* Removal of data from an existing record
* Deletion of a record
* Reverts: undoing a previous change

Knowing the history of changes to a record is useful in a number of circumstances, for example:

* To inform decisions about its future
* To understand activity in a record, perhaps to resolve disputes
* To assess the implications of accepting or reverting a specific change
* To find out about the evolution of a record, or a set of records, including the whole database
* To analyse patterns of behaviour, from either a record or database level

By keeping a log of changes and associating them with records, the history of a record and a project can be displayed, for moderators and contributors to view.
