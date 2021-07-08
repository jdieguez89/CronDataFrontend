export const environment = {
  production: true,
  SERVER_API_URL: ``,
  SERVER_API_CONTEXT: ':8080/crondata/',
  GRAFANA_URL: 'http://' + window.location.host + ':3000/',
  PROMETHEUS_URL: 'http://' + window.location.host + ':9090/',
  FILEBROWSER_URL: 'http://' + window.location.host + ':8081/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};

