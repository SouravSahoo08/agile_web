from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .models import Service, BlogPost

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'daily'

    def items(self):
        return ['home'] # Add other static page names here

    def location(self, item):
        return reverse(item)

class ServiceSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.8
    def items(self): return Service.objects.filter(active=True)

class BlogSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.7
    def items(self): return BlogPost.objects.all()