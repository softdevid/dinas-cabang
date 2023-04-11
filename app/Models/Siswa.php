<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Siswa extends Model
{
  use HasFactory;
  protected $guarded = ['id'];

  public function sekolah(): BelongsTo
  {
    return $this->belongsTo(Sekolah::class, 'idSekolah', 'id');
  }
}
