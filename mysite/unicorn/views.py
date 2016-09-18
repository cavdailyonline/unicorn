from .models import Article, Author, Tag
from django.views.generic import ListView, DetailView


class ArticleList(ListView):
    model = Article
    context_object_name = 'article_list'


class ArticleDetail(DetailView):
    model = Article


class AuthorList(ListView):
    model = Author
    context_object_name = 'author_list'


class AuthorDetail(DetailView):
    model = Author


class TagList(ListView):
    model = Tag
    context_object_name = 'tag_list'


class TagDetail(DetailView):
    model = Tag
