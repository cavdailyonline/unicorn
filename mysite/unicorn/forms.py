from django import forms
from .models import Article, Author, Tag
from django.contrib.auth.models import User


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


class RegisterForm(forms.ModelForm):

    class Meta:
        model = User
