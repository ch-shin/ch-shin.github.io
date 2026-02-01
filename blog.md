---
layout: default
title: Blog
permalink: /blog/
description: Notes, updates, and longer-form writing.
---

<div class="post-list">
  {% if site.posts and site.posts.size > 0 %}
    {% for post in site.posts %}
      <article class="post-card">
        <div class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</div>
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        {% if post.excerpt %}
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        {% endif %}
        <a class="post-read" href="{{ post.url | relative_url }}">Read more</a>
      </article>
    {% endfor %}
  {% else %}
    <p class="muted">No posts yet. Check back soon.</p>
  {% endif %}
</div>
