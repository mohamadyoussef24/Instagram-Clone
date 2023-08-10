<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function toggleLike(Post $post)
    {
        $user = Auth::user();

        if ($user->likes()->where('post_id', $post->id)->exists()) {
            $user->likes()->where('post_id', $post->id)->delete();
            $post->decrement('likes');
            return response()->json(['message' => 'Post unliked'], 200);
        } else {
            $user->likes()->create(['post_id' => $post->id]);
            $post->increment('likes');
            return response()->json(['message' => 'Post liked'], 200);
        }
    }
}
