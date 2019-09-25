---
category: project-governance
title: Grant Privileges
nav_order: 1
description: >-
    Specific features of a project need to be restricted to certain users
context: >-
    Projects may need to limit some features, such as the ability to revert changes made by other users, to a smaller set of trusted contributors.
solution: |
    Explicitly assign roles and privileges to individual user accounts.
examples:
    -
        title: "Wikidata"
        thumbnail: /uploads/patterns/grant-privileges-1.jpg
        large_image: /uploads/patterns/grant-privileges-1.jpg
        description: >-
            Roles which can be granted to users as described in wikidata’s [policy pages](https://www.wikidata.org/wiki/Wikidata:User_access_levels)

related:
    - automatically-acquire-privileges
---

In any project there is usually a need to restrict certain features to a smaller group of privileged users. For example only project administrators might be able to apply a **[Temporary Block](/patterns/managing-conflict/temporary-block)** to a user account. Or the ability to apply a **[Bulk Changes](/patterns/workflow/bulk-changes)** might be limited to users that have shown they are capable of using the necessary tools with due care and attention.

Role based access control is a common way to restrict features and abilities to specific user accounts. A project team can retain control over which users have specific roles by explicitly granting those rights through an administration tool.

It is important to have **[Clearly Defined Roles](/patterns/project-governance/clearly-defined-roles)** so both the project team and the community understand their responsibilities.

In large communities it might be helpful to allow users to **[Automatically Acquire Privileges](/patterns/project-governance/automatically-acquire-privileges)** to share work and responsibilities.
