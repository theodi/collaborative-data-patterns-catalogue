---
category: data-model
title: Fixed Schema
nav_order: 1
description: >-
    The items in my database must all be described in the same way.
context: >-
    The data to be captured in a project is known in advance and is not expected to change. For example, the project may involve collecting information about a specific list of items which have common attributes.
solution: >-
    Agree the types of records and the attributes to be collected when designing your project. Ensure that the information you need to collect is well described so that contributors understand what is needed and how it will be used. This will help users to provide the data consistently, either directly through editing or through changes made via APIs.
examples:
    
---

Some collaborative projects are designed to support a specific purpose, for example collecting a list of places, services or companies; or to catalogue specific pieces of information, such as metadata describing a set of pictures, documents or videos.

In these cases, the types of records (e.g. place, company, or book) and their attributes (name, address, ISBN) are usually well defined. Collecting and managing the data will be designed specifically around this information, and the schema will be defined by the organisation or people designing the project, rather than the community of contributors.

It is important to ensure that the community understands what data is being collected, why it is useful and how it might be used. This will help them contribute effectively and will also help potential users of the data understand whether it will help meet their needs.

Use appropriate wording so that your schema can be understood by experts and non-experts.

Before the schema is finalised, consult widely with domain experts and users of the data. This will ensure the description of the items don’t need to change.

Needs may change over time, so you may also need to adopt an **[Evolving Schema](/patterns/data-model/evolving-schema)** approach in the future.

If it is important for your community to help shape and evolve the schema, a **[Shared Canvas](/patterns/data-model/shared-canvas)** approach might be better, although starting from a Fixed Schema can help build an initial community.