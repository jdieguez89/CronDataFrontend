import {ADMIN_ROLE, USER_ROLE} from '../../../shared/constants/global.constant';

export class MenuConfig {
  public defaults: any = {
    header: {
      self: {},
      items: [
        {
          title: 'Dashboards',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/frame/grafana',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Alert',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/alerts',
          authorities: [ADMIN_ROLE],
          submenu: [
            {
              page: '/app/crondata/alert/history',
              icon: 'flaticon-time',
              title: 'History',
              translate: 'app.management.health.title',
              authorities: [ADMIN_ROLE],
            },
            {
              page: '/app/crondata/alert/frame/browser',
              icon: 'flaticon-edit-1',
              title: 'Rule editor',
              translate: 'app.management.health.title',
              authorities: [ADMIN_ROLE],
            },
            {
              page: '/app/crondata/alert/view',
              icon: 'flaticon-interface-4',
              title: 'View rules',
              translate: 'app.management.health.title',
              authorities: [ADMIN_ROLE],
            },
          ]
        },
        {
          title: 'Manage targets',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/metric-targets',
          authorities: [ADMIN_ROLE],
        },
        {
          title: 'Applications',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/application/install',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Manage users',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/admin/user',
          authorities: [ADMIN_ROLE],
        },
        {
          title: 'Manage settings',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          page: '/app/crondata/management/settings',
          authorities: [ADMIN_ROLE],
        },
        {
          title: 'App checks',
          root: true,
          alignment: 'left',
          toggle: 'click',
          translate: 'app.management.title',
          authorities: [ADMIN_ROLE],
          submenu: [
            {
              page: '/app/crondata/check/health',
              icon: 'flaticon-analytics',
              title: 'Health',
              translate: 'app.management.health.title',
              authorities: [ADMIN_ROLE],
            },
            {
              page: '/app/crondata/check/user-access-audit',
              icon: 'flaticon-list-2',
              title: 'User access audit',
              translate: 'app.management.userAccess.title',
              authorities: [ADMIN_ROLE],
            },
            {
              page: '/app/crondata/check/application-metrics',
              icon: 'flaticon-statistics',
              title: 'Application metrics',
              translate: 'app.management.metrics.title',
              authorities: [ADMIN_ROLE],
            },
            {
              page: '/app/crondata/check/logs',
              icon: 'flaticon-list-2',
              title: 'Application Logs',
              translate: 'app.management.metrics.title',
              authorities: [ADMIN_ROLE],
            }
          ]
        },
      ]
    },
    aside: {
      self: {
        theme: 'light'
      },
      items: [
        {
          title: 'Home',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/app/crondata/features',
          translate: 'app.home',
          bullet: 'dot',
          authorities: [ADMIN_ROLE, USER_ROLE]
        },
        {
          section: 'Assets',
          translate: 'app.assetSeparator'
        },
        {
          title: 'Dashboard',
          root: true,
          bullet: 'dot',
          page: '/app/crondata/scanner/assets-discovery/dashboard',
          icon: 'flaticon2-pie-chart-4',
          translate: 'app.assets.dashboard.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Assets',
          root: true,
          bullet: 'dot',
          page: '/app/crondata/scanner/assets-discovery/assets',
          icon: 'flaticon-map',
          translate: 'app.assets.discover.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          section: 'Scanner config',
          translate: 'app.configSeparator'
        },
        {
          title: 'Scans',
          root: true,
          bullet: 'dot',
          page: '/app/crondata/scanner/task',
          icon: 'flaticon-list',
          translate: 'app.scanConfig.task.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Targets',
          page: '/app/crondata/scanner/target',
          root: true,
          bullet: 'dot',
          icon: 'flaticon-imac',
          translate: 'app.scanConfig.target.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Schedules',
          root: true,
          page: '/app/crondata/scanner/config/schedule',
          bullet: 'dot',
          icon: 'flaticon2-time',
          translate: 'app.scanConfig.schedule.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Ports',
          root: true,
          page: '/app/crondata/scanner/config/port',
          bullet: 'dot',
          icon: 'flaticon-globe',
          translate: 'app.scanConfig.port.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
        {
          title: 'Credentials',
          root: true,
          page: '/app/crondata/scanner/config/credential',
          bullet: 'dot',
          icon: 'flaticon-lock',
          translate: 'app.scanConfig.credential.title',
          authorities: [ADMIN_ROLE, USER_ROLE],
        },
      ]
    },
  };

  public get configs(): any {
    return this.defaults;
  }
}
