from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.articleList, name='Article List'),
    url(r'^dash$', views.dashboard, name='dashboard'),
    url(r'^(?P<slug>[\w-]+)/$', views.articleDetail, name='detail'),
]
