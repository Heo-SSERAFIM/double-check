
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [

    path("admin/", admin.site.urls),
    path("upload/", include("uploadPage.urls")),
    path("feedback/", include("feedback.urls")),
    path("verify/", include("Verify.urls")),
    path("trend/", include("trend.urls")),
    path('search/', include("search.urls")),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
    

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
