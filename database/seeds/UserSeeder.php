<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'username',
            'email' => 'imfullstack@imawesome.com',
            'password' => bcrypt('cool'),
        ]);
    }
}