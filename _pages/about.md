---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher | Computational Fluid Dynamics | Nuclear Thermal Hydraulics

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

<div class="lead-text">
I am a postdoctoral researcher at the <a href="https://www.psi.ch/en/lsm">Laboratory for Simulation and Modelling</a>, Paul Scherrer Institute, Switzerland, specializing in computational fluid dynamics and nuclear thermal hydraulics. My research focuses on numerical simulations of multiphase flows, particularly Taylor bubble dynamics in counter-current turbulent flows and boiling phenomena.
</div>

<div class="quick-stats">
  <div class="stat-item">
    <span class="stat-number">7+</span>
    <span class="stat-label">Publications</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">4</span>
    <span class="stat-label">Awards</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">5+</span>
    <span class="stat-label">Years Experience</span>
  </div>
</div>

## <i class="fas fa-microscope"></i> Research Expertise

<p class="section-intro">My work combines computational methods with experimental validation to understand complex fluid dynamics phenomena. I specialize in:</p>

<div class="expertise-grid">
  <div class="expertise-item">
    <i class="fas fa-wind"></i>
    <h4>Turbulence Modeling</h4>
    <p>Large Eddy Simulation (LES) and Direct Numerical Simulation (DNS) using OpenFOAM and T-Flows</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-water"></i>
    <h4>Multiphase Flows</h4>
    <p>Volume-of-Fluid (VOF) and interface tracking methods for complex two-phase systems</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-circle-notch"></i>
    <h4>Taylor Bubble Dynamics</h4>
    <p>Specialized expertise in vertical counter-current flow phenomena and bubble breakup</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-temperature-high"></i>
    <h4>Phase Change</h4>
    <p>Boiling and condensation phenomena in nuclear thermal hydraulics applications</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-atom"></i>
    <h4>Nuclear Safety</h4>
    <p>Turbulent heat transfer and conjugate heat transfer in reactor geometries</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-server"></i>
    <h4>HPC</h4>
    <p>High-performance computing for large-scale thermal hydraulics simulations</p>
  </div>
</div>

## <i class="fas fa-trophy"></i> Key Contributions

<div class="contribution-card">
  <h3><i class="fas fa-flask"></i> Taylor Bubble Research</h3>
  <p>My doctoral research provided groundbreaking insights into Taylor bubble behavior in counter-current flows. I developed numerical methods that revealed:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Asymmetric bubble shapes</span> in fully turbulent flow vs. axisymmetric forms in transitional flow</li>
    <li><span class="highlight">Secondary vortex formation</span> in turbulent wake regions - a novel discovery</li>
    <li><span class="highlight">Interface wave dynamics</span> with amplitudes of 10-100 μm using high-sensitivity tracking algorithms</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-code"></i> Computational Methods Development</h3>
  <p>I have contributed to advancing numerical simulation techniques, including:</p>
  <ul class="achievement-list">
    <li>Implementation of <span class="highlight">high-order Runge-Kutta time integration</span> schemes in OpenFOAM</li>
    <li>Development of <span class="highlight">geometric interface reconstruction</span> methods for bubble tracking</li>
    <li>Comparative analysis of <span class="highlight">algebraic vs. geometric capturing techniques</span> for interface dynamics</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-radiation"></i> Nuclear Thermal Hydraulics</h3>
  <p>My work directly supports nuclear reactor safety analysis through:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Temperature fluctuation studies</span> in heated foil configurations</li>
    <li><span class="highlight">Boiling and phase-change modeling</span> for reactor thermal analysis</li>
    <li><span class="highlight">Rod bundle flow simulations</span> for advanced reactor designs</li>
    <li><span class="highlight">Conjugate heat transfer</span> modeling with experimental validation</li>
  </ul>
</div>

## <i class="fas fa-chart-line"></i> Recent Impact

<div class="impact-section">
  <div class="impact-highlight">
    <i class="fas fa-newspaper"></i>
    <p>My 2024 publications in <em>Physics of Fluids</em> and <em>International Journal of Heat and Fluid Flow</em> present advances in multiphase flow simulation. The work introduces computational approaches that bridge experimental observations with theoretical predictions.</p>
  </div>
  <div class="current-focus">
    <h4><i class="fas fa-bullseye"></i> Current Focus</h4>
    <p>Currently, I am exploring boiling simulations from first principles using novel VOF and other numerical methods, with the end goal of accurate simulations for nuclear industry applications.</p>
  </div>
</div>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down"></i></span>
</div>

<section id="publications" class="main-section">

## <i class="fas fa-book"></i> Publications

{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

</section>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down"></i></span>
</div>

<section id="cv" class="main-section">

## <i class="fas fa-file-alt"></i> Curriculum Vitae

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
<div class="skills-container">
{% for skill in site.data.resume.skills %}
  <div class="skill-category">
    <h4><i class="fas fa-tools"></i> {{ skill.category }}</h4>
    <div class="skill-tags">
      {% for keyword in skill.keywords %}
        <span class="skill-tag">{{ keyword }}</span>
      {% endfor %}
    </div>
  </div>
{% endfor %}
</div>

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
