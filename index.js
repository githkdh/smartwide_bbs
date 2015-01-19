---
---

var post_index = {
    "posts": [
      null
      {% for post in site.posts %}
        ,{
            "title"    : "{{ post.title }}",
            "href"     : "{{ post.url }}",
            "date"     : {
                "day"   : "{{ post.date | date: "%d" }}",
                "month" : "{{ post.date | date: "%B" }}",
                "year"  : "{{ post.date | date: "%Y" }}"
            }
        }
      {% endfor %}
    ]
};
