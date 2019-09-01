---
category: project-types
title: Shared Directory
nav_order: 1
description: >-
    Compiling an up-to-date, useful directory of companies, services, events or other records requires the input of multiple organisations.
context: >-
    Sometimes the information needed to create a useful data asset is spread across multiple organisations, websites or other resources. Compiling the data can be time consuming and it can be difficult to keep it up to date.
solution: >-
    Create a collaborative maintenance project that supports contributors in sharing data about their organisations or activities.
examples:
    
---

It is often helpful to have up-to-date reference data that provides a directory or listing of records. For example:

* A list of services available in a local area can help residents find support. 
* A register of research organisations can help to improve data about academic research and funding activities.
* A directory of information about schools can be used to create statistics that can inform policymaking.

To be useful, reference data needs to have good coverage and be kept up to date. The work of compiling and maintaining the data frequently involves collecting data from multiple people and organisations. This means they are well suited to collaborative maintenance.

This type of project requires both collection and maintenance of data, so it is important to encourage contributions from stakeholders.

A Shared Directory is a specific type of **[Communal Database](/patterns/project-types/communal-database)**. The key differences are that in a directory project:

* there is typically a single or small number of record types, its **[Fixed Schema](/patterns/editing/fixed-schema)** reflecting the focus on compiling a list of resources
* contributors may be participating on behalf of their organisation to provide data about that organisation or its activities, rather than collecting data about a broader range of resources
* people contribute data directly, so there may be less need for **[Extendable Tooling](www.replace.me/patterns/workflow/extendable-tooling)** or **[Bulk Changes](/patterns/workflow/bulk-changes)**

These projects might be run as a fully collaborative project, allowing anyone to add or update records eg to add a missing business into a local listing.

But the project might also have a more restricted approach to data entry and editing. For example, the **[Onboarding Process](/patterns/community-management/onboarding-process)** might involve confirming that a contributor is authorised to participate on behalf of their organisation. The project team may **[Grant Privileges](/patterns/project-governance/grant-privileges)** that mean contributors can only edit or update records about their organisation.

As a directory may be limited in size, the project might choose to require **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)** of records and leave users to use **[Error Reporting](/patterns/editing/error-reporting)** to flag quality issues.

As individual contributors are participating on behalf of their organisations it is important to **[Deliver Individual Value](/patterns/encouraging-contributions/deliver-individual-value)**, for example by demonstrating the benefit of keeping information up to date.

While many datasets rely on this type of collaborative approach there may be little insight into the underlying workflow. Exposing of the details and activity of the shared work – eg via **[Tracked Changes](/patterns/workflow/track-changes)**, **[Published Policies](/patterns/project-governance/published-policies)** and using a **[Progress Indicator](/patterns/encouraging-contributions/progress-indicator)** – might help to build confidence in the data.