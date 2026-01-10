<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TrackVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): \Symfony\Component\HttpFoundation\Response
    {
        // Check if visitor has already been logged in this session
        if (!$request->session()->has('visited_today')) {
            try {
                \App\Models\VisitorLog::create([
                    'ip_address' => $request->ip(),
                    'url' => $request->fullUrl(),
                    'referer' => $request->header('referer'),
                    'user_agent' => $request->header('User-Agent'),
                ]);

                // Mark as visited for this session
                $request->session()->put('visited_today', true);
            } catch (\Exception $e) {
                // Fail silently to not disrupt the user
                \Illuminate\Support\Facades\Log::error('Visitor Log Error: ' . $e->getMessage());
            }
        }

        return $next($request);
    }
}
