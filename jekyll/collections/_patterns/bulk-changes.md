---
category: editing
title: Bulk Changes
nav_order: 1
description: >-
    Multiple records need to be updated to import or fix data. Doing them individually is labour intensive.
context: >-
    Projects are typically designed around supporting users in adding or improving individual records. This model doesn’t work well when there is a need to import external data which contains useful data to be applied to multiple records.
solution: |
    Provide a custom tool for contributors to upload, review and apply updates to multiple records.
examples:
    -
        title: "Grand Comics Database"
        thumbnail: /uploads/patterns/bulk-changes-1.jpg
        large_image: /uploads/patterns/bulk-changes-1.jpg
        description: >-
            Video tutorial for making bulk changes taken from the Comics Database wiki site

related:
    - extendable-tooling
    - marking-as-verified
---

All database systems provide the means to make bulk updates to records. This pattern is about exposing this type of functionality to contributors to help them make changes to multiple records in one update.

There are a number of reasons why performing bulk updates might be necessary, for example:

* the project includes data from external datasets and this information needs to be regularly refreshed
* a contributor has collated data from external sources, e.g. in a spreadsheet, and needs an easy way to import it into the project
* due to an **[Evolving Schema](/patterns/data-model/evolving-schema)** there is a need to fix a large number of existing records to populate missing fields
* there are a number of data quality issues across multiple records that can be fixed in a single update

Implementing a bulk update tool will require thinking about the workflow of applying updates to the dataset. For example:

* the contributor will need to upload the data to be applied, in a standard format that identifies the records to be changed and which fields will be added, removed or updated
* the system will need to confirm that the identified records exist and prompt the contributor for what to do if there are gaps. For example, should new records be added, or should elements of the import be ignored? How will conflicts be handled?
* the contributor should be prompted to confirm that they are happy that the import will be applied correctly, so they are clear about what changes will be applied
* large imports may take time to complete, so may need to be carried out as a background task that can be monitored by the contributor
* the system should consider handling the update as a single **[Changeset](/patterns/data-model/changeset)** so that it can be reverted (**[Revert Change](/patterns/editing/revert-change)**) in a single update

The ability to make large scale changes to a database means that a single update could potentially damage a large number of records. A project may choose to impose limits on the size and frequency of bulk updates, or limit access to the tool to trusted contributors.

If a project has exposed an API to implement **[Extendable Tooling](/patterns/workflow/extendable-tooling)** then it should consider updating its policies and API terms to reflect whether bulk updates are permitted.
