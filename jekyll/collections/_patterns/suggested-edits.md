---
category: encouraging-contributions
title: Suggested Edits
nav_order: 1
description: >-
    Records in the dataset are incomplete but could be improved through some small additions.
context: >-
    The decision to **[Accept Incomplete Records](/patterns/encouraging-contributions/accept-incomplete-records)** or due to an **[Evolving Schema](/patterns/data-model/evolving-schema)** means that records in a dataset are often incomplete. Contributors may be able to quickly improve records by adding fields if their attention was directed to the task.
solution: >-
    When a contributor is viewing a record prompt them to add or review specific fields.
examples:
    -
        title: "Google business listings"
        thumbnail: /uploads/patterns/suggested-edits-1.jpg
        large_image: /uploads/patterns/suggested-edits-1.jpg
        description: >-
            This listing is missing a website address that the user can add immediately

related:
    - microtasks
    - visibly-editable
    - accept-incomplete-records
    - evolving-schema
    - organise-campaigns
---

Making individual fields and records **[Visibly Editable](/patterns/encouraging-contributions/visibly-editable)** can encourage users to make small contributions, e.g. to fix data that has already been added to a record.

But if missing fields are not displayed to users when viewing a record, then they may not realise that data is missing or that it would be helpful to add it if they are able.

Implementing this pattern involves adding small prompts for users to improve an existing record: “This company is missing an address, can you add it?”.
