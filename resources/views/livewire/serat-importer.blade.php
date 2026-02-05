<div class="space-y-6">
    {{-- Search Form --}}
    <div class="p-6 bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 rounded-lg"
         wire:keydown.enter.prevent="searchDocuments">
        {{ $this->form }}
        
        <div class="mt-4 flex justify-end">
            <x-filament::button wire:click="searchDocuments">
                Cari Dokumen
            </x-filament::button>
        </div>
    </div>

    {{-- Results & Detail Grid --}}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {{-- List Section --}}
        <div class="flex flex-col h-96 p-6 bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 rounded-lg">
            <h3 class="text-base font-semibold leading-6 text-gray-950 dark:text-white mb-4">Hasil Pencarian</h3>
            <div class="overflow-y-auto flex-1 space-y-2 pr-2">
                @if(count($documents) > 0)
                    @foreach($documents as $doc)
                        <div wire:click="selectDocument('{{ $doc['uuid'] ?? $doc['id'] }}')" 
                             wire:key="doc-{{ $doc['id'] ?? $loop->index }}"
                             class="cursor-pointer p-3 rounded-lg border transition duration-200 
                                    {{ isset($selectedDetail) && ($selectedDetail['id'] == ($doc['id'] ?? null) || $selectedDetail['id'] == ($doc['uuid'] ?? null))
                                       ? 'bg-primary-50 border-primary-500 dark:bg-primary-900/20 dark:border-primary-500' 
                                       : 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800' 
                                    }}">
                            <h4 class="font-medium text-sm text-gray-900 dark:text-gray-100">
                                {{ $doc['perihal'] ?? '-' }}
                            </h4>
                            <div class="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>No: {{ $doc['nomor_surat'] ?? '-' }}</span>
                                <span class="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs">Klik untuk detail</span>
                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="flex items-center justify-center h-full text-gray-500 text-sm">
                        {{ ($data['search'] ?? '') ? 'Tidak ditemukan data.' : 'Silakan cari data.' }}
                    </div>
                @endif
            </div>
        </div>

        {{-- Detail Section --}}
        <div class="flex flex-col h-96 p-6 bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 rounded-lg">
            <h3 class="text-base font-semibold leading-6 text-gray-950 dark:text-white mb-4">Detail Dokumen</h3>
            <div class="flex-1 overflow-y-auto pr-2">
                @if($selectedDetail)
                    <div class="space-y-4">
                        <div class="space-y-1">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Nomor Surat</span>
                            <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ $selectedDetail['nomor_surat'] }}</p>
                        </div>
                        
                        <div class="space-y-1">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Perihal</span>
                            <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ $selectedDetail['perihal'] }}</p>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tanggal</span>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ $selectedDetail['tanggal_surat'] }}</p>
                            </div>
                            <div class="space-y-1">
                                <span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Penandatangan</span>
                                <p class="text-sm text-gray-900 dark:text-gray-100">{{ $selectedDetail['penandatangan'] }}</p>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">File URL</span>
                            <a href="{{ $selectedDetail['file_url'] }}" target="_blank" class="flex items-center text-sm text-primary-600 hover:text-primary-500 hover:underline">
                                <x-heroicon-o-link class="w-4 h-4 mr-1"/>
                                Lihat Dokumen
                            </a>
                        </div>

                        <div class="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Pilih Jenis Produk Hukum</label>
                            <select wire:model="typeId" 
                                    class="block w-full rounded-lg border-gray-300 px-2 py-1 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white sm:text-sm">
                                <option value="">-- Pilih Jenis --</option>
                                @foreach($types as $id => $name)
                                    <option value="{{ $id }}">{{ $name }}</option>
                                @endforeach
                            </select>

                            <div class="mt-4">
                                <x-filament::button wire:click="import" class="w-full">
                                    Import Data
                                </x-filament::button>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
                        <x-heroicon-o-document-magnifying-glass class="w-16 h-16 mb-2 opacity-50" />
                        <p class="text-sm">Pilih dokumen dari daftar untuk melihat detail.</p>
                    </div>
                @endif
            </div>
            
            {{-- Loading Indicator Overlay --}}
            <div wire:loading.flex wire:target="searchDocuments, selectDocument" 
                 class="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center z-10 rounded-xl backdrop-blur-sm">
                 <x-filament::loading-indicator class="h-10 w-10 text-primary-500" />
            </div>

        </div>
    </div>
</div>