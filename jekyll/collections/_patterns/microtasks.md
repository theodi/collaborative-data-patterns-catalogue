---
category: encouraging-contributions
title: Microtasks
nav_order: 1
description: >-
    Maintaining a mature database involves carrying smaller repetitive tasks that may be less engaging for contributors
context: >-
    As a dataset becomes more mature, it may be harder for contributors to identify useful ways to contribute when there are fewer obvious gaps in coverage. Contributors might also be less motivated by ongoing maintenance tasks. It is easy to feel a sense of progress when adding new records, but less so when improving them.
solution: |-
    Identify a set of tasks for users to complete. This might be a list of **[Suggested Edits](/patterns/encouraging-contributions/suggested-edits)**, records that need to be **[Marked as Verified](/patterns/maintaining-quality/marking-as-verified)** or other tasks to verify existing data.

    Provide contributors with a task interface that prompts them to complete a number of individual tasks. Use a **[Progress Indicator](/patterns/encouraging-contributions/progress-indicator)** or **[Gamify Contributions](/patterns/encouraging-contributions/gamify-contributions)** to encourage them to complete the tasks.
examples:
    -
        title: "EveryPolitician"
        thumbnail: /uploads/patterns/microtasks-1.jpg
        large_image: /uploads/patterns/microtasks-1.jpg
        description: >-
            Ask contributors to provide the missing gender information that hasn’t been captured from other sources
    -
        title: "Zooniverse"
        thumbnail: /uploads/patterns/microtasks-2.jpg
        large_image: /uploads/patterns/microtasks-2.jpg
        description: >-
            Zooniverse uses microtasks to share large datasets with many contributors

related:
    - suggested-edits
    - gamify-contributions
---

In the early stages of a project, contributors may be motivated by the process of populating a new empty database. Seeing a directory, catalogue or map grow over time provides a sense of progress.

As projects move to maturity, the collaborative work may shift towards smaller maintenance tasks. For example populating, updating and verifying existing records. Without a sense of how these smaller changes are contributing to the overall quality of the dataset then contributors may be less motivated to complete them.

Microtasks are small contributions that users can make to a dataset to help to improve quality and coverage. Identifying and suggesting lists of tasks to contributors to identify a useful set of activities they can complete.

**[Suggested Edits](/patterns/encouraging-contributions/suggested-edits)** are examples of microtasks. These are presented in the context of an existing record. Microtasks are more general and might include adding new fields, verifying existing data or reviewing contributions made by other users.

If there is a large number of similar tasks to complete then **[Organise Campaigns](/patterns/encouraging-contributions/organise-campaigns)** around the tasks and create a **[Progress Indicator](/patterns/encouraging-contributions/progress-indicator)**. For example: “In this campaign we are aiming to reach 80% coverage of addresses in our database, here is a list of records that are currently missing addresses in your area”.

Microtasks can be presented in ways that make them more engaging and which simplify the process of verifying or adding some data.

For example, imagine that a project is aiming to improve information about the wheelchair accessibility of the locations in its database. Rather than requiring users to find and edit an existing record, it might instead choose to present tasks on a custom map interface to allow users to see nearby buildings. It might them provide a simple question based interface to help the user complete the task: “Does this location have a wheelchair accessible toilet?”. The user can then quickly answer the question, making the work of contributing much easier.

If a project has chosen to **[Gamify Contributions](/patterns/encouraging-contributions/gamify-contributions)** then creating badges for completing sets of microtasks might also encourage contributions.
