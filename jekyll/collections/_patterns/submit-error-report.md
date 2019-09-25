---
category: maintaining-quality
title: Submit Error Report
nav_order: 1
description: >-
    It is important to flag errors whenever they are identified even if they can’t be immediately fixed
context: >-
    Contributors may not have the time, ability or the information available to fix a problem at the point it is identified. Unless there is a way for a mistake to be flagged in the system then the error may persist over time.
solution: |
    Provide a means for data users and contributors to easily flag errors and omissions in a dataset as soon as they are identified.
examples:
    -
        title: "Rebrickable"
        thumbnail: /submit-error-report-1.jpg
        large_image: /submit-error-report-1.jpg
        description: >-
            Contributors can either leave a message in the forum, or click a button on the page
    -
        title: "Google business listings"
        thumbnail: /submit-error-report-2.jpg
        large_image: /submit-error-report-2.jpg
        description: >-
            Contributors can suggest edits by clicking a link directly in the record
    
related:
    - flag-for-review
    - retrospective-review
---

All databases include errors. Collaborative maintenance projects are designed to allow contributors to quickly fix errors or add missing data. 

But sometimes the person identifying an error may not be able to immediately fix it. This might be for a variety of reasons, including:

* they might not be signed up as a contributor
* they might not have the necessary correct data to hand, or feel confident in making the fix themselves
* the record(s) to be fixed are converted to **[Locked Records](/patterns/maintaining-quality/locked-record)** and so editing is limited to people with **[Clearly Defined Roles](/patterns/project-governance/clearly-defined-roles)**

Some projects might also be uncomfortable with implementing a fully collaborative system for maintaining its data. For example, records might only be editable by the core project team. But the project may still benefit from sharing the work of identifying problems across the community of data users. 

Error reporting is the most basic way to introduce collaborative maintenance into a project. Allowing users to inform you about errors is the simplest way of getting value from sharing data with a community. 

There are a variety of ways to implement this pattern. 

When an error is reported the project might simply **[Flag For Review](/patterns/maintaining-quality/flag-for-review)** the record or **[Changeset](/patterns/data-model/changeset)** that contains the error. This can be useful to indicates that there is a problem, but doesn’t capture much detail.

Providing a feedback form to allow users to submit more details about an error or omission, e.g. listing the incorrect fields, is a helpful way to capture more information that can be shared with contributors. This might be helpful if there is likely to be some discussion or further review needed to confirm and correct the error.

Implementing a **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)** process, perhaps with **[Anonymous Contributions](/patterns/workflow/anonymous-contributions)**, is another way to handle error reporting. But this assumes that a user has the necessary information and skills to suggest the appropriate fix.