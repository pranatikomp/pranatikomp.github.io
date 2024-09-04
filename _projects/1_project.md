---
layout: page
title: The Teenage "Bedroom"
description: Space, identity, and negotiations.
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
#custom style for this project
css: bedroom.css
---

This work is a deep dive into the intimate space of adolescents' bedrooms. It identifies distinct forms of expression and negotiation that occur in the bedroom space. The notion of a "bedroom" is expanded beyond a physical space. Any social, personal, or virtual space that a teen might appropriate to make their own is a "bedroom". 

Completed as part of the Space Design course in IIT Hyderabad. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-2.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-4.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-7.jpg" class="img-fluid rounded z-depth-1" %}
    </div>    
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-18.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-3.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-5.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-6.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-8.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-9.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-10.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-11.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-12.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-13.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-14.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-15.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-16.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-19.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-17.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/space design/A4-20.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
