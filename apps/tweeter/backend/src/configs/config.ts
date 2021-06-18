import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 5001,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Tweeter app',
    description: 'The tweeter API description',
    version: '0.0.1',
    path: 'swagger'
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
