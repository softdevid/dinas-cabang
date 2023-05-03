<?php

namespace Database\Factories;

use App\Models\Sekolah;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prestasi>
 */
class PrestasiFactory extends Factory
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
      "namaLomba" => $this->faker->name(10, true),
      "kategoriLomba" => $this->faker->randomElement(['Olahraga', 'Seni budaya', 'Teknologi', 'Ilmu Sosial']),
      "namaPeserta" => $this->faker->name(),
      "statusPeserta" => $this->faker->randomElement(['SMK', 'SMP', 'SMA', 'SD']),
      "asalInstansi" => Sekolah::pluck('namaSekolah')->random(),
      "penanggungJawab" => $this->faker->name(),
      "targetCapaian" => $this->faker->randomElement(['Juara 1', 'Juara 2', 'Juara 3', 'Juara 4', 'Juara 5']),
      "jadwalPelaksanaan" => $this->faker->date(),
      "sumberAnggaran" => $this->faker->name(10, true),
      "tingkatPrestasi" => $this->faker->randomElement(['Kecamatan', 'Kabupaten/Kota', 'Provinsi', 'Nasional', 'Internasional']),
    ];
  }
}
