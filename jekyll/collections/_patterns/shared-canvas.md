---
category: data-model
title: Shared Canvas
nav_order: 1
description: >-
    How do you empower a community to shape the types of data collected in a project so that it can adapt to a range of needs?
context: >-
    Your project might have different communities of users with different needs and priorities; trying to get central agreement is difficult.
solution: |
    Design your system so that new fields (and maybe types of records) can be added by the community. For example, you might allow users to add name-value pairs to any record, allowing them to arbitrarily add new attributes. Provide the community with tools, for example a wiki, to help them document how individual fields, or collections of fields, should be used to describe different types of things.
examples:
    -
        title: "OpenStreetMap"
        thumbnail: /uploads/patterns/shared-canvas-1.jpg
        large_image: /uploads/patterns/shared-canvas-1.jpg
        description: >-
            Description of proposal process to add a new features or tags

related:
    - evolving-schema
    - fixed-schema
---

Allowing a community to take control over an **[Evolving Schema](/patterns/data-model/evolving-schema)** can help to distribute decision making about what data should or shouldn’t be included in a project to the community of contributors and users. This can help a project meet a wider range of user needs. For example allowing a local community to add information that is useful for their region or for their sector.

Working fully in the open, with this type of **[Evolving Schema](/patterns/data-model/evolving-schema)** creates additional challenges. The lack of a **[Fixed Schema](/patterns/data-model/fixed-schema)** may be seen as a downside by some users who would like a single, consistent view of a dataset. But a more collaborative approach might help keep a project alive by encouraging broader participation. Providing tools to enable **Exportable Data** might help mitigate concerns by allowing users to focus on just the data they need.

Encouraging the community to document, discuss and consistently apply fields will also help. As the schema is no longer centrally managed, the project will need to provide tools for users to help with this documentation.

The ability to analyse how and where different fields are being used in a dataset, will help the community reflect on and adapt usage, so that they can be fully in control of the **[Evolving Schema](/patterns/data-model/evolving-schema)**.

Encourage the community to use a wiki or other collaborative documentation tool to propose and agree on changes in a collaborative, distributed way.

Provide the community with tools to analyse the use of specific types and attributes in the dataset to help monitor usage.
