// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SERVER_API_URL: 'http://localhost:8080/',
  SERVER_API_CONTEXT:'',
  // SERVER_API_CONTEXT: 'crondata/',
  BUILD_TIMESTAMP: new Date().getTime(),
  GRAFANA_URL: 'http://' + window.location.hostname + ':3000/?search=open&orgId=1',
  PROMETHEUS_URL: 'http://' + window.location.hostname + ':9090/',
  FILEBROWSER_URL: 'http://' + window.location.hostname + ':8081/',
  SESSION_AUTH_TOKEN: window.location.host.split(':')[0].toLocaleUpperCase(),
  DEBUG_INFO_ENABLED: true,
  VERSION: '0.0.1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
