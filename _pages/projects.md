---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
nav_order: 2
display_categories: 
  - "hci, user research, human behaviour"
  - "illustrations, branding"
horizontal: false
---
Hi! Welcome to my portfolio. Below is an assortment of diverse design projects I've completed over the years. My design process is rooted in curiosity and collaboration. I've learnt that embracing unexpected ideas - a recurring theme in a few of my projects - helps me execute my projects in the best way. Go ahead and take a look at some of my work. 

<!-- 
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
{% for category_group in page.display_categories %}
  <div class="category-group">
    {% for category in category_group %}
      <h2 class="category">{{ category }}</h2>
      {% assign categorized_projects = site.projects | where_exp: "project", "project.category contains category" %}
      
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>
{% endfor %}


{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
 