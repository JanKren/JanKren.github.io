---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
# set how you want cards laid out
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">

  {%- comment -%}
  We group projects by a `status` front matter key:
    status: Ongoing | Finished | Future
  {%- endcomment -%}

  {%- assign statuses = "Ongoing|Finished|Future" | split:"|" -%}

  {%- for status in statuses -%}
    {%- assign grouped = site.projects | where_exp: "p", "p.status == status" -%}
    {%- if grouped and grouped.size > 0 -%}

      <a id="{{ status | downcase }}" href=".#{{ status | downcase }}">
        <h2 class="category">{{ status }}</h2>
      </a>

      {%- assign sorted_projects = grouped | sort: "importance" -%}

      {%- if page.horizontal -%}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {%- for project in sorted_projects -%}
            {%- include projects_horizontal.liquid -%}
          {%- endfor -%}
        </div>
      </div>
      {%- else -%}
      <div class="row row-cols-1 row-cols-md-3">
        {%- for project in sorted_projects -%}
          {%- include projects.liquid -%}
        {%- endfor -%}
      </div>
      {%- endif -%}

    {%- endif -%}
  {%- endfor -%}

</div>
