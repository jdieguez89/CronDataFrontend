// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

import {environment} from '../environments/environment';

export const VERSION = environment.VERSION;
export const SERVER_API_URL = environment.SERVER_API_URL + environment.SERVER_API_CONTEXT;
export const GRAFANA_URL = environment.GRAFANA_URL;
export const PROMETHEUS_URL = environment.PROMETHEUS_URL;
export const FILEBROWSER_URL = environment.FILEBROWSER_URL;
export const BUILD_TIMESTAMP = environment.BUILD_TIMESTAMP;
