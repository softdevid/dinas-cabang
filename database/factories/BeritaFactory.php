<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'idUser' => $this->faker->randomElement(['1', '2']),
      'namaPenulis' => $this->faker->name(),
      'kategoriBerita' => $this->faker->randomElement(['Berita', 'Informasi']),
      'judulBerita' => $this->faker->title(5, true),
      'slug' => $this->faker->name(5, true),
      'deskripsi' => $this->faker->paragraph(2),
      'imgName' => $this->faker->name(10, true),
      'imgUrl' => $this->faker->name(10, true),
    ];
  }
}
