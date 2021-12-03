from django.urls import path
from django.urls import include
from rest_framework import routers

from .views import MovieViewSet, RatingViewSet


router = routers.DefaultRouter()
router.register('movies', MovieViewSet)
router.register('ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
