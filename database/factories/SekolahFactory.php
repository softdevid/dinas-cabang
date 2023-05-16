<?php

namespace Database\Factories;

use App\Models\User;
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
      "kode" => $this->faker->randomNumber(4, true),
      "idUser" => User::pluck('id')->random(),
      "namaSekolah" => $this->faker->word(),
      "visi" => $this->faker->sentence(9),
      "misi" => $this->faker->paragraphs(3, true),
      "noHp" => $this->faker->phoneNumber(),
      "email" => $this->faker->email(),
      "password" => $this->faker->password(),
      "jenjang" => $this->faker->randomElement(['SD', 'SMP', 'SMA/SMK']),
      "alamatLengkap" => $this->faker->address(),
      "imgName" => $this->faker->word(),
      "imgUrl" => "https://source.unsplash.com/1000x1000?nature",
    ];
  }
}
