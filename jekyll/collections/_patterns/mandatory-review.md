---
category: maintaining-quality
title: Mandatory Review
nav_order: 1
description: >-
    All entries need to be correct and adhere to policy.
context: >-
    Some projects need to be able to make strong guarantees that all of the data being maintained has been through a quality review.
solution: |
    Introduce a mandatory review stage that requires contributors to inspect all entries before they are applied to the database.
examples:
    
related:
    - moderation
    - clearly-defined-roles
---

Sometimes ensuring data quality is more important than the speed of data collection. Reviewing contributions before they are applied to the project database could be mandatory in situations where: 

* The data model is complicated and contributions have a high error rate
* The type of data being collected is contentious or prone to interpretation
* The project needs to be able to make strong guarantees to data users about the quality of the collected data, for example to ensure it is fit for purpose or to **[Minimise Harm](/patterns/project-governance/minimise-harm)**

While introducing mandatory reviews can help to address quality issues in newly contributed or updated data, it may impact the quality of the project data in other ways. For example if reviews take time to process then the published data might become out of date. The additional friction in the contribution process might also limit how quickly the database will grow over time.

Mandatory reviews will require you to either involve the project team in reviewing or have a community of skilled contributors who are equipped to quickly process newly submitted data.

Mandatory review would normally be applied to the whole database for all users. But it could be applied in more limited ways, e.g. to only certain types of records or topics where quality is known to be an issue.