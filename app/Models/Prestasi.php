<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Prestasi extends Model
{
  use HasFactory;
  protected $guarded = ['id'];

  public function gurus(): HasMany
  {
    return $this->hasMany(Sekolah::class, 'idSekolah', 'id');
  }
}
