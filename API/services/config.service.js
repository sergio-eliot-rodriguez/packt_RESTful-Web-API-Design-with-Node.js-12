export default class ConfigService { //12
  static NODE_ENV = process.env.NODE_ENV;
  static MONGO_USER = process.env.MONGO_USER;
  static MONGO_PASS = process.env.MONGO_PASS;
  static MONGO_HOST = process.env.MONGO_HOST;
  static MONGO_LOCALHOST = process.env.MONGO_LOCALHOST;   
  

  static get(name) {
    return process.env[name].trim();
  }
}
/*
        "REDIS_PASSWORD": "cmVkaXNwYXNzMQo=",
        "REDIS_HOST": "localhost",
        "REDIS_PORT": 6379,
*/