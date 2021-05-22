console.log(window.location.hostname);
export const environment = {
  production: true,
  SERVER_API_URL: 'http://' + window.location.hostname + ':8080/',
  GRAFANA_URL: 'http://crondata_grafana:3000/',
  PROMETHEUS_URL: 'http://crondata_prometheus:9090/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};
