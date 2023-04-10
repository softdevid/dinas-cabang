<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sekolah>
 */
class SekolahFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      "namaSekolah" => $this->faker->word(),
      "visi" => $this->faker->sentence(9),
      "misi" => $this->faker->paragraphs(3, true),
      "noHp" => $this->faker->phoneNumber(),
      "email" => $this->faker->email(),
      "desa" => $this->faker->citySuffix(),
      "kecamatan" => $this->faker->city(),
      "kabupaten" => $this->faker->country(),
      "alamatLengkap" => $this->faker->address()
    ];
  }
}
