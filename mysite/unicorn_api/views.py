from rest_framework import viewsets
from rest_framework import filters
from unicorn.models import Author, Article, Tag, ArticleImage
from .serializers import (AuthorSerializer,
                          ArticleSerializer, TagSerializer,
                          ArticleImageSerializer)


class AuthorViewSet(viewsets.ModelViewSet):

    """ Author Resource """

    resource_name = 'authros'
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    filter_backends = (
        filters.SearchFilter,
        filters.DjangoFilterBackend,)
    filter_fields = ('id',)


class ArticleViewSet(viewsets.ModelViewSet):

    """ Author Resource """

    resource_name = 'articles'
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (
        filters.SearchFilter,
        filters.DjangoFilterBackend,)
    filter_fields = ('id',)


class TagViewSet(viewsets.ModelViewSet):

    """ Author Resource """

    resource_name = 'tags'
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    filter_backends = (
        filters.SearchFilter,
        filters.DjangoFilterBackend,)
    filter_fields = ('id',)


class ArticleImageViewSet(viewsets.ModelViewSet):

    """ Author Resource """

    resource_name = 'article_images'
    queryset = ArticleImage.objects.all()
    serializer_class = ArticleImageSerializer
    filter_backends = (
        filters.SearchFilter,
        filters.DjangoFilterBackend,)
    filter_fields = ('id',)
