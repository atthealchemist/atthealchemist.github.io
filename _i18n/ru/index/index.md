{% assign index_page = pages.index %}
<div class="basic-info">
    <p>
        <strong>{% t pages.index.header.sex %}, {% t pages.index.header.age %}</strong><br>
        <strong>{% t pages.index.header.work_experience_label %} - {% t pages.index.header.work_experience_value %}</strong><br>
        <strong>{% if site.data.about_ru.ready_for_relocation == 'true' %} {% t pages.index.ready %} {% else %} {% t pages.index.not_ready %} {% endif %} {% t pages.index.ready_for_relocation %}</strong>
    </p>
</div>

### {% t pages.index.content.about_me %}
{% for criteria in site.data.about_ru.criteria %}

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
{% for place in site.data.work_ru %}

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

### {% t pages.index.content.education %}
{% for place in site.data.education_ru %}
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

### {% t pages.index.content.repositories %}
{% for repo in site.data.repos_ru %}
<div class="repository">
    <h4>{{ repo.title }} - <a href="{{ repo.url }}">{{ repo.url }}</a></h4>
    <span>{{ repo.description }}</span>
</div>
{% endfor %}