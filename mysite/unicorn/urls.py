from django.conf.urls import url

from .forms import AuthorForm1, AuthorForm2, AuthorForm3, AuthorForm4
from .views import AuthorWizard

from . import views

urlpatterns = [
    url(r'^$', views.articleList, name='Article List'),
    url(r'^dash$', views.dashboard, name='dashboard'),
    url(r'^(?P<slug>[\w-]+)/$', views.articleDetail, name='detail'),
	url(r'^author$', AuthorWizard.as_view([AuthorForm1, AuthorForm2, AuthorForm3, AuthorForm4])),
]
