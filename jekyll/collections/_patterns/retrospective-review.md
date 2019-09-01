---
category: maintaining-quality
title: Retrospective Review
nav_order: 1
description: >-
    Contributions need to be encouraged and made available as soon as possible after having been submitted.
context: >-
    You would like to encourage contributions and it is not overly problematic if the data is incorrect for a short time before it is corrected.
solution: >-
    Immediately accept changes into the database, after which they may be reviewed either by a project team member or the community of contributors.
examples:
    
---

In projects that do not require **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)** to ensure data quality, you can instead equip your community with the tools to monitor and review recent changes themselves, for example:  

* Implement **[Changesets](/patterns/data-model/changeset)** and uses them to allow contributors to **[Revert Change](/patterns/editing/revert-change)** if they notice a mistake
* Use **[Track Changes](/patterns/workflow/track-changes)** to help contributors to see recent changes to records or the entire database
* Use **[Watch List](/patterns/workflow/watch-list)** to allow contributors to monitor areas of interest
* The latest version of a record should be **[Visibly Editable](/patterns/encouraging-contributions/visibly-editable)** so that if a mistake is found, someone can either **[Revert Changes](/patterns/editing/revert-change)** introduced in a particular changeset or make subsequent changes of their own