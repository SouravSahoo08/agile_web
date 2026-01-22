from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('service/<slug:slug>/', views.service_detail, name='service_detail'), # New Path
    path('blog/<slug:slug>/', views.blog_detail, name='blog_detail'),
]