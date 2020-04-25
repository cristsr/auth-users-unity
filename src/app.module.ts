import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { Configuration } from './config.keys';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { configuration } from './configuration';

const config = (() => {
  return {
    envFilePath: '.env',
    isGlobal: true,
  } as ConfigModuleOptions;

  // return {
  //   load: [configuration],
  //   isGlobal: true
  // } as ConfigModuleOptions
})();

@Module({
  imports: [
    ConfigModule.forRoot(config),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public static port: number;

  constructor(private config: ConfigService) {
    AppModule.port = this.config.get(Configuration.PORT);
  }
}
