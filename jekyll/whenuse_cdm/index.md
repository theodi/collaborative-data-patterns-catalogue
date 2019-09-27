---
layout: content-page
title: When is collaborative maintenance useful?
hero:
  show_breadcrumb: true
  bg: /uploads/heros/homepage.png
  nav:
    title: Getting Started
    items:
      - aboutpatterns/index
      - whatis_cdm/index
      - workedexample/index      
      - glossary/index
description: 'Collaborative data maintenance has been successfully used in a wide variety of projects. Looking at successful projects helps identify some common characteristics and challenges.'
footer:
---

## Examples of collaborative data maintenance projects

There are a number of examples of collaborative data maintenance projects that involve communities of individuals and organisations working across the data spectrum. These examples include:



*   The UK Government’s [Get information about schools](https://get-information-schools.service.gov.uk/) service is a collaboratively maintained dataset of around 65,000 educational establishments. The work of maintaining the data is spread across authorised people working in the individual organisations. The data is available under an open licence.
*   Google’s [My Business](https://www.google.com/business/?ppsrc=GPDA2) service allows individual businesses to contribute and manage information about their company and services so that they are discoverable in Google Maps and Google Search. This is an example of public data as Google limits reuse of the contributions.
*   [Discogs](https://www.discogs.com/) is an online marketplace for music collectors and traders. The commercial service relies on a collaboratively maintained music database which is maintained by its community of users. The data has been placed in the public domain.
*   [Zooniverse](https://www.zooniverse.org/) hosts a collection of citizen-science projects.. These encourage the public to contribute to the collection and cataloguing of data that is used to support academic research. The projects cover a wide range of topics, from astronomy to zoology. The collected data is licensed and used in a variety of ways.
*   [OpenStreetMap](https://www.openstreetmap.org) is an openly licensed geospatial database that is currently maintained by a global community of individuals, community groups, small businesses [and large organisations like Facebook, Apple and Microsoft](https://theodi.org/article/how-are-facebook-apple-and-microsoft-contributing-to-openstreetmap/)


## Common applications of collaborative maintenance

By looking at the range of successful collaborative maintenance projects we can identify some scenarios where the techniques are commonly applied:



*   **When completing a discrete set of tasks to produce structured data.** For example, to transcribe audio or text, inspect images, or review and catalogue media. Collaborative maintenance helps by sharing these tasks across a community of contributors.
*   **When collecting a set of observations** to create a useful, aggregate dataset that provides insight into the environment, a community or other area of interest.
*   **When producing a directory of companies, services or other resources** where multiple people need to contribute to create a more comprehensive output.
*   **When collecting contributions from a diverse communit**y to create a more representative dataset for training machine-learning algorithms.
*   **When creating a common database or register** that supports a community in creating new products and services, or to improve decision-making.

If your project fits into one of these categories then collaborative maintenance may be a useful approach. See our notes on <span style="text-decoration:underline;">when to use collaborative maintenance</span> and the <span style="text-decoration:underline;">project type patterns</span> in our pattern catalogue.

The above examples describe where collaborative data maintenance is a primary feature of the project. But the approach might be useful in other contexts. It may be helpful to apply techniques from collaborative maintenance projects to develop features for users or partners to contribute to other types of services. For example, any product or service that provides data to users would benefit from implementing a process for reporting data errors and omissions, as outlined in the guide.


## When not to use collaborative maintenance?

Collaborative maintenance may not be suitable for all types of data assets. This approach might be unsuitable in the following cases:



*   **When the data to be stewarded is primarily coming from a single source**, so the work of collecting and maintaining it is difficult to distribute.
*   **When there are legal or ethical reasons** which mean increasing access to the data across a community of contributors is not appropriate.
*   **When the work of collecting and combining data can be entirely automated**, eg where there are a stream of sensors readings being collected into a common dataset.
*   **When the goal is to simply increase access to data**, rather distribute the work of collecting and maintaining it. There are [a range of different approaches](https://theodi.org/project/the-data-access-map/) that help to increase access to data, it is important to choose one that is best suited to achieve the desired outcome.


## Designing a collaborative maintenance project

Collaborative maintenance projects can be designed in different ways. Some of the key criteria to consider when designing a project include:



*   **The scope and focus of the data to stewarded in the project**. For example, is the project a simple directory or register, or a more comprehensive database? What types of record will it contain?
*   **The approach to governance and decision-making**. For example, how will decisions around the scope and technical aspects of the community be made? Will the project team make decisions in consultation with the community, or will it be a community-driven process?
*   **The openness of the project to different contributors**. For example, can any member of the public sign up to participate, or is it only open to specific participants, eg researchers, employees of partner organisations, or designated people in specific organisations?
*   **Whether contributors are completing tasks or undertaking other work**. For example some projects allow contributors to add new data, eg by completing specific tasks, but other work is managed more centrally.
*   **The approach taken to review and validate contributed data**. For example, are all contributors validated and moderated before adding to the dataset, or is the work of reviewing and managing quality managed as a community process?
*   **The tools provided to contributors to collect, review and maintain data**. The types of user-interface provided, and the use of offline, mobile and web-based tooling – and the ability to provide bulk imports – will impact how the community coordinates its work.
*   **The rights and ability to reuse data collected by the project**. For example, where does the collected data sit on [the Data Spectrum](https://theodi.org/about-the-odi/the-data-spectrum/)? How will data access be provided?

The choice of who can contribute to a project can have impacts on its success. For example, the quality of a dataset might be lowered if non-experts can add incorrect data. But it might also increase if more people can identify and fix errors. Concerns over maintaining quality in more open approaches can be mitigated by applying a techniques to support data reviewing.

Many of the challenges around collaboratively maintained datasets involve dealing with recruiting, mentoring and sustaining a community of contributors. Small-scale projects where people are encouraged to –or are required to – contribute as part of their existing role may find it easier to maintain a community.

Some projects have a specific set of tasks that need to be completed, eg cataloguing a set of documents, or identifying animals in a specific collection of photos. These projects may have a fixed lifespan, ending when the set of tasks are completed. This means there is less need to maintain a community in the long term and it becomes easier to train users on a fixed set of tasks.

Other projects are more open ended. Perhaps because the information to be collected is constantly changing, eg a stream of new photos to catalogue, or an ever-changing set of addresses or list of companies. Or maybe the scope is changing because people keep finding new information to add to the dataset.

Projects that are long running and which have an evolving data model, will experience extra challenges, because they need to find ways to motivate contributors over time and manage the impacts of its changing scope on its community of contributors and reusers. The community may need new tools to help them contribute. Reusers may be concerned that data they rely on may no longer be collected or maintained, and it is important to respond to these concerns by being transparent about processes and future plans.
