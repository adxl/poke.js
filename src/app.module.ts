import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync(
    {
      useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'poke_db',
      entities: [
          __dirname + '/../**/*.entity{.ts}',
      ],
      synchronize: true,
    })
  }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
