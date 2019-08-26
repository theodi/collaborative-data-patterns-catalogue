---
# The Page Title
title: Home title
# Use the home layout
layout: home

# The Hero contents
hero:
  nav:
    # Nav meta title
    meta: Starting
    # Nav title
    title: Introduction to Open Standards
    # Nav description (optional)
    description: >-
      Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    # Nav items - can be any of:
    #  - a path to a html or md file (.md suffix optional)
    #  - a custom item with title: (required), url: (required)
    #  and description: (optional) keys
    items:
      - introduction/what-are-open-standards-for-data
      - introduction/types-of-open-standards-for-data
      - introduction/when-to-use-open-standards-for-data


# The section listing in the content area
sections:
  items:
  # The type of grid output we want for this section
  - type: grid # full, grid, short
    # Section meta title
    meta: Process
    # Section title
    title: Creating Open Standards
    # Optionally set the title size to small
    title_size: small
    # Section description
    description: >-
      Short description nulla eu molestie massa. Pellentesque fermentum
      urna pretium nulla lacinia gravida. Aenean in aliquet mauris. Short
      description nulla eu molestie massa. Pellentesque fermentum
      urna pretium nulla lacinia gravida. Aenean in aliquet mauris.
    # Nav items in this section, that autopull url / description from target content
    items:
      - creating-open-standards/getting-started
      - creating-open-standards/developing-standards/index
      - creating-open-standards/managing-change/index
  - type: grid # full, grid, short
    meta: Groups
    title: Open Standards and you
    description: >-
      Short description nulla eu molestie massa. Pellentesque fermentum
      urna pretium nulla lacinia gravida. Aenean in aliquet mauris. Short
      description nulla eu molestie massa. Pellentesque fermentum
      urna pretium nulla lacinia gravida. Aenean in aliquet mauris.
    # Nav items in this section, that are manually defined
    items:
      # Item title
      - title: Organisations developing standards
        # Item URL
        url: '#'
        # Item description
        description: >-
          Short description nulla eu molestie massa. Pellentesque fermentum urna pretium nulla lacinia gravida. Aenean in aliquet mauris.
      - title: Policy specialists
        url: '#'
        description: >-
          Short description nulla eu molestie massa. Pellentesque fermentum urna pretium nulla lacinia gravida. Aenean in aliquet mauris.
      - title: Domain experts
        url: '#'
        description: >-
         Short description nulla eu molestie massa. Pellentesque fermentum urna pretium nulla lacinia gravida. Aenean in aliquet mauris.
      - title: Data publishers and consumers
        url: '#'
        description: >-
         Short description nulla eu molestie massa. Pellentesque fermentum urna pretium nulla lacinia gravida. Aenean in aliquet mauris.

# Optional footer link blocks, should be a maximum of 3 items
footer:
  items:
    - url: patterns/index
      button_text: Browse patterns
      title: Tempor tincidunt leo
      description: Nullam condimentum massa a est volutpat gravida. Donec hendrerit orci arcu, eu fermentum arcu malesuada nec.
    - url: /contribute/
      button_text: Contribute
      title: Vulputate euismod elit inceptos
      description: Phasellus condimentum, dolor pellentesque elementum gravida, nulla lorem ullamcorper felis, quis sodales nibh tellus a magna.
---
