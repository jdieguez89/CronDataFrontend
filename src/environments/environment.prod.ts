export const environment = {
  production: true,
  SERVER_API_URL: ``,
  SERVER_API_CONTEXT: 'crondata/',
  GRAFANA_URL: 'http://grafana.' + window.location.host + '/',
  PROMETHEUS_URL: 'http://prometheus.' + window.location.host + '/',
  FILEBROWSER_URL: 'http://filebrowser.' + window.location.host + '/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};

