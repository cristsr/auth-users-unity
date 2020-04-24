import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'tls';
import { Configuration } from '../config/config.keys';

export const databaseProvider = [
  MongooseModule.forRootAsync({
    imports: [ConfigService],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: true,
        uri: config.get(Configuration.DB_URI),
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectionOptions
    },
  })
];
