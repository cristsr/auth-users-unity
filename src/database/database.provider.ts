import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'tls';
import { Configuration } from '../config/config.keys';
import { Logger } from '@nestjs/common';

export const databaseProvider = [
  MongooseModule.forRootAsync({
    imports: [ConfigService],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      Logger.debug(config.get(Configuration.DB_URI), 'Db Uri');
      return {
        uri: config.get(Configuration.DB_URI),
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionOptions
    },
  })
];
