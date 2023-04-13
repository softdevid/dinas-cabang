<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProfilPejabat>
 */
class ProfilPejabatFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'namaPejabat' => $this->faker->name(),
      'jabatan' => $this->faker->randomElement(['Kepala dinas', 'wakil kepala', 'anggota']),
      'profil' => $this->faker->paragraph(),
      'pendidikan' => $this->faker->paragraph(),
      'karir' => $this->faker->paragraph(),
      'penghargaan' => $this->faker->paragraph(),
    ];
  }
}
