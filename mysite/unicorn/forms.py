from django import forms
from .models import Article, Author, Tag
from django.forms.formsets import BaseFormSet


class ArticleForm(forms.ModelForm):

    class Meta:
        model = Article


class AuthorForm(forms.ModelForm):

    class Meta:
        model = Author
        fields = ('first_name', 'last_name', 'bio', 'academic_year', 'school')


class TagForm(forms.ModelForm):

    class Meta:
        model = Tag
        fields = ('text',)
