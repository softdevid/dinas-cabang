<?php

namespace Database\Factories;

use App\Models\Sekolah;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Siswa>
 */
class SiswaFactory extends Factory
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
      "nisn" => $this->faker->randomFloat(10, true),
      "nis" => $this->faker->randomFloat(5, true),
      "namaSiswa" => $this->faker->name(),
      "kelas" => $this->faker->randomElement(['12 RPL 1', '12 RPL 2']),
      "tglLahir" => $this->faker->date('Y-m-d'),
      "jenisKelamin" => $this->faker->randomElement(['laki-laki', 'perempuan']),
      "alamatLengkap" => $this->faker->address(),
    ];
  }
}
