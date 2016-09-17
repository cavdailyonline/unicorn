from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Author(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    headshot = models.ImageField(upload_to='headshots', blank=True, null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    bio = models.CharField(max_length=140)
    academic_year = models.IntegerField()
    school = models.CharField(max_length=40)

    def __str__(self):
        return '{first} {last}'.format(
            first=self.first_name, last=self.last_name)

    class Meta:
        ordering = ('last_name',)


class Tag(models.Model):
    text = models.SlugField(max_length=32, unique=True)
    description = models.CharField(max_length=140, default="")

    def __str__(self):
        return '{text}'.format(
            text=self.text)

    class Meta:
        ordering = ('text',)


class ArticleImage(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=140)
    image = models.ImageField(upload_to='images')


class Article(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    headline = models.CharField(max_length=100)
    abstract = models.TextField(max_length=100)
    authors = models.ManyToManyField(Author, related_name='articles')
    copy = models.TextField(max_length=300)
    slug = models.SlugField(unique=True)
    status = models.CharField(max_length=15)
    tags = models.ManyToManyField(Tag, related_name='articles')
    images = models.ManyToManyField(ArticleImage, blank=True)

    class Meta:
        ordering = ('created',)
