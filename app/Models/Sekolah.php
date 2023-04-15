<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sekolah extends Model
{
  use HasFactory;
  protected $guarded = ['id'];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class, 'idUser', 'id');
  }

  public function gurus(): HasMany
  {
    return $this->hasMany(Guru::class, 'idSekolah', 'id');
  }

  public function siswas(): HasMany
  {
    return $this->hasMany(Siswa::class, 'idSekolah', 'id');
  }

  public function prestasis(): HasMany
  {
    return $this->hasMany(Prestasi::class, 'idSekolah', 'id');
  }
}
