---
layout: page
title: Projects
permalink: /projects/
---

### My Projects

<div style="display: flex;">
    {% for project in site.data.projects_en %}
    <div class="project flex-column">
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
        <a href="{{ project.url }}">{{ project.url }}</a>
        <ul>
            {% for tech in project.technologies %}
                <li>{{ tech }}</li>
            {% endfor %}
        </ul>
    </div>
    {% endfor %}
</div>

