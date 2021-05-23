console.log(window.location.hostname);

export const environment = {
  production: true,
  // @ts-ignore
  SERVER_API_URL: 'http://' + (window.env.SERVER_HOST || '127.0.0.1') + ':8080/',
  // @ts-ignore
  GRAFANA_URL: 'http://' + (window.env.SERVER_HOST || '127.0.0.1') + ':3000/',
  // @ts-ignore
  PROMETHEUS_URL: 'http://' + (window.env.SERVER_HOST || '127.0.0.1') + ':9090/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};
