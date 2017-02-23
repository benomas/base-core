<?php

namespace App\Services\Installation;

use App\Entities\Role;
use App\Entities\Permission;
use App\Contracts\Users\UsersServiceContract;
use App\Services\Installation\Events\ApplicationWasInstalled;

/**
 * Class InstallAppHandler
 * @package App\Services\Installation
 */
class InstallAppHandler
{

    /**
     * @var array|\Illuminate\Support\Collection
     */
    public $roles = [
        [ 'name' => 'Administrator']
    ];

    /**
     * @var array|\Illuminate\Support\Collection
     */
    public $permissions = [
        'users' => [
            ['name' => 'List users'],
            ['name' => 'Create users'],
            ['name' => 'Delete users'],
            ['name' => 'Update users'],
        ],
        'roles' => [
            ['name' => 'List roles'],
            ['name' => 'Create roles'],
            ['name' => 'Delete roles'],
            ['name' => 'Update roles'],
        ],
        'permissions' => [
            ['name' => 'List permissions'],
            ['name' => 'Create permissions'],
            ['name' => 'Delete permissions'],
            ['name' => 'Update permissions'],
        ],
        'users.roles' => [
            ['name' => 'Associate users with roles']
        ],
        'roles.permissions' => [
            ['name' => 'Associate roles with permissions']
        ]
    ];

    /**
     * @var
     */
    public $adminUser;

    /**
     * InstallAppHandler constructor.
     */
    public function __construct()
    {
        $this->roles = collect($this->roles);
        $this->permissions = collect($this->permissions);
    }

    /**
     * @param InstallAppCommand $command
     * @return $this
     */
    public function handle(InstallAppCommand $command)
    {
        $this->createRoles()
            ->createPermissions()
            ->createAdminUser((array) $command)
            ->assignAdminRoleToAdminUser()
            ->assignAllPermissionsToAdminRole();
        event(new ApplicationWasInstalled($this->adminUser, $this->roles, $this->permissions));
        return $this;
    }

    /**
     * @return $this
     */
    public function createRoles()
    {
        $this->roles = $this->roles->map(function ($role) {
            return Role::create($role);
        });
        return $this;
    }

    /**
     * @return $this
     */
    public function createPermissions()
    {
        $this->permissions = $this->permissions->map(function ($group) {
            return collect($group)->map(function ($permission) {
                return Permission::create($permission);
            });
        });
        return $this;
    }

    /**
     * @param array $attributes
     * @return $this
     */
    public function createAdminUser(array $attributes = [])
    {
        $service = app(UsersServiceContract::class);
        $this->adminUser = $service->create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'password' => $attributes['password'],
            'password_confirmation' => $attributes['password_confirmation']
        ]);
        return $this;
    }

    /**
     * @return $this
     */
    public function assignAdminRoleToAdminUser()
    {
        $this->adminUser->assignRole('Administrator');
        return $this;
    }

    /**
     * @return $this
     */
    public function assignAllPermissionsToAdminRole()
    {
        $role = Role::where('name', 'Administrator')->firstOrFail();
        $this->permissions->flatten()->each(function ($permission) use ($role) {
            $role->givePermissionTo($permission);
        });
        return $this;
    }
}
