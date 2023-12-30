from django.urls import path, re_path
from . import views

urlpatterns = [
path(r'', views.APIViewSet.as_view({"get": "list", "post": "create"}), name="warehouse"),
path('test', views.APIViewSet.as_view({"get": "get_project"}), name="warehouse1"),
re_path(r'^(?P<pk>\d+)/$', views.APIViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
}), name="warehouse_1"),
path(r'multiple/', views.MultipleViewSet.as_view({"get": "list"}), name="warehouse"),
re_path(r'^multiple/(?P<pk>\d+)/$', views.MultipleViewSet.as_view({
    'get': 'retrieve',
}), name="warehouse_1")
]
