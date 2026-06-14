<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                "name"=> "Electronics",
                "icon"=> "smartphone",
            ],
            [
                "name"=> "Fashion",
                "icon"=> "shirt",
            ],
            [
                "name"=> "Gaming",
                "icon"=> "gamepad2",
            ],
            [
                "name"=> "Books",
                "icon"=> "book-open",
            ],
            [
                "name"=> "Food",
                "icon"=> "utensils-crossed",
            ],
            [
                "name"=> "Sports",
                "icon"=> "dumbbell",
            ],
            [
                "name"=> "Home",
                "icon"=> "house",
            ],
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'slug' => Str::slug(
                    $category['name'],
                ),
                'icon' => $category['icon'],
            ]);
        }
    }
}
