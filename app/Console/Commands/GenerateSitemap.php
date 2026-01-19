<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\LegalProduct;

class GenerateSitemap extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'sitemap:generate';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Generate the sitemap.';

  /**
   * Execute the console command.
   */
  public function handle()
  {
    $this->info('Generating sitemap...');

    $sitemap = Sitemap::create()
      ->add(Url::create('/'))
      ->add(Url::create('/produk-hukum'))
      ->add(Url::create('/informasi-hukum'))
      ->add(Url::create('/tentang'))
      ->add(Url::create('/kontak'));

    // Add Legal Products
    LegalProduct::where('status', 'active') // Or 'Berlaku' depending on your schema
      ->chunk(100, function ($products) use ($sitemap) {
        foreach ($products as $product) {
          $sitemap->add(
            Url::create("/produk-hukum/{$product->slug}")
              ->setLastModificationDate($product->updated_at)
              ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
              ->setPriority(0.8)
          );
        }
      });

    $sitemap->writeToFile(public_path('sitemap.xml'));

    $this->info('Sitemap generated successfully.');
  }
}
