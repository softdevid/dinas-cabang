<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CekIdSekolah
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    $sekolahId = $request->route('sekolah');
    // if ($request->user()->sekolahs()->id !== $sekolahId) {
    //   abort(403, 'Unauthorized access.');
    // }

    return $next($request);
  }
}
