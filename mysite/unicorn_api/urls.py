from django.conf.urls import url
from unicorn import views

author_list = views.AuthorViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

author_detail = views.AuthorViewSet.as_view({
    'get': 'retrieve',
    'delete': 'destroy',
    'patch': 'partial_update'
})

article_list = views.ArticleViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

article_detail = views.ArticleViewSet.as_view({
    'get': 'retrieve',
    'delete': 'destroy',
    'patch': 'partial_update'
})

tag_list = views.TagViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

tag_detail = views.TagViewSet.as_view({
    'get': 'retrieve',
    'delete': 'destroy',
    'patch': 'partial_update'
})

article_image_list = views.ArticleImageViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

article_image_detail = views.ArticleImageViewSet.as_view({
    'get': 'retrieve',
    'delete': 'destroy',
    'patch': 'partial_update'
})

urlpatterns = [
    url(r'^$', author_list, name='list'),
    url(r'^(?P<pk>[-\w]+)/$', author_detail, name='detail'),
    url(r'^$', article_list, name='list'),
    url(r'^(?P<pk>[-\w]+)/$', article_detail, name='detail'),
    url(r'^$', tag_list, name='list'),
    url(r'^(?P<pk>[-\w]+)/$', tag_detail, name='detail'),
    url(r'^$', article_image_list, name='list'),
    url(r'^(?P<pk>[-\w]+)/$', article_image_detail, name='detail')
]
