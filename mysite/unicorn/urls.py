from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name='Home'),
    url(r'^articles$', views.articleList, name='Article List'),
    url(r'^dash$', views.dashboard, name='dashboard'),
    url(r'^article/(?P<slug>[\w-]+)/$', views.articleDetail, name='detail'),
]
