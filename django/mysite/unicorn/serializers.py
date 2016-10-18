from rest_framework import serializers
from .models import Author, Article, Tag, ArticleImage


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag


class ArticleSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Article


class ArticleImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ArticleImage
