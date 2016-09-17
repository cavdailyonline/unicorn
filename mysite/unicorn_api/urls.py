from django.conf.urls import url
from unicorn import views

author_list = views.AuthorViewSet.as_view({
    'get': 'list',
})

author_detail = views.AuthorViewSet.as_view({
    'get': 'retrieve',
})

article_list = views.ArticleViewSet.as_view({
    'get': 'list',
})

article_detail = views.ArticleViewSet.as_view({
    'get': 'retrieve',
})

tag_list = views.TagViewSet.as_view({
    'get': 'list',
})

tag_detail = views.TagViewSet.as_view({
    'get': 'retrieve',
})

article_image_list = views.ArticleImageViewSet.as_view({
    'get': 'list',
})

article_image_detail = views.ArticleImageViewSet.as_view({
    'get': 'retrieve',
})

urlpatterns = [
    url(r'^authors/$', author_list, name='list'),
    url(r'^authors/(?P<pk>[-\w]+)/$', author_detail, name='detail'),
    url(r'^articles/$', article_list, name='list'),
    url(r'^articles/(?P<pk>[-\w]+)/$', article_detail, name='detail'),
    url(r'^tags/$', tag_list, name='list'),
    url(r'^tags/(?P<pk>[-\w]+)/$', tag_detail, name='detail'),
    url(r'^article_images/$', article_image_list, name='list'),
    url(r'^article_images/(?P<pk>[-\w]+)/$', article_image_detail, name='detail')
]
