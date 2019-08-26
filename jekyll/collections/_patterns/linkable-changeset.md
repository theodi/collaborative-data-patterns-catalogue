---
category: workflow
title: Linkable Changeset
nav_order: 1
description: |-
    Implement the **Changeset** pattern which will ensure that you are capturing a unique identifier and useful context for each entry.

    Ensure that every entry can be referenced via a unique URL that, when visited, delivers a web page that provides a useful summary of the metadata. Expose those URLs in the system e.g via a **Track Changes** view.
problem: >-
    How can the activity of contributors be made accessible on the web to allow them to be referenced and discussed on social media or in emails, wiki pages and blog posts?
context: >-
    The ability to link to changes on the web will allow contributors to use a range of existing communication tools to help them coordinate their work.
examples:
    
---

The ability to directly link to and view entries made to the system is a helpful way to allow a community to self-organise using existing web based tools and documentation.

The ability to reference a specific mistake can be helpful in creating moderation processes, or to provide examples of good and bad changes from training material and documentation.

Being able to reference bad or damaging edits will help to provide evidence for why graduated sanctions have been applied to a user, e.g. to impose a temporary or permanent ban.

The privacy and technical considerations of implementing the Describable Entry pattern also apply here. Care should be taken about what personal information about contributors might be accessible. Archiving or removing historical entries might break URLs, so the impact of this should be considered.
