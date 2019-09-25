---
category: editing
title: Revert Change
nav_order: 1
description: >-
    A change has introduced errors or inaccuracies into the database.
context: >-
    An entry has been accepted into the database, introducing a change that needs to be undone.
solution: |
    Allow entries to be undone so that  people or machines can revert the effects of an entry if necessary.
examples:
    -
        title: "Democracy Club"
        thumbnail: /revert-change-1.jpg
        large_image: /revert-change-1.jpg
        description: >-
            As well as reverting a single changeset, here a contributor can revert many changes to revert a record to a particular version.
    -
        title: "Discogs"
        thumbnail: /revert-change-2.jpg
        large_image: /revert-change-2.jpg
        description: >-
            Discog’s policy is that anyone, including the original author, may revert a single change
    -
        title: "OpenStreetMap"
        thumbnail: /revert-change-3.jpg
        large_image: /revert-change-3.jpg
        description: >-
            OpenStreetMap policy describes the circumstances in which changes may be reverted by moderators
    
related:
    - changeset
    - track-changes
    - moderation
---

Entries can occasionally introduce errors into the database, or may have been made by someone with mischievous intent, e.g. to add spam or false information. In these cases, entries need to be reversed or reverted. This is sometimes called ‘roll-back’.

Edits must be reversed in accordance with the project’s **[Published Policy](/patterns/project-governance/published-policies)**. Contributors should be informed, before or after the reversion, so that they can learn from the mistake and be given an opportunity to try again.

Usually mistakes will be caught and reversed by project administrators or moderators. But it is possible for a project to allow anyone to revert any entry, even if it was made by someone else. The nature of the project will determine whether a permissions-based system is needed, so that only administrators, moderators or the original editor can revert changes.

If a contributor makes repeated incorrect or malicious edits then **[Escalating Blocking](/patterns/managing-conflict/escalating-blocking)**. Might be applied.