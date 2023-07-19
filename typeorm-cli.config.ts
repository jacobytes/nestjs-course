import { CoffeeEntity } from 'src/coffees/entities/coffee.entity';
import { FlavorEntity } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1689798332992 } from 'src/migrations/1689798332992-CoffeeRefactor';
import { SchemaSync1689800745056 } from 'src/migrations/1689800745056-SchemaSync';
import { DataSource } from 'typeorm';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [CoffeeEntity, FlavorEntity],
  migrations: [CoffeeRefactor1689798332992, SchemaSync1689800745056],
});
