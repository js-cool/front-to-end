exports.mysql = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root'
};

exports.redis = {
  host: '127.0.0.1',
  port: 6379,
  db: 1,
  ttl: 3600
};

exports.enabledModules = ['demo1'];

exports.server = {
  port: 3000,
  host: '127.0.0.1'
};
