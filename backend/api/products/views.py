from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product

@api_view(["GET"])
def products(request):
    products = Product.objects.all()
    data = list(products.values("name", "price", "image"))
    return Response(data, status=status.HTTP_200_OK)