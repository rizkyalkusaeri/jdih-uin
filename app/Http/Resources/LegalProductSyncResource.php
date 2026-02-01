<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LegalProductSyncResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "idData" => (string) $this->id,
            "tahun_pengundangan" => (string) $this->year,
            "tanggal_penetapan" => $this->determination_date?->format('Y-m-d') ?? '-',
            "tanggal_pengundangan" => $this->published_date?->format('Y-m-d') ?? '-',
            "jenis" => $this->type?->name ?? '-',
            "noPeraturan" => $this->number ?? '-',
            "judul" => $this->title ?? '-',
            "noPanggil" => "-", // Not available
            "singkatanJenis" => "-", // Not available in Type model
            "tempatTerbit" => $this->place?->name ?? '-',
            "penerbit" => $this->publisher?->name ?? '-',
            "deskripsiFisik" => $this->page_description ?? '-',
            "sumber" => $this->source ?? '-',
            "subjek" => $this->subjects->isNotEmpty() ? $this->subjects->pluck('name')->implode(', ') : '-',
            "isbn" => "-", // Not available
            "status" => $this->status ?? 'Berlaku',
            "bahasa" => $this->language ?? 'Indonesia',
            "bidangHukum" => $this->legalField?->name ?? '-',
            "teuBadan" => "UIN Sunan Gunung Djati Bandung",
            "nomorIndukBuku" => "-",
            "fileDownload" => $this->file_path ? basename($this->file_path) : '-',
            "urlDownload" => $this->file_path ? asset('storage/' . $this->file_path) : '-',
            "urlDetailPeraturan" => url('produk-hukum/' . $this->slug),
            "operasi" => "4",
            "display" => "1"
        ];
    }
}
