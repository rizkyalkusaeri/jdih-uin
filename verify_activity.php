<?php

use App\Models\Post;
use App\Models\Category;
use Spatie\Activitylog\Models\Activity;

// Create a Category and check log
$category = Category::create([
  'name' => 'Test Category Log ' . time(),
  'slug' => 'test-category-log-' . time(),
  'type' => 'legal'
]);

$lastActivity = Activity::latest()->first();
echo "Category Activity: " . $lastActivity->description . " on " . $lastActivity->subject_type . "\n";
echo "Changes: " . json_encode($lastActivity->properties) . "\n";

// Create a Post and check log
$post = Post::create([
  'title' => 'Test Post Log ' . time(),
  'slug' => 'test-post-log-' . time(),
  'content' => 'Test Content',
  'user_id' => 1
]);

$lastActivity = Activity::latest()->first();
echo "Post Activity: " . $lastActivity->description . " on " . $lastActivity->subject_type . "\n";
