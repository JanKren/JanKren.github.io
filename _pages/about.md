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
  enabled: false # news is rendered inline in the News section below, not appended after the CV
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
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
  <a class="stat-item" href="#publications">
    <span class="stat-number">22</span>
    <span class="stat-label">Publications</span>
  </a>
  <a class="stat-item" href="#publications">
    <span class="stat-number">15</span>
    <span class="stat-label">Journal Articles</span>
  </a>
  <a class="stat-item" href="#cv">
    <span class="stat-number">8</span>
    <span class="stat-label">Awards</span>
  </a>
</div>

<section id="news" class="content-section">

<h2><i class="fas fa-bullhorn" aria-hidden="true"></i> News</h2>

{% include news.liquid limit=true %}

</section>

<section id="research" class="content-section">

<h2><i class="fas fa-microscope" aria-hidden="true"></i> Research Expertise</h2>

<p class="section-intro">My work combines computational methods with experimental validation to understand complex fluid dynamics phenomena. I specialize in:</p>

<div class="expertise-grid">
  <div class="expertise-item">
    <i class="fas fa-wind" aria-hidden="true"></i>
    <h4>Turbulence Modeling</h4>
    <p>Large Eddy Simulation (LES) and Direct Numerical Simulation (DNS) using OpenFOAM and T-Flows</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-water" aria-hidden="true"></i>
    <h4>Multiphase Flows</h4>
    <p>Volume-of-Fluid (VOF) and interface tracking methods for complex two-phase systems</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-circle-notch" aria-hidden="true"></i>
    <h4>Taylor Bubble Dynamics</h4>
    <p>Specialized expertise in vertical counter-current flow phenomena and bubble breakup</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-temperature-high" aria-hidden="true"></i>
    <h4>Phase Change</h4>
    <p>Boiling and condensation phenomena in nuclear thermal hydraulics applications</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-atom" aria-hidden="true"></i>
    <h4>Nuclear Safety</h4>
    <p>Turbulent heat transfer and conjugate heat transfer in reactor geometries</p>
  </div>
  <div class="expertise-item">
    <i class="fas fa-server" aria-hidden="true"></i>
    <h4>HPC</h4>
    <p>High-performance computing for large-scale thermal hydraulics simulations</p>
  </div>
</div>

</section>

<section class="content-section">

<h2><i class="fas fa-trophy" aria-hidden="true"></i> Key Contributions</h2>

<div class="contribution-card">
  <h3><i class="fas fa-flask" aria-hidden="true"></i> Taylor Bubble Research</h3>
  <p>My doctoral research provided groundbreaking insights into Taylor bubble behavior in counter-current flows. I developed numerical methods that revealed:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Asymmetric bubble shapes</span> in fully turbulent flow vs. axisymmetric forms in transitional flow</li>
    <li><span class="highlight">Secondary vortex formation</span> in turbulent wake regions - a novel discovery</li>
    <li><span class="highlight">Interface wave dynamics</span> with amplitudes of 10-100 μm using high-sensitivity tracking algorithms</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-code" aria-hidden="true"></i> Computational Methods Development</h3>
  <p>I have contributed to advancing numerical simulation techniques, including:</p>
  <ul class="achievement-list">
    <li>Implementation of <span class="highlight">high-order Runge-Kutta time integration</span> schemes in OpenFOAM</li>
    <li>Development of <span class="highlight">geometric interface reconstruction</span> methods for bubble tracking</li>
    <li>Comparative analysis of <span class="highlight">algebraic vs. geometric capturing techniques</span> for interface dynamics</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-radiation" aria-hidden="true"></i> Nuclear Thermal Hydraulics</h3>
  <p>My work directly supports nuclear reactor safety analysis through:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Temperature fluctuation studies</span> in heated foil configurations</li>
    <li><span class="highlight">Boiling and phase-change modeling</span> for reactor thermal analysis</li>
    <li><span class="highlight">Rod bundle flow simulations</span> for advanced reactor designs</li>
    <li><span class="highlight">Conjugate heat transfer</span> modeling with experimental validation</li>
  </ul>
</div>

</section>

<section class="content-section">

<h2><i class="fas fa-chart-line" aria-hidden="true"></i> Recent Impact</h2>

