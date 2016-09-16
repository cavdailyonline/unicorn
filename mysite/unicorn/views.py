from .models import Article, Author, Tag
from django.forms import modelformset_factory
from django.shortcuts import get_object_or_404, render
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, 'unicorn/home.html')


@login_required(login_url="login/")
def articleList(request):
    articleList = Article.objects.order_by('created')
    authorList = Author.objects.order_by('last_name')
    tagList = Tag.objects.order_by('text')
    context = {'articleList': articleList,
               'authorList': authorList, 'tagList': tagList}
    return render(request, 'unicorn/index.html', context)

@login_required(login_url="login/")
def articleDetail(request, slug):
    article = get_object_or_404(Article, slug=slug)
    return render(request, 'unicorn/detail.html', {'article': article})

@login_required(login_url="login/")
def dashboard(request):
    ArticleFormSet = modelformset_factory(Article, exclude=())
    AuthorFormSet = modelformset_factory(Author, exclude=())
    TagFormSet = modelformset_factory(Tag, exclude=())
    if request.method == 'POST':
        articleformset = ArticleFormSet(request.POST, request.FILES)
        authorformset = AuthorFormSet(request.POST, request.FILES)
        tagformset = TagFormSet(request.POST, request.FILES)
        if articleformset.is_valid() and authorformset.is_valid() and tagformset.is_valid():
            tagformset.save()
            authorformset.save()
            articleformset.save()
            # do something.
        elif articleformset.is_valid() and authorformset.is_valid() and tagformset.is_valid():
            pass
    else:
        articleformset = ArticleFormSet()
        authorformset = AuthorFormSet()
        tagformset = TagFormSet()
    return render(request, 'unicorn/new.html',
                  {'articleformset': articleformset,
                   'authorformset': authorformset,
                   'tagformset': tagformset})
