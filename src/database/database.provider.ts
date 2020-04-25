import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'tls';
import { Configuration } from '../config/config.keys';
import { Logger } from '@nestjs/common';

const databaseUri = 'mongodb+srv://admin:admin@cluster0-uilpd.mongodb.net/test?retryWrites=true&w=majority';

export const databaseProvider = [
  MongooseModule.forRootAsync({
    imports: [ConfigService],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      Logger.log(databaseUri, 'Db Uri');
      return {
        uri: config.get(databaseUri),
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionOptions
    },
  })
];
