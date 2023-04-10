<?php

namespace Database\Factories;

use App\Models\Sekolah;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Guru>
 */
class GuruFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      "idSekolah" => Sekolah::pluck('id')->random(),
      "nip" => $this->faker->randomNumber(5, true),
      "namaGuru" => $this->faker->name(),
      "mapel" => $this->faker->words(3, true),
      "jabatan" => $this->faker->randomElement(['kepala sekolah', 'guru', 'wakil kepala sekolah']),
      "tglLahir" => $this->faker->date('Y-m-d'),
      "jenisKelamin" => $this->faker->randomElement(['laki-laki', 'perempuan']),
      "alamatLengkap" => $this->faker->address(),
    ];
  }
}
