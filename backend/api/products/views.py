from django.shortcuts import render
from django.http import JsonResponse
from .models import Product

# Create your views here.

def products(request):
    products = Product.objects.all()
    data = list(products.values("name", "price"))
    return JsonResponse(data, safe=False)