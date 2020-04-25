import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'tls';
import { Configuration } from '../config.keys';
import { Logger } from '@nestjs/common';

export const databaseProvider = [
  MongooseModule.forRootAsync({
    imports: [ConfigService],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {

      Logger.log(config.get(Configuration.DB_URI), 'DatabaseProvider');

      return {
        uri: config.get(Configuration.DB_URI),
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionOptions
    },
  })
];
