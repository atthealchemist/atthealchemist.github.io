---
permalink: /ru/
layout: home
lang: ru
redirect_from:
    - /
---

{% assign index_i18n = site.data.i18n[page.lang].pages.index %}

<div class="basic-info">
    <p>
        <strong>{{ index_i18n.header.sex }}, {{ index_i18n.header.age }}</strong><br>
        <strong>{{ index_i18n.header.work_experience_label }} - {{ index_i18n.header.work_experience_value }}</strong><br>
        <strong>{% if site.ready_for_relocation %} {{ index_i18n.header.ready }} {% else %} {{ index_i18n.header.not_ready }} {% endif %} {{ index_i18n.header.ready_for_relocation }}</strong>
    </p>
</div>

### {{ index_i18n.content.about_me }}
{% assign about_me = site.data.about.about[page.lang] %}
{% for criteria in about_me.criteria %}

<div class="criteria">
    <h4>{{ criteria.title }}</h4>
    <ul>
        {% for item in criteria.items %}
            <li>{{ item }} </li>
        {% endfor %}
    </ul>
</div>

{% endfor %}

### {{ index_i18n.content.my_jobs }}
{% for place in site.data.jobs.jobs[page.lang] %}

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

### {{ index_i18n.content.education.title }}
{% for place in site.data.education.education[page.lang] %}
<div class="education">
    <h4>
        <strong>{{ place.title }}</strong>, {{ place.city }} - 
        <em>{{ place.specialization }}</em> - <em>{{ place.degree }}</em>
    </h4>
    <p>{{ place.period.from }} - {{ place.period.to }}</p>
    {% assign techs = place.graduation_project.technologies | join: ', ' %}
    <p><strong>{{ index_i18n.content.education.graduation_project }}</strong> - {{ place.graduation_project.description }} ({{ techs }})
</p>
</div>
{% endfor %}

### {{ index_i18n.content.repositories.title }}
{% for repo in site.data.repositories %}
{% assign repo_description = repo.description[page.lang] %}
<div class="repository">
    <h4>{{ repo.title }} - <a href="{{ repo.url }}">{{ repo.url }}</a></h4>
    <span>{{ repo_description }}</span>
</div>
{% endfor %}