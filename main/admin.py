from django.contrib import admin
from .models import Service, SubService, PricingPlan, ContactLead, MarketingFeature, TechTool, BlogPost, HeroSlide
from .models import Client, Project

class SubServiceInline(admin.TabularInline):
    model = SubService
    extra = 1

admin.site.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'active')
    inlines = [SubServiceInline]

admin.site.register(PricingPlan)
admin.site.register(ContactLead)
admin.site.register(MarketingFeature)
admin.site.register(TechTool)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(HeroSlide)
@admin.register(BlogPost)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date_posted')
    prepopulated_fields = {'slug': ('title',)} # Auto-fill slug