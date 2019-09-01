---
category: maintaining-quality
title: Field Validation
nav_order: 1
description: >-
    Users who are unfamiliar to a database are making data input errors.
context: >-
    Data entry in forms.
solution: >-
    Apply validation rules to individual fields to alert users to mistakes before the data is submitted to the database.
examples:
    
---

It is easy for even expert users to make mistakes when updating a database. In a project that uses collaborative maintenance that involves a group of users with different skills and experience it is particularly important to apply consistent validation to records.

Catching errors or potential mistakes as soon as possible will help to improve the quality of the overall database. This is true even if you have a **[Mandatory Review](/patterns/maintaining-quality/mandatory-review)** process. Automation reduces the work of reviews. 

Allowing users to choose between values, e.g. by using dropdown menus, checkboxes, and calendar entry widgets, can help to improve data entry. Avoiding free-text fields and applying consistent validation to identifiers, dates, coordinates and other structured values will also help.

Adding validation early in a project will avoid the need to retrospectively fix up existing data.

Be sure to **[Explain Fields](/patterns/data-model/explain-fields)** so that users understand what valid data looks like. Test your validation rules and user interface so that you’re sure that contributors understand how to submit valid data.