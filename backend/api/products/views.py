from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product

@api_view(["GET"])
def product_list(request):
    offset = int(request.query_params.get("offset", 0))
    limit = int(request.query_params.get("limit", 100))
    products = Product.objects.all().order_by("id")[offset:offset+limit]
    data = list(products.values("id", "name", "price", "image"))
    return Response(data, status=status.HTTP_200_OK)

@api_view(["GET"])
def product_count(request):
    count = Product.objects.count()
    return Response({ "count": count }, status=status.HTTP_200_OK)