import sys

from os.path import abspath, basename, dirname

from fabric.decorators import task
from fabric.api import env
from fabric.operations import put

project_path = dirname(abspath(__file__))

env.hosts = ['root@198.199.80.225']

@task
def deploy():
    put('darkweb', '/var/www/')
