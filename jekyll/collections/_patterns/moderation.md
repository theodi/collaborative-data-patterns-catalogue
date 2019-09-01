---
category: maintaining-quality
title: Moderation
nav_order: 1
description: >-
    There is a need to ensure that contributions are of good quality.
context: >-
    Oversight of contributions can help to highlight potential quality issues, areas where policy isn’t being correctly applied, or identify spam or malicious edits. Knowing contributions will be reviewed gives users of your data confidence that the project has made efforts to ensure good quality. Knowing contributions will be reviewed builds confidence in contributors.
solution: >-
    Design an appropriate process that will provide the project team and your community of contributors with oversight of incoming contributions and the tools necessary to review and act on them.
examples:
    
---

This pattern is often implemented as a manual review process, in which contributions go into a queue for review by a project team member or an experienced user before they are accepted into the live database.

Introducing a review step builds confidence that quality checks have been carried out prior to data being made available for use or further editing. Introducing this step puts an emphasis on quality over speed of contributions, as the review process – unless it is very quick – will limit how quickly contributors can populate or correct the database.

It is possible to implement moderation as a required stage for all contributions, eg as a **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)**. But moderation can also be optional. Contributors might also **[Request Reviews](/patterns/maintaining-quality/request-review)**.

The system may only apply moderation to specific contributions, by defining some kind of rules to **[Flag them for Review](/patterns/maintaining-quality/flag-for-review)**. This might be based on validating or inspecting the information that has been changed, or contributions that are from new users.

As moderation is typically manual, implementing this pattern implies that the system has a means of indicating which contributors have moderator privileges, eg by assigning an explicit set of rights (**[Clearly Defined Roles](/patterns/project-governance/clearly-defined-)**). Where there aren’t defined moderator roles, it may be more efficient to simply do **[Retrospective Review](/patterns/maintaining-quality/retrospective-review)** and rely on contributors to **[Track Changes](/patterns/workflow/track-changes)** to help review contributions.

Communication around moderation will manage contributor’s expectations, and help assure them that their contribution is valued. During the process of making a contribution, and in your **[Published Policy](/patterns/project-governance/published-policies)**, you can inform them:

* How long reviews should take
* The reasons why contributions have been rejected or how to improve them
* Who is making the decisions

When moderation is complete, the reviewer will need to accept the change for it to be accepted into the database. If moderation involves a **[Changeset Discussion](/patterns/workflow/changeset-discussion)** between contributors which results in the entry being revised, eg to fix a data error, then the process for completing the review and accepting the change should be made clear.

Reviews can be made by humans or machines, or a hybrid of both. Humans can provide feedback via a **[Changeset Discussion](/patterns/workflow/changeset-discussion)**, whereas machines can carry out** Automated Consistency Checks** to surface common errors. To further reduce data quality issues, **[Field Validation](/patterns/maintaining-quality/field-validation)** helps to capture common errors.

Contributors can review large numbers of **[Changesets](/patterns/data-model/changeset)** by following **[Tracked Changes](/patterns/workflow/track-changes)** on **[Watch Lists](/patterns/workflow/watch-list)**, or by setting parameters to **[Flag Reviews](/patterns/maintaining-quality/flag-for-review)**, such as those of new users. If the project does not provide ways to rank, filter and sort changes, **[Extensible Tooling](/patterns/workflow/extendable-tooling)** could provide ways to manage lists.