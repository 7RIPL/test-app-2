import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { LeadsModule } from './leads/leads.module';


@Module({
  imports: [
    LeadsModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        database: configService.get('DB_NAME'),
        password: configService.get('DB_PASSWORD'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}']
      }),
      inject: [ConfigService],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
