---
layout: page
title: Projects
permalink: /projects/
---

### My Projects

<div style="display: flex;">
    {% for project in site.data.github %}
    <div class="project flex-column">
        <img src="https://lorempixel.com/200/200" alt="Project image"/>
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <a href="{{ project.html_url }}">{{ project.html_url }}</a>
        <ul>
            <li>{{ project.language }}</li>
        </ul>
    </div>
    {% endfor %}
</div>

