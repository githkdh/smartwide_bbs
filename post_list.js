---
---

var post_list_text = '{
    "posts": [
      null
      {% for post in site.posts %}
        ,{% include post.json %}
      {% endfor %}
    ]
}';

post_list_text = post_list_text.replace(/¥n/g, ''); 

var post_list = JSON.parse(post_list_text; 
