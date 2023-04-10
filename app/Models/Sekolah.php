<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sekolah extends Model
{
  use HasFactory;
  protected $guarded = ['id'];

  public function gurus(): HasMany
  {
    return $this->hasMany(Guru::class, 'idSekolah', 'id');
  }
}
