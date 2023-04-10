<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Guru extends Model
{
  use HasFactory;
  protected $primaryKey = 'nip';
  protected $guarded = ['nip'];
  public $incrementing = false;

  public function sekolah(): BelongsTo
  {
    return $this->belongsTo(Sekolah::class, 'idSekolah', 'id');
  }
}
