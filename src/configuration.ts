import { Configuration } from './config.keys';

export const configuration = () => ({
  [Configuration.PORT]: process.env[Configuration.PORT],
  [Configuration.DB_URI]: process.env[Configuration.DB_URI],
});

