<x-filament-panels::page>
  <form wire:submit="generate">
    {{ $this->form }}
    <br>

    <div class="mt-6 flex gap-x-3">
      <x-filament::button type="submit" wire:loading.attr="disabled">
        <span wire:loading.remove wire:target="generate">
          <x-filament::icon icon="heroicon-m-sparkles" class="w-5 h-5 mr-2 inline" />
          Generate Metadata
        </span>
        <span wire:loading wire:target="generate">
          <x-filament::loading-indicator class="h-5 w-5 mr-2 inline" />
          Processing...
        </span>
      </x-filament::button>
    </div>
  </form>
</x-filament-panels::page>