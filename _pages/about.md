---
layout: about
title: about
permalink: /
subtitle: <a href='#'>Affiliations</a>. Postdoctoral researcher at CFD group, LSM, Paul Scherrer Institute, Switzerland.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>OHSA/D03 PSI EAST</p>
    <p>Paul Scherrer Institute</p>
    <p>Villigen, Switzerland</p>

selected_papers: false # will be included in publications section below
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a postdoctoral researcher at the [Laboratory for Simulation and Modelling](https://www.psi.ch/en/lsm), Paul Scherrer Institute, Switzerland, specializing in computational fluid dynamics and nuclear thermal hydraulics. My research focuses on numerical simulations of multiphase flows, particularly Taylor bubble dynamics in counter-current turbulent flows and boiling phenomena.

## Research Expertise

My work combines computational methods with experimental validation to understand complex fluid dynamics phenomena. I specialize in:

- **Large Eddy Simulation (LES)** and **Direct Numerical Simulation (DNS)** using OpenFOAM and T-Flows
- **Multiphase flow modeling** with Volume-of-Fluid (VOF) and interface tracking methods
- **Taylor bubble dynamics** in vertical counter-current flows
- **Boiling and phase-change phenomena** in two-phase flows
- **Turbulent heat transfer** in nuclear reactor geometries
- **High-performance computing** for thermal hydraulics applications

## Key Contributions

### Taylor Bubble Research
My doctoral research provided new insights into Taylor bubble behavior in counter-current flows. I developed numerical methods that revealed:
- **Asymmetric bubble shapes** in fully turbulent flow vs. axisymmetric forms in transitional flow
- **Secondary vortex formation** in turbulent wake regions
- **Interface wave dynamics** with amplitudes of 10-100 μm using high-sensitivity tracking algorithms

### Computational Methods Development
I have contributed to advancing numerical simulation techniques, including:
- Implementation of **high-order Runge-Kutta time integration** schemes in OpenFOAM
- Development of **geometric interface reconstruction** methods for bubble tracking
- Comparative analysis of **algebraic vs. geometric capturing techniques** for interface dynamics

### Nuclear Thermal Hydraulics
My work supports nuclear reactor safety analysis through:
- **Temperature fluctuation studies** in heated foil configurations
- **Boiling and phase-change modeling** for reactor thermal analysis
- **Rod bundle flow simulations** for reactor designs
- **Conjugate heat transfer** modeling with experimental validation

## Recent Impact

My 2024 publications in *Physics of Fluids* and *International Journal of Heat and Fluid Flow* present advances in multiphase flow simulation. The work introduces computational approaches that bridge experimental observations with theoretical predictions.

Currently, I am exploring boiling simulations from first principles using novel VOF and other numerical methods, with the end goal of accurate simulations for nuclear industry applications.

---

<section id="publications">

## Publications

{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

</section>

---

<section id="projects">

## Projects

<div class="projects">

{%- assign statuses = "Ongoing|Finished|Future" | split:"|" -%}

{%- for status in statuses -%}
  {%- assign grouped = site.projects | where_exp: "p", "p.status == status" -%}
  {%- if grouped and grouped.size > 0 -%}

    <a id="{{ status | downcase }}" href=".#{{ status | downcase }}">
      <h3 class="category">{{ status }}</h3>
    </a>

    {%- assign sorted_projects = grouped | sort: "importance" -%}

    <div class="row row-cols-1 row-cols-md-3">
      {%- for project in sorted_projects -%}
        {%- include projects.liquid -%}
      {%- endfor -%}
    </div>

  {%- endif -%}
{%- endfor -%}

</div>

</section>

---

<section id="cv">

## Curriculum Vitae

<div class="cv">

### Education
<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% for education in site.data.resume.education %}
      <tr>
        <th scope="row">{{ education.startDate }} – {{ education.endDate }}</th>
        <td>
          <strong>{{ education.degree }}</strong>
          <br />
          {{ education.institution }}
          {% if education.thesis %}
            <div class="text-muted"><small>Thesis: {{ education.thesis }}</small></div>
          {% endif %}
          {% if education.supervisor %}
            <div class="text-muted"><small>Supervisor: {{ education.supervisor }}</small></div>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

### Work Experience
<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% for work in site.data.resume.work %}
      <tr>
        <th scope="row">{{ work.startDate }}{% if work.endDate != 'present' %} – {{ work.endDate }}{% else %} – present{% endif %}</th>
        <td>
          <strong>{{ work.position }}</strong>
          <br />
          {{ work.employer }}
          {% if work.address %}
            <div class="text-muted"><small>{{ work.address }}</small></div>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

### Skills
{% for skill in site.data.resume.skills %}
  <div class="mb-3">
    <strong>{{ skill.category }}:</strong>
    <span>{{ skill.keywords | join: ', ' }}</span>
  </div>
{% endfor %}

### Awards & Recognition
<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% for award in site.data.resume.awards %}
      <tr>
        <th scope="row">{{ award.year }}</th>
        <td>
          <strong>{{ award.title }}</strong>
          {% if award.awarder %}
            <br />
            <span class="text-muted">{{ award.awarder }}</span>
          {% endif %}
          {% if award.location %}
            <br />
            <span class="text-muted">{{ award.location }}</span>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

### Research Courses
<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% for course in site.data.resume.researchCourses %}
      <tr>
        <th scope="row">{{ course.date }}</th>
        <td>
          <strong>{{ course.course }}</strong>
          <br />
          {% if course.institution %}{{ course.institution }}{% endif %}
          {% if course.institutions %}{{ course.institutions | join: ', ' }}{% endif %}
          <div class="text-muted"><small>{{ course.location }}</small></div>
          {% if course.supervisor %}
            <div class="text-muted"><small>Supervisor: {{ course.supervisor }}</small></div>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

</div>

</section>
