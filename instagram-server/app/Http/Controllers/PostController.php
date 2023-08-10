<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function followingPosts()
    {
        $user = Auth::user();
        $followingIds = $user->following->pluck('id');
        $posts = Post::whereIn('user_id', $followingIds)->get();

        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image_url' => 'required|url',
        ]);

        $user = Auth::user();
        $post = $user->posts()->create([
            'image_url' => $request->image_url,
            'likes' => 0,
        ]);

        return response()->json($post, 201);
    }
}
