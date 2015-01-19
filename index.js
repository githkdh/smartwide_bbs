---
layout: json_
---

var bbsData = {
    "posts": [
      null
      {% for post in site.posts %}
        ,{% include post.json %}
      {% endfor %}
    ]
};
