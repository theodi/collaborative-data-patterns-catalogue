---
category: maintaining-quality
title: Cite Sources
nav_order: 1
description: >-
    Verifying the factual claims in a record is difficult without a cross reference to a primary source.
context: >-
    Databases often consist of data that is taken from a variety of sources. For example a directory of companies might include company identifiers and codes that are taken from other datasets. Or the name of the CEO might be taken from a company website.
solution: |
    Ask contributors to add a cross reference to another authoritative dataset or public body of work to **[Submit Evidence](/patterns/maintaining-quality/submit-evidence)** to support their contribution.

    Display the provided links and/or citations so that other users can verify the data.
examples:
    -
        title: "Colouring London"
        thumbnail: /uploads/patterns/cite-sources-1.jpg
        large_image: /uploads/patterns/cite-sources-1.jpg
        description: >-
            Contributors can cite a source to back up the value provided for age of building
    -
        title: "Wikidata"
        thumbnail: /uploads/patterns/cite-sources-2.jpg
        large_image: /uploads/patterns/cite-sources-2.jpg
        description: >-
            Wikidata policy on citing sources
    -
        title: "Wikipedia references"
        thumbnail: /uploads/patterns/cite-sources-3.jpg
        large_image: /uploads/patterns/cite-sources-3.jpg
        description: >-
            Example of both references and citations
    -
        title: "Wikipedia allows different perspectives"
        thumbnail: /uploads/patterns/cite-sources-4.jpg
        large_image: /uploads/patterns/cite-sources-4.jpg
        description: >-
            Contested data can exist simultaneously as long as all claims can be sourced

related:
    - submit-evidence
    - proof-of-witness
---

Identifying when data has been taken from primary sources can help contributors to check that a change made to a record is correct. Cross-references might include scholarly citations, references to official websites and publications, or linking identifiers to third-party datasets.

Some projects might only capture citations as part of a comment in a **[Changeset](/patterns/data-model/changeset)**, but if contributors are prompted to add a citation for individual fields, it becomes easier to track and check the provenance of individual values.

You should decide what is considered a good source for your project. Document your decisions in your **[Published Policy](/patterns/project-governance/published-policies)** so that users can consult an approved list of sources and use them in citations.

To encourage contributions you may decide to **[Accept Incomplete Data](/patterns/data-model/accept-incomplete-records)** and make citations optional. In this case, you should consider indicating to data users that the contribution is not cross-referenced and allow someone to add a reference at a later date.

It is important to be aware that not everything can be confirmed as indisputable fact, and different, reputable sources may even contradict each other, for example, details about disputed territories, and even historical dates of events. It is sometimes possible to Allow Different Perspectives, by allowing fields to have multiple values with different sources.
