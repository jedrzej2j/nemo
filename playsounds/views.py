from django.shortcuts import render

from django.http import HttpResponse


def index(request):
    context = {
        'num_books': 123
    }
    return render(request, 'index.html', context = context)