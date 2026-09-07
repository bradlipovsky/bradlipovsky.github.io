---
layout: page
title: "People"
kicker: "The Lipovsky research group"
description: "Students, postdoctoral researchers, and alumni building new observations and physical understanding across the cryosphere, oceans, and solid Earth."
permalink: /people/
wide: true
---
<div class="intro-grid">
  <p class="intro-grid__lead">The UW FiberLab and Lipovsky group are collaborative communities in which students and postdoctoral researchers build ownership of ambitious scientific ideas.</p>
  <aside class="intro-grid__aside">
    <p>The shared commitments are straightforward: act kindly and professionally; do ethical, reproducible, open work; discuss credit early; provide regular feedback; and pursue ambitious work at a sustainable pace.</p>
  </aside>
</div>

{% for section in site.data.people.current %}
<section class="person-section">
  <div class="person-section__heading">
    <h2>{{ section.group }}</h2>
    <span>{{ section.people | size }} group members</span>
  </div>
  <div class="person-grid">
    {% for person in section.people %}
    <article class="person-card">
      <p class="person-card__role">{{ person.role }}</p>
      <h3>{{ person.name }}</h3>
      <p class="person-card__focus">{{ person.focus }}</p>
      {% if person.links %}
      <ul class="person-card__links" aria-label="Links for {{ person.name }}">
        {% for link in person.links %}<li><a href="{{ link.url }}">{{ link.label }}</a></li>{% endfor %}
      </ul>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</section>
{% endfor %}

<section class="research-section">
  <div class="research-section__title">
    <p>Mentorship</p>
    <h2>Developing independent scientists</h2>
  </div>
  <div class="research-section__body">
    <p>Mentoring combines regular one-on-one guidance with increasing intellectual independence. Projects span physical modeling, field instrumentation, data analysis, writing, and scientific communication, with explicit attention to research ethics, authorship, reproducibility, and career development.</p>
    <p>Former trainees have continued into faculty, postdoctoral, graduate, research, industry, and public-service roles around the world. Alumni are listed with their next known destination where that information is appropriate for a public professional page.</p>
  </div>
</section>

<section class="person-section">
  <div class="person-section__heading">
    <h2>Alumni</h2>
    <span>A growing network across research, industry, and public service</span>
  </div>
  <div class="alumni-list">
    {% for person in site.data.people.alumni %}
    <article class="alumni-item">
      <h3>{% if person.url %}<a href="{{ person.url }}">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</h3>
      <p>{{ person.period }}{% if person.focus %} · {{ person.focus }}{% endif %}{% if person.destination %}<br>{{ person.destination }}{% endif %}</p>
    </article>
    {% endfor %}
  </div>
</section>

<div class="callout">
  <p class="eyebrow eyebrow--light">Join the group</p>
  <h2>Bring a hard question and make the project your own.</h2>
  <p>Prospective students and postdoctoral scholars can learn about research fit, group expectations, and advertised positions on the opportunities page.</p>
  <div class="button-row">
    <a class="button button--light" href="{{ '/opportunities/' | relative_url }}">View opportunities</a>
    <a class="button" href="https://github.com/bradlipovsky/group-vision/blob/main/group-vision.md">Read the full group vision</a>
  </div>
</div>