<div class="impact-section">
  <div class="impact-highlight">
    <i class="fas fa-newspaper" aria-hidden="true"></i>
    <p>Two manuscripts are currently under review: a sharp-interface VOF method for phase-change simulations on unstructured meshes, submitted to <em>Journal of Computational Physics</em> (<a href="https://arxiv.org/abs/2604.14938" target="_blank" rel="noopener">arXiv:2604.14938</a>), and a decade-long analysis of European wind power data, under review at <em>Nature Communications</em>. Earlier 2025 work in <em>Physics of Fluids</em> identified a previously uncharacterized class of capillary waves on Taylor bubble interfaces.</p>
  </div>
  <div class="current-focus">
    <h4><i class="fas fa-bullseye" aria-hidden="true"></i> Current Focus</h4>
    <p>Currently, I am exploring boiling simulations from first principles using novel VOF and other numerical methods, with the end goal of accurate simulations for nuclear industry applications.</p>
  </div>
  <div class="collaboration-note">
    <h4><i class="fas fa-handshake" aria-hidden="true"></i> Open for Collaboration</h4>
    <p>I am actively seeking collaboration opportunities in computational fluid dynamics, multiphase flow modeling, and nuclear thermal hydraulics. Feel free to <a href="mailto:{{ site.data.socials.email | encode_email }}">get in touch</a> to discuss potential research partnerships or joint projects.</p>
  </div>
</div>

</section>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>
</div>

<section id="projects" class="main-section">

<h2><i class="fas fa-diagram-project" aria-hidden="true"></i> Research Projects</h2>

<p class="section-intro">Selected research projects, past and ongoing. Each links to a longer write-up.</p>

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2">
    {% assign sorted_projects = site.projects | sort: 'importance' %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

</section>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>
</div>

<section id="publications" class="main-section">

<h2><i class="fas fa-book" aria-hidden="true"></i> Publications</h2>

{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

</section>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>
</div>

<section id="teaching" class="main-section">

<h2><i class="fas fa-graduation-cap" aria-hidden="true"></i> Teaching & Supervision</h2>

<div class="teaching-section">
  <div class="supervision-opportunity">
    <h3><i class="fas fa-users" aria-hidden="true"></i> Open for Student Supervision</h3>
    <p>I am available to co-supervise motivated students at various levels. If you're interested in computational fluid dynamics and multiphase flow research, please reach out to discuss potential projects.</p>

    <div class="supervision-grid">
      <div class="supervision-card">
        <h4><i class="fas fa-user-graduate" aria-hidden="true"></i> Semester Projects</h4>
        <p>Short-term research projects focusing on specific aspects of multiphase flow simulations or data analysis.</p>
      </div>

      <div class="supervision-card">
        <h4><i class="fas fa-book" aria-hidden="true"></i> BSc Thesis</h4>
        <p>Bachelor thesis projects introducing students to computational methods in fluid dynamics and basic multiphase flow phenomena.</p>
      </div>

      <div class="supervision-card">
        <h4><i class="fas fa-microscope" aria-hidden="true"></i> MSc Thesis</h4>
        <p>Master thesis projects involving advanced numerical simulations and in-depth analysis of complex flow phenomena.</p>
      </div>
    </div>

  </div>
</div>

</section>

<div class="section-divider">
  <span class="divider-icon"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>
</div>

<section id="cv" class="main-section">

<h2><i class="fas fa-file-alt" aria-hidden="true"></i> Curriculum Vitae</h2>

<div class="cv">

<h3><i class="fas fa-university" aria-hidden="true"></i> Education</h3>
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
          {% if education.seminar %}
            <div class="text-muted"><small>Seminar: {{ education.seminar }}</small></div>
          {% endif %}
          {% if education.supervisor %}
            <div class="text-muted"><small>Supervisor: {{ education.supervisor }}</small></div>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

<h3><i class="fas fa-briefcase" aria-hidden="true"></i> Work Experience</h3>
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

<h3><i class="fas fa-cogs" aria-hidden="true"></i> Skills</h3>
<div class="skills-container">
{% for skill in site.data.resume.skills %}
  <div class="skill-category">
    <h4><i class="fas fa-tools" aria-hidden="true"></i> {{ skill.category }}</h4>
    <div class="skill-tags">
      {% for keyword in skill.keywords %}
        <span class="skill-tag">{{ keyword }}</span>
      {% endfor %}
    </div>
  </div>
{% endfor %}
</div>

<h3><i class="fas fa-trophy" aria-hidden="true"></i> Awards & Recognition</h3>
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

<h3><i class="fas fa-graduation-cap" aria-hidden="true"></i> Research Courses & Training</h3>
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
