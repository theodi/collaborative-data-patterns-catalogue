---
category: project-governance
title: Automatically Acquire Privileges
nav_order: 1
description: >-
    In a large community it can be time-consuming to individually assess contributors in order to grant them specific privileges or roles.
context: >-
    Projects may need to limit some features, such as the ability to revert changes made by other users, to a smaller set of trusted contributors. Relying on **[Granting Privileges](/patterns/project-governance/grant-privileges)** in large, active communities can be time-consuming.
solution: |
    Design the system so that contributors are automatically granted privileges based on their activities. For example based on the number or type of contributions they make.
examples:
    -
        title: "Stack Overflow"
        thumbnail: /uploads/patterns/automatically-acquire-privileges-1.jpg
        large_image: /uploads/patterns/automatically-acquire-privileges-1.jpg
        description: >-
            Users are awarded more privileges as their points increase. Points are awarded by participating in different areas such as editing answers or offering guidance to others.

related:
    - grant-privileges
    - gamify-contributions
    - clearly-defined-roles
    - learning-curve
---

In a collaborative maintenance projects, it might be useful to allow people outside of the core project team to take on additional responsibilities. This can help to share the work of managing the community, administering the database, etc. One way to do this is to explicitly **[Grant Privileges](/patterns/project-governance/grant-privileges)** to individual users. Frequent contributors might be prominent in the community and might be happy to be granted more rights and responsibilities.

In projects that have large, active communities it can be time consuming to individually grant privileges. Allowing users to automatically acquire privileges based on their activities can reduce this overhead.

Different projects use different ways to automatically assess contributors. For example a contributor might automatically acquire privileges based on:

* the volume of their contributions
* the quality of contributed data, e.g. entries that have been accepted without amendments
* consistency of contribution over a sustained period

These metrics often overlap with methods to **[Gamify Contributions](/patterns/encouraging-contributions/gamify-contributions)**.

Acquiring privileges isn’t necessarily about gaining an administrator role. A project might choose to restrict the features available to a new contributor until they have demonstrated that they are a trustworthy contributor.

For example, to limit entries from spam accounts, a project might limit new users to a maximum number of entries in the first 24 hours of registering. Or they may only acquire the ability to undo a change made by another user (**[Revert Change](/patterns/editing/revert-change))** after making a number of their own contributions.

From this perspective, this pattern can be seen as supporting the implementation of a **[Learning Curve](/patterns/community-management/learning-curve)** by restricting access to features that require more experience.
