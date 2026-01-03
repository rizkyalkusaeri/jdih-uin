<div class="space-y-6">
    {{-- Status Section --}}
    <div class="flex items-center justify-between">
        <label class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Status Dokumen
        </label>
        <x-filament::badge :color="match ($record->status) {
        'active' => 'success',
        'inactive' => 'danger',
        'draft' => 'warning',
        default => 'gray',
    }" class="px-2.5 py-0.5 rounded-full text-xs font-medium">
            {{ match ($record->status) {
    'active' => 'Berlaku',
    'inactive' => 'Tidak Berlaku',
    'draft' => 'Draft',
    default => $record->status,
} }}
        </x-filament::badge>
    </div>

    {{-- Mencabut Section --}}
    @if($record->replacedDocuments->isNotEmpty())
        <div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Dokumen ini menggantikan dokumen-dokumen berikut:
            </p>

            <div class="space-y-3">
                <ul>
                    @foreach($record->replacedDocuments as $doc)

                        <li>
                            <a href="{{ \App\Filament\Resources\LegalProductResource::getUrl('edit', ['record' => $doc]) }}"
                                class="block bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-[#D97706]/50 transition-colors cursor-pointer group"
                                target="_blank">
                                <div class="flex items-start gap-3">

                                    <div class="flex-1">
                                        <div class="flex justify-between items-start">
                                            <h4
                                                class="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#D97706] transition-colors">
                                                {{ $doc->number }}
                                            </h4>

                                        </div>
                                        <p class="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug line-clamp-2">
                                            {{ $doc->title }}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>

                    @endforeach
                </ul>
            </div>
        </div>
    @endif

    {{-- Dicabut Oleh Section --}}
    @if($record->replacedBy->isNotEmpty())
        <div>
            <div class="relative mb-4">
                <div aria-hidden="true" class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>

            </div>

            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Dokumen ini telah digantikan oleh:
            </p>

            <div class="space-y-3">
                <ul>
                    @foreach($record->replacedBy as $doc)
                        <li>
                            <a href="{{ \App\Filament\Resources\LegalProductResource::getUrl('edit', ['record' => $doc]) }}"
                                class="block bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-[#D97706]/50 transition-colors cursor-pointer group"
                                target="_blank">
                                <div class="flex items-start gap-3">

                                    <div class="flex-1">
                                        <div class="flex justify-between items-start">
                                            <h4
                                                class="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#D97706] transition-colors">
                                                {{ $doc->number }}
                                            </h4>
                                        </div>
                                        <p class="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug line-clamp-2">
                                            {{ $doc->title }}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    @endif

    @if($record->replacedDocuments->isEmpty() && $record->replacedBy->isEmpty())
        <div class="flex items-center gap-3 mb-2 opacity-50">
            <div class="h-px bg-gray-200 dark:bg-gray-700 flex-grow"></div>
        </div>
        <div class="text-center py-4 text-gray-500 italic text-sm">
            Tidak ada riwayat perubahan (Mencabut atau Dicabut) untuk dokumen ini.
        </div>
    @endif
</div>