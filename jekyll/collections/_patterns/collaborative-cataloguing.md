---
category: project-types
title: Collaborative Cataloguing
nav_order: 1
description: >-
    There is a discrete set of documents, images, photographs or other material that are currently unstructured, but that could be turned into a structured dataset
context: >-
    There are many types of unstructured data sources that contain useful data and information. The work of converting, cataloguing and turning these sources into structured data can be expensive and may not always be suitable for complete automation.
solution: |
    Create a collaborative project that gives contributors a series of tasks to complete. Each task will involve cataloguing, inspecting or transcribing one item in the set of resources identified.
examples:
    
related:
    - shared-directory
    - communal-database
---

There are many unstructured data sources that contain useful information that is not easily usable as structured data. The work of converting images, text or other resources into a structured database can sometimes be automated, eg through optical character recognition (OCR), machine learning or other applications.

But in some cases these tasks are difficult to automate. They might require a contributor to make a judgement or it might be that further context and insights are needed to complete the task. This requires humans to to complete the task, rather than machines. But it is worth noting that the end result might be a training dataset that enables automation of further similar tasks.

Collaborative maintenance projects are a good way to distribute work across a group of contributors. Contributors might be volunteers, paid contributors or participating on behalf of organisations who see value in using the final or updated dataset.

This type of project contribution is normally about adding new records, rather than maintaining or improving existing data.

This type of project will typically have a **[Fixed Schema](/patterns/data-model/fixed-schema)**, because there is a clear set of tasks to complete. Because the project is organised around a discrete set of tasks, creating a **[Progress Indicator](/patterns/encouraging-contributions/progress-indicator)** will be helpful to demonstrate progress.

It is unlikely that a contributor will need to **[Submit Evidence](/patterns/maintaining-quality/submit-evidence)**, as the system provides evidence in the form of the resources to be catalogued.

The **[Onboarding Process](http://www.replace.me/patterns/community-management/onboarding-process)** and **[Learning Curve](/patterns/community-management/learning-curve)** for contributors will focus on registering  people and training them to complete their first few tasks. To encourage participation, it can be helpful to **[Gamify Contributions](/patterns/encouraging-contributions/gamify-contributions)**.

The project itself is likely run as a campaign (**[Organise Campaigns](/patterns/encouraging-contributions/organise-campaigns)**) and may have a fixed lifespan that ends when the cataloguing work is completed.