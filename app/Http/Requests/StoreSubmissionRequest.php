<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubmissionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Step 1
            'name' => ['required', 'string', 'max:255'],
            'nip_nim' => ['required', 'string', 'max:255'],
            'unit_kerja' => ['required', 'string', 'max:255'],
            'whatsapp' => ['required', 'string', 'max:20'],

            // Step 2
            'type_id' => ['required', 'exists:types,id'],
            'nota_dinas_number' => ['required', 'string', 'max:255'],
            'title' => ['required', 'string', 'max:255'],
            'product_summary' => ['required', 'string'],

            // Step 3
            'cover_letter' => ['required', 'file', 'mimes:pdf', 'max:5120'], // Max 5MB
            'draft_document' => ['required', 'file', 'mimes:docx,doc', 'max:10240'], // Max 10MB
        ];
    }
}
