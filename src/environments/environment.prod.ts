export const environment = {
  production: true,
  SERVER_API_URL: ``,
  SERVER_API_CONTEXT: 'crondata/',
  GRAFANA_URL: 'http://grafana.crondata.atlasinside.com/',
  PROMETHEUS_URL: 'http://prometheus.crondata.atlasinside.com/',
  FILEBROWSER_URL: 'http://filebrowser.crondata.atlasinside.com/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  BUILD_TIMESTAMP: new Date().getTime(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};

