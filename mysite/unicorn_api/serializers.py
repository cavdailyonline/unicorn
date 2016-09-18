from rest_framework import serializers

from unicorn.models import Author, Article, Tag, ArticleImage
from django.contrib.auth.models import User


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag


class ArticleImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ArticleImage
