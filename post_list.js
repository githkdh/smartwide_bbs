---
---

var post_list = {
    "posts": [
      null
      {% for post in site.posts %}
        ,{% include post.json %}
      {% endfor %}
    ]
};
