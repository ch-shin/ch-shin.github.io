---
layout: default
title: Blog
description: Notes on research and other things I find interesting.
permalink: /blog/
---

<div class="blog-intro">
  <h1>Blog</h1>
  <p>Notes on research and other things I find interesting.</p>
</div>

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      <div>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% else %}
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
      </div>
    </article>
  {% else %}
    <p>No posts yet.</p>
  {% endfor %}
</div>
