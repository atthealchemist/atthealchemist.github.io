---
layout: page
lang: en
title: Projects
permalink: /en/projects/
---
{% assign projects_i18n = site.data.i18n[page.lang].pages.projects %}
<h3>{{ projects_i18n.title }}</h3>
{% assign github = site.data.github | default: site.data.github_cache %}
{% assign bitbucket = site.data.bitbucket.values | default: site.data.bitbucket_cache.values %}

<h4>Github [{{ github | size }}]</h4>

<div class="project-grid">
    {% for project in github %}
        {% assign url = project.html_url %}
        {% if site.data.project_blacklist contains project.name %}
        {% else %}
            <div class="project flex-column">
                <h4>{{ project.name }}</h4>
                <p>{{ project.description }}</p>
                <a href="{{ url }}">{{ url }}</a>
                <ul>
                    <li>{{ project.language | default: 'Other' | capitalize }}</li>
                </ul>
            </div>
            {% endif %}
    {% endfor %}
</div>

#### Bitbucket [{{ bitbucket | size }}]
##### ({{ projects_i18n.legacy }})

<div class="project-grid">
    {% for project in bitbucket %}
        {% assign url = project.links.html.href %}
        {% if site.data.project_blacklist contains project.name %}
        {% else %}
            <div class="project flex-column">
                <h4>{{ project.name }}</h4>
                <p>{{ project.description | default: 'No project description' }}</p>
                <a href="{{ url }}">{{ url }}</a>
                <ul>
                    <li>{{ project.language | default: 'Other' | capitalize }}</li>
                </ul>
            </div>
            {% endif %}
    {% endfor %}
</div>