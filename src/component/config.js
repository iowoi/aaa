const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 1337,
  host: env.HOST || 'bonny-live.me',
  get serverUrl() {
    return `https://${this.host}:${this.port}`;
  }
};
