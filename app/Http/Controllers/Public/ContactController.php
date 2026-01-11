<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('Contact/Index', [
            'links' => \App\Models\Link::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|in:Individu,Kelompok,LSM/NGO,Instansi Pemerintah,Lembaga Pendidikan,Lainnya',
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'identity_number' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'identity_file' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048', // 2MB max
        ]);

        $path = null;
        if ($request->hasFile('identity_file')) {
            $path = $request->file('identity_file')->store('identity_files', 'public');
        }

        \App\Models\Contact::create([
            'category' => $validated['category'],
            'name' => $validated['name'],
            'address' => $validated['address'],
            'identity_number' => $validated['identity_number'],
            'phone' => $validated['phone'],
            'email' => $validated['email'],
            'identity_file_path' => $path,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return redirect()->back()->with('success', 'Pesan anda berhasil dikirim. Kami akan segera menghubungi anda.');
    }
}
