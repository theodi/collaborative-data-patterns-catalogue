---
category: editing
title: Attributable Contributions
nav_order: 1
description: >-
    Without knowing the source of individual contributions it can be harder to monitor, converse with and recognise the work of the community
context: >-
    A project with **[Anonymous Contributions](/patterns/editing/anonymous-contributions)** might suffer from spam or malicious edits.
solution: |
    Only allow signed-in contributors to contribute to the project so that each contribution is attributed to a specific person. Minimise the information collected about users to respect their privacy.
examples:
    -
        title: "Freesound"
        thumbnail: /uploads/patterns/attributable-contributions-1.jpg
        large_image: /uploads/patterns/attributable-contributions-1.jpg
        description: >-
            All contributions for a given contributor

related:
    - anonymous-contributions
---

The ability to tie contributions to individual user profiles can help to:

* Support the work of reviewing submissions by relating **[Changesets](/patterns/data-model/changeset)** to individual users
* Allow **[Escalating Blocking](/patterns/managing-conflict/escalating-blocking)** to be applied to individual contributors
* **[Deliver Individual Value](/patterns/encouraging-contributions/deliver-individual-value)** by giving users tools or benefits from contributing data
* **[Gamify Contributions](/patterns/encouraging-contributions/gamify-contributions)** to encourage further contributions from individuals
* Enable you to **[Grant Privileges](/patterns/project-governance/grant-privileges)** or allow users to **[Automatically Acquire Privileges](/patterns/project-governance/automatically-acquire-privileges)** so that they can take on additional responsibility
* Provide useful metrics on contribution patterns to help you **[Know Your Community](/patterns/community-management/know-your-community)**
* Thank or provide feedback to contributors

Making it clear to users that their contributions are not anonymous might also encourage them to contribute in a more productive and considerate manner.

One downside of requiring users to register to contribute to a project is that it adds friction. But this might be lessened by providing a good **[Onboarding Process](/patterns/community-management/onboarding-process)**.

The other major downside of relating contributions to individual user accounts is that there are increased privacy risks. For example contributors might be incidentally giving away personal information, e.g. home or work location, as a side effect of contributing to the project or **[Submitting Evidence](/patterns/maintaining-quality/submit-evidence)**.

Ensure you are minimising the amount of data collected from contributors and that sensitive information is only shared as required. Ensure that you are applying with appropriate data protection laws and regulation, e.g the [GDPR](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/).

Your Onboarding Process should ensure that you have explained to a user why signing up is necessary and that you have clearly displayed your privacy policy.
