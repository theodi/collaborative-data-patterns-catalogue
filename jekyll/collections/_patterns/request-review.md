---
category: maintaining-quality
title: Request Review
nav_order: 1
description: >-
    Contributors do not feel confident about submitting changes.
context: >-
    Your project does not require **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)**, but contributors might welcome the option to have their contributions seen by a more experienced participant.
solution: |
    Allow a contributor to decide whether to **[Flag For Review](/patterns/maintaining-quality/flag-for-review)** their contribution to request that it is reviewed by another contributor.
examples:
    -
        title: "OpenStreetMap"
        thumbnail: /request-review-1.jpg
        large_image: /request-review-1.jpg
        description: >-
            At the point the contributor uploads their changes they can request a review.  The request will be added as a tag on the Changeset.
    
related:
    - moderation
    - flag-for-review
---

Not all projects require **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)**, but carrying out reviews of contributions can increase confidence of contributors. Contributors do not want to unintentionally introduce errors, so they may not submit a contribution if they do not have confidence in it.

Allowing a contributor to request that another contributor reviews their change provides an opportunity to introduce **[Feedback Loops](/patterns/community-management/feedback-loops)** into the workflow for maintaining your data.

A **[Changeset](/patterns/data-model/changeset)** that has been flagged for reviewing might be immediately applied to the database, so the review is done retrospectively. Or it might go into a queue for reviewing before being applied.