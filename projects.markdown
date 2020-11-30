---
layout: page
language: en
title: Projects
permalink: /projects/
---

### My Projects
{% assign github = site.data.github | default: site.data.github_cache %}
{% assign bitbucket = site.data.bitbucket.values | default: site.data.bitbucket_cache.values %}

#### Github [{{ github | size }}]

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
##### (Legacy)

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

