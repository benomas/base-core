<?php

namespace App\Providers;

use App\Services\Users\UsersService;
use Illuminate\Support\ServiceProvider;
use App\Contracts\Users\UsersServiceContract;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UsersServiceContract::class, UsersService::class);
    }
}
