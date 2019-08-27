 <?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('clients')->insert([
            'company' => 'ASDF',
            'phone_number' => 12121212,
            'email' => 'clients@gmail.com',
            'password' => bcrypt('secret'),
            'role' => 'ROLE_CLIENTS',
            'is_verified' => 1,
        ]);
        DB::table('supports')->insert([
            'email' => 'supports@gmail.com',
            'password' => bcrypt('secret'),
            'role' => 'ROLE_SUPPORTS',
        ]);
        DB::table('sales')->insert([
            'email' => 'sales@gmail.com',
            'password' => bcrypt('secret'),
            'role' => 'ROLE_SALES',
        ]);
    }
}