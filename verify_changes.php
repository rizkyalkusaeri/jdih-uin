<?php

use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use App\Models\LegalProduct;

// Ensure we have a user
$user = User::first();
if (!$user) {
  $user = User::factory()->create();
}

echo "User ID: " . $user->id . "\n";

// Test Post Creation with Tag
$tag = Tag::firstOrCreate(['name' => 'Test Tag', 'slug' => 'test-tag']);
$post = Post::create([
  'title' => 'Test Post',
  'slug' => 'test-post-' . time(),
  'content' => 'Content',
  'user_id' => $user->id,
]);

$post->tags()->attach($tag->id);

echo "Post Created with ID: " . $post->id . "\n";
echo "Post User ID: " . $post->user->id . "\n";
echo "Post Tags Count: " . $post->tags()->count() . "\n";

// Test Legal Product Creation with User
$lp = LegalProduct::create([
  'title' => 'Test LP',
  'number' => 'NUM-' . time(),
  'slug' => 'test-lp-' . time(),
  'year' => 2024,
  'determination_date' => now(),
  'published_date' => now(),
  'file_path' => 'dummy.pdf',
  'abstract' => 'test',
  'user_id' => $user->id,
]);

// Reload to check relationship
$lp->refresh();
echo "LegalProduct Created with ID: " . $lp->id . "\n";
echo "LegalProduct User ID: " . $lp->user->id . "\n";
