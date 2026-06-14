<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use Inertia\Inertia;
use Inertia\Response;


class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('public/home', [
            'categories' => Category::query()
                ->orderBy('name')
                ->get(),

            'featuredProducts' => Product::query()
                ->with('images')
                ->where('is_active', true)
                ->latest()
                ->take(8)
                ->get(),

            'reviews' => Review::query()
                ->latest()
                ->take(6)
                ->get(),
        ]);
    }
}
