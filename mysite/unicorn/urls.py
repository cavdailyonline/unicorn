from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^articles/$', views.ArticleList.as_view(), name='Article List'),
    url(r'^articles/(?P<slug>[-\w]+)/$', views.ArticleDetail.as_view(), name= 'Article Detail'),
    url(r'^tags/$', views.TagList.as_view(), name='Tag List'),
    url(r'^tags/(?P<text>[-\w]+)/$', views.TagDetail.as_view(), name= 'Tag Detail'),
    url(r'^authors/$', views.AuthorList.as_view(), name='Author List'),
]
