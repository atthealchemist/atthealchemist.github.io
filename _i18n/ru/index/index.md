<div class="basic-info">
    <p>
        <strong>{% t pages.index.header.sex %}, {% t pages.index.header.age %}</strong><br>
        <strong>{% t pages.index.header.work_experience_label %} - {% t pages.index.header.work_experience_value %}</strong><br>
        <strong>{% if site.ready_for_relocation %} {% t pages.index.header.ready %} {% else %} {% t pages.index.header.not_ready %} {% endif %} {% t pages.index.header.ready_for_relocation %}</strong>
    </p>
</div>

### {% t pages.index.content.about_me %}
{% assign about_me = site.data.about.about[site.lang] %}
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

### {% t pages.index.content.my_jobs %}
{% for place in site.data.jobs.jobs[site.lang] %}

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

### {% t pages.index.content.education.title %}
{% for place in site.data.education.education[site.lang] %}
<div class="education">
    <h4>
        <strong>{{ place.title }}</strong>, {{ place.city }} - 
        <em>{{ place.specialization }}</em> - <em>{{ place.degree }}</em>
    </h4>
    <p>{{ place.period.from }} - {{ place.period.to }}</p>
    {% assign techs = place.graduation_project.technologies | join: ', ' %}
    <p><strong>{% t pages.index.content.education.graduation_project %}</strong> - {{ place.graduation_project.description }} ({{ techs }})
</p>
</div>
{% endfor %}

### {% t pages.index.content.repositories.title %}
{% for repo in site.data.repositories %}
<div class="repository">
    <h4>{{ repo.title }} - <a href="{{ repo.url }}">{{ repo.url }}</a></h4>
    <span>{% t repo.description %}</span>
</div>
{% endfor %}