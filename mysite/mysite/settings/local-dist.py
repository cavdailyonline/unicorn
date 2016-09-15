"""Copy this file into local.py and fill in blanks"""

# Do NOT fill these fields out in local-dist.py or defaults.py


# Any settings that contain keys should be left blank in
# local-dist.py and in defaults.py
# Each developer should add their own keys in local.py
# This is to avoid putting private keys on Github for
# everyone to see

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''  #  fill this out with a long random string
                 #  in local.py

# django-storages
# https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html

# Log on to aws, go to IAM console
# Create a user or go to your user if you alread have one
# Click "Create access key"
# Copy keys here
AWS_ACCESS_KEY_ID = ''
AWS_SECRET_ACCESS_KEY = ''

# Log on to aws, go to s3 console
# copy name of bucket in the list here
# it should look like elasticbeanstalk-us-east-1-...
AWS_STORAGE_BUCKET_NAME = ''

# SECURITY WARNING: don't run with debug turned on in production!
# If developing locally, set DEBUG to True
# If deploying, set DEBUG to False
DEBUG = True
