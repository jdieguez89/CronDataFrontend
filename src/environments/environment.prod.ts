console.log(window.location.hostname);

export const environment = {
  production: true,
  // @ts-ignore
  SERVER_API_URL: 'http://' + window.location.host + ':8080/',
  // @ts-ignore
  GRAFANA_URL: 'http://' + window.location.host + ':3000/',
  // @ts-ignore
  PROMETHEUS_URL: 'http://' + window.location.host + ':9090/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};
