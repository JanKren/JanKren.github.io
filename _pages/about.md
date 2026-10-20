---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher | Computational Fluid Dynamics | Nuclear Thermal Hydraulics

profile:
  align: right
  image: prof_pic.jpg
  alt: Portrait of Jan Kren
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

{% comment %} Counted from papers.bib and resume.json at build time; submitted manuscripts are excluded. {% endcomment %}

<div class="quick-stats">
  <a class="stat-item" href="#publications">
    <span class="stat-number">{% bibliography_count --query @*[status!=submitted] %}</span>
    <span class="stat-label">Publications</span>
  </a>
  <a class="stat-item" href="#publications">
    <span class="stat-number">{% bibliography_count --query @article[journal,status!=submitted] %}</span>
    <span class="stat-label">Journal Articles</span>
  </a>
  <a class="stat-item" href="#cv">
    <span class="stat-number">{{ site.data.resume.awards | size }}</span>
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

<div class="impact-section">
  <div class="current-focus">
    <h4><i class="fas fa-bullseye" aria-hidden="true"></i> Current Focus</h4>
    <p>I am developing first-principles boiling simulations with sharp-interface VOF methods on unstructured meshes, aimed at accurate predictions for nuclear industry applications.</p>
  </div>
  <div class="collaboration-note">
    <h4><i class="fas fa-handshake" aria-hidden="true"></i> Open for Collaboration</h4>
    <p>I am actively seeking collaboration opportunities in computational fluid dynamics, multiphase flow modeling, and nuclear thermal hydraulics. Feel free to <a href="mailto:{{ site.data.socials.email | encode_email }}">get in touch</a> to discuss potential research partnerships or joint projects.</p>
  </div>
</div>

</section>

<section class="content-section">

<h2><i class="fas fa-trophy" aria-hidden="true"></i> Key Contributions</h2>

<div class="contribution-card">
  <h3><i class="fas fa-flask" aria-hidden="true"></i> Taylor Bubble Research</h3>
  <p>My doctoral research combined experiments and simulations of Taylor bubbles held stationary in counter-current flow. Its main findings:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Asymmetric, bullet-train-shaped bubbles</span> in fully turbulent flow (Re = 5600), but axisymmetric bubbles in transitional flow (Re = 1400)</li>
    <li>A <span class="highlight">secondary vortex</span> in the turbulent wake behind the bubble, most pronounced at fine mesh resolution</li>
    <li><span class="highlight">Disturbance waves on the interface</span> with amplitudes of 10–100 μm, resolved with dedicated interface-tracking algorithms</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-code" aria-hidden="true"></i> Computational Methods Development</h3>
  <p>Methods I have implemented or evaluated:</p>
  <ul class="achievement-list">
    <li><span class="highlight">High-order Runge–Kutta time integration</span> for VOF simulations in OpenFOAM</li>
    <li><span class="highlight">Geometric (PLIC) interface reconstruction</span> for bubble tracking</li>
    <li>Comparison of <span class="highlight">algebraic and geometric interface capturing</span> for bubble breakup</li>
    <li>A <span class="highlight">sharp-interface VOF phase-change method</span> for arbitrary polyhedral meshes (submitted)</li>
  </ul>
</div>

<div class="contribution-card">
  <h3><i class="fas fa-radiation" aria-hidden="true"></i> Nuclear Thermal Hydraulics</h3>
  <p>Applications to reactor thermal hydraulics and safety:</p>
  <ul class="achievement-list">
    <li><span class="highlight">Temperature fluctuations</span> at heated-foil boundaries in turbulent duct flow</li>
    <li><span class="highlight">Boiling and phase-change modeling</span> for reactor thermal analysis</li>
    <li><span class="highlight">Boiling flow in fuel rod bundles</span> (BRAVA project)</li>
    <li><span class="highlight">Conjugate heat transfer</span> modeling with experimental validation</li>
  </ul>
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
{% capture submitted_count %}{% bibliography_count --query @*[status=submitted] %}{% endcapture %}
{% if submitted_count != '0' %}
<h2 class="bibliography">Submitted</h2>
{% bibliography --query @*[status=submitted] --group_by none %}
{% endif %}
{% bibliography --query @*[status!=submitted] %}
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

{% capture cv_pdf_exists %}{% file_exists assets/pdf/Jan_Kren_CV.pdf %}{% endcapture %}
{% if cv_pdf_exists == 'true' %}

<p class="cv-download"><a class="btn btn-sm z-depth-0" href="{{ '/assets/pdf/Jan_Kren_CV.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i> Download CV (PDF)</a></p>
{% endif %}

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
