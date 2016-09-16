import os
from invoke import task

HERE = os.path.dirname(os.path.abspath(__file__))
API = os.path.join(HERE, 'mysite')


@task
def test_all(ctx):
    flake(ctx)
    test_api(ctx)
    # TODO: add more as they become available

# PYTHON
@task(aliases=['flake8'])
def flake(ctx, echo=True):
    ctx.run('flake8 {}'.format(API), echo=echo)


@task
def api_server(ctx):
    ctx.run('python {}/manage.py runserver'.format(API), echo=True)


@task
def test_api(ctx):
    ctx.run('python {}/manage.py test {}'.format(API, API), echo=True, pty=True)


@task(aliases=['req'])
def requirements(ctx):
    ctx.run('pip install -r requirements.txt', echo=True)