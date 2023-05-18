<?php

namespace Database\Factories;

use App\Models\User;
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
      "idUser" => User::pluck('id')->random(),
      'namaPenulis' => $this->faker->name(),
      'kategoriBerita' => $this->faker->randomElement(['Berita', 'Informasi']),
      'judulBerita' => $this->faker->sentence(),
      'slug' => $this->faker->slug(),
      'deskripsi' => $this->faker->paragraph(2),
      "imgName" => $this->faker->word(),
      "imgUrl" => "https://source.unsplash.com/1000x1000?nature",
    ];
  }
}
