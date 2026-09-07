---
layout: page
title: "Publications"
kicker: "Selected research"
description: "Peer-reviewed work spanning optical fiber geophysics, glacier and ice-shelf mechanics, environmental seismology, and Earth hazards."
permalink: /publications/
wide: true
---
<div class="intro-grid">
  <p class="intro-grid__lead">The publication record connects field experiments and dense fiber-optic observations with mechanics, turning unfamiliar signals into direct tests of fracture, friction, deformation, and failure.</p>
  <aside class="intro-grid__aside">
    <p>This page highlights recent and foundational papers. The complete, current record is available through <a href="https://scholar.google.com/citations?user=QLRsDhMAAAAJ&hl=en">Google Scholar</a>, <a href="https://orcid.org/0000-0003-4940-0745">ORCID</a>, and the <a href="{{ '/files/cv.pdf' | relative_url }}">full CV</a>. Asterisks in the CV identify mentees.</p>
  </aside>
</div>

<div class="publication-archive">
{% assign publication_year = "" %}
{% for publication in site.data.publications %}
{% capture current_year %}{{ publication.year }}{% endcapture %}
{% if current_year != publication_year %}
{% unless forloop.first %}</div></section>{% endunless %}
<section class="pub-year">
<h2>{{ publication.year }}</h2>
<div>
{% assign publication_year = current_year %}
{% endif %}
<article class="pub-card">
<div>
<h3>{{ publication.title }}</h3>
<p class="pub-card__authors">{{ publication.authors }}</p>
<p class="pub-card__venue">{{ publication.venue }}</p>
{% if publication.note %}<p>{{ publication.note }}</p>{% endif %}
</div>
<a class="text-link pub-card__link" href="{{ publication.url }}">Open paper</a>
</article>
{% if forloop.last %}</div></section>{% endif %}
{% endfor %}
</div>

<div class="callout">
  <p class="eyebrow eyebrow--light">Complete record</p>
  <h2>Approximately forty papers published or under review—about thirty from the UW period.</h2>
  <p>The selected work includes contributions to <em>Nature</em> and <em>Science</em>. The CV provides the complete record through September 2026, including submitted manuscripts, presentations, contribution statements, grants, mentoring, teaching, and service; Google Scholar and ORCID provide continuously updated publication indexes.</p>
  <div class="button-row">
    <a class="button button--light" href="{{ '/files/cv.pdf' | relative_url }}">Download the CV</a>
    <a class="button" href="https://scholar.google.com/citations?user=QLRsDhMAAAAJ&hl=en">Google Scholar</a>
  </div>
</div>
