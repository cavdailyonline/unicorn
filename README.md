[![Build Status](https://travis-ci.org/cavdailyonline/unicorn.svg?branch=develop)](https://travis-ci.org/cavdailyonline/unicorn)
# unicorn
Content Management System for student news publications

###Brief 
The Cavalier Daily, a student news publication at the University of Virginia, is undertaking this project to create a
new web presence and content management system for the paper. 

###Function
We hope that this repository will eventually become a backend Django app that will handle CRUD of articles, authors, and tags. 
Our front end will be built with AngularJS that will consume our content API mocked out with the Django REST framework.

###Getting Started

- Install python
- Install virtualenv https://pypi.python.org/pypi/virtualenv
- Install virtualenvwrapper https://pypi.python.org/pypi/virtualenvwrapper/
- Create a virtualenv using virtualenvwrapper
    - `mkvirtualenv cavdaily`
- Install package requirements
    - `pip install -r requirements.txt`
- Copy `mysite/settings/local-dist.py` into `mysite/settings/local.py` and fill in fields

###Running Django App

- `./mysite/manage.py migrate`
- `./mysite/manage.py runserver`
- `./mysite/manage.py createsuperuser`
- Go to <a href="http://localhost:8000" target="_blank">localhost:8000</a> in browser

###Running Angular App
- See [unicorn sub-directory](https://github.com/cavdailyonline/unicorn/tree/develop/unicorn)

###API Docs
- Go to  <a href="http://localhost:8000/api/" target="_blank">localhost:8000/api/</a> in browser

###Running tests
- `invoke test_all`
