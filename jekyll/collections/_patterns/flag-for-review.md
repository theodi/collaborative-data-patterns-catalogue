---
category: maintaining-quality
title: Flag For Review
nav_order: 1
description: >-
    Some records need closer attention to help check for potential quality issues.
context: >-
    Your project may have a large number of contributions, but limited capacity to review them all. Your project does not require **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)**, but you need a way of bringing potential problems to a reviewer’s or the community’s attention. 
solution: >-
    Allow **[Changesets](/patterns/data-model/changeset)** and records to be flagged as needing attention to encourage **[Retrospective Review](/patterns/maintaining-quality/retrospective-review)** by the community. 

    Provide a means for users to quickly identify those changesets or records that have been flagged, e.g. by providing a list or by clearly displaying a status indicator against a record.
examples:
    
---

When a project is using **[Retrospective Review](/patterns/maintaining-quality/retrospective-review)** it can be useful to guide a community towards the entries and records that need most attention.

Most entries might be fairly routine and may not need reviewing. But some entries may need to be prioritised as needing closer attention. By flagging those that need work you can help to **[Respect Users Time](/patterns/community-management/respect-users-time)**.

Records might be flagged for review through **[Error Reporting](/patterns/editing/error-reporting)**, when contributors **[Request Reviews](/patterns/maintaining-quality/request-review)** or as part of an automated process that checks incoming changes for potential quality issues.
