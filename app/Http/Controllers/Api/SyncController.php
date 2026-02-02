<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LegalProduct;
use App\Models\ApiLog;
use App\Http\Resources\LegalProductSyncResource;

class SyncController extends Controller
{
    public function __invoke(\Illuminate\Http\Request $request)
    {
        $startTime = microtime(true);

        try {
            $query = \App\Models\LegalProduct::query()
                ->with(['type', 'place', 'publisher', 'subjects', 'legalField']);

            // Filters
            if ($request->filled('judul')) {
                $query->where('title', 'like', '%' . $request->judul . '%');
            }
            if ($request->filled('jenis')) {
                $query->whereHas('type', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->jenis . '%');
                });
            }
            if ($request->filled('kategori')) {
                $query->whereHas('category', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->kategori . '%');
                });
            }

            $legalProducts = $query->get();
            $data = \App\Http\Resources\LegalProductSyncResource::collection($legalProducts);

            $response = response()->json($data);

            // Logging
            $duration = (microtime(true) - $startTime) * 1000;
            \App\Models\ApiLog::create([
                'ip_address' => $request->ip(),
                'endpoint' => $request->fullUrl(),
                'method' => $request->method(),
                'user_agent' => $request->userAgent(),
                'status_code' => 200,
                'payload' => $request->all(),
                'duration_ms' => $duration,
            ]);

            return $response;
        } catch (\Exception $e) {
            $duration = (microtime(true) - $startTime) * 1000;

            \App\Models\ApiLog::create([
                'ip_address' => $request->ip(),
                'endpoint' => $request->fullUrl(),
                'method' => $request->method(),
                'user_agent' => $request->userAgent(),
                'status_code' => 500,
                'payload' => $request->all(),
                'duration_ms' => $duration,
            ]);

            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
