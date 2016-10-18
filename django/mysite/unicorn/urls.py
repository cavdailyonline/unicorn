from django.conf.urls import url
import views

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
    url(r'^$', views.schema_view),
    url(r'^authors/$', author_list, name='author-list'),
    url(r'^authors/(?P<pk>[-\w]+)/$', author_detail, name='author-detail'),
    url(r'^articles/$', article_list, name='article-list'),
    url(r'^articles/(?P<slug>[-\w]+)/$', article_detail, name='article-detail'),
    url(r'^tags/$', tag_list, name='tag-list'),
    url(r'^tags/(?P<pk>[-\w]+)/$', tag_detail, name='tag-detail'),
    url(r'^article_images/$', article_image_list, name='article-image-list'),
    url(r'^article_images/(?P<pk>[-\w]+)/$',
        article_image_detail, name='article-image-detail')
]
