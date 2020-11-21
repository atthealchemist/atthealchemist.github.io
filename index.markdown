---
layout: home
language: en
title: Konev Alexey Sergeevich
age: 24
experience_in_years: 6
ready_for_relocation: true
---
<div class="basic-info">
    <p>
        <strong>Male, {{ page.age }} y.o.</strong><br>
        <strong>Total IT work experience - {{ page.experience_in_years }} years</strong><br>
        <strong>{% if page.ready_for_relocation %} Ready {% else %} Not ready {% endif %} for relocation, but rather prefer remote work</strong>
    </p>
</div>

### About me
{% for criteria in site.data.about_en %}

<div class="criteria">
    <h4>{{ criteria.title }}</h4>
    <ul>
        {% for item in criteria.items %}
            <li>{{ item }} </li>
        {% endfor %}
    </ul>
</div>

{% endfor %}

### My jobs
{% for place in site.data.work_en %}

<div class="work-place">
    <h4>
        <strong>{{ place.title }}</strong>, {{ place.city }} - 
        <em>{{ place.position }}</em>
    </h4>
    <p>{{ place.period.from }} - {{ place.period.to }}</p>
    <ul>
        {% for task in place.tasks %}
            <li>{{ task }}</li>
        {% endfor %}
    </ul>
</div>

{% endfor %}

### Education
{% for place in site.data.education_en %}
<div class="education">
    <h4>
        <strong>{{ place.title }}</strong>, {{ place.city }} - 
        <em>{{ place.specialization }}</em> - <em>{{ place.degree }}</em>
    </h4>
    <p>{{ place.period.from }} - {{ place.period.to }}</p>
    {% assign techs = place.graduation_project.technologies | join: ', ' %}
    <p><strong>Graduation project</strong> - {{ place.graduation_project.description }} ({{ techs }})
</p>
</div>
{% endfor %}

### Repositories
{% for repo in site.data.repos %}
<div class="repository">
    <p><strong>{{ repo.title }}</strong> - <a href="{{ repo.url }}">{{ repo.url }}</a></p>
    <small>{{ repo.description }}</small>
</div>
{% endfor %}