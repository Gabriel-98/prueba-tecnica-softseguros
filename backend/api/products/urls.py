from django.urls import path
from .views import product_list, product_count

urlpatterns = [
    path("", product_list),
    path("count/", product_count),
]