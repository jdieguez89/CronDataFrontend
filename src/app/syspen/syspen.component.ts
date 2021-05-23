// Angular
import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as objectPath from 'object-path';
import {Subscription} from 'rxjs';
import {LayoutConfig} from '../layout/shared/config/layout.config';
import {MenuConfig} from '../layout/shared/config/menu.config';
import {PageConfig} from '../layout/shared/config/page.config';
import {HtmlClassService} from '../layout/shared/services/html-class.service';
import {LayoutConfigService} from '../layout/shared/services/layout-config.service';
import {MenuConfigService} from '../layout/shared/services/menu-config.service';
import {PageConfigService} from '../layout/shared/services/page-config.service';
// RxJS
// Object-Path
// Layout

@Component({
  selector: 'app-syspen',
  templateUrl: './syspen.component.html',
  styleUrls: ['./syspen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SyspenComponent implements OnInit, OnDestroy {
  // Public variables
  selfLayout = 'default';
  asideSelfDisplay!: true;
  contentClasses = '';
  contentContainerClasses = '';
  subheaderDisplay = false;
  contentExtended!: false;

  // Private properties
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  /**
   * Component constructor
   *
   * param layoutConfigService: LayoutConfigService
   * param menuConfigService: MenuConfigService
   * param pageConfigService: PageConfigService
   * param htmlClassService: HtmlClassService
   * param store
   * param permissionsService
   */
  constructor(
    private layoutConfigService: LayoutConfigService,
    private menuConfigService: MenuConfigService,
    private pageConfigService: PageConfigService,
    private htmlClassService: HtmlClassService) {
    // register configs by demos
    this.layoutConfigService.loadConfigs(new LayoutConfig().configs);
    this.menuConfigService.loadConfigs(new MenuConfig().configs);
    this.pageConfigService.loadConfigs(new PageConfig().configs);

    // setup element classes
    this.htmlClassService.setConfig(this.layoutConfigService.getConfig());

    const subscription = this.layoutConfigService.onConfigUpdated$.subscribe(layoutConfig => {
      // reset body class based on global and page level layout config, refer to html-class.service.ts
      document.body.className = '';
      this.htmlClassService.setConfig(layoutConfig);
    });
    this.unsubscribe.push(subscription);
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    const config = this.layoutConfigService.getConfig();
    // Load UI from Layout settings
    this.selfLayout = objectPath.get(config, 'self.layout');
    this.asideSelfDisplay = objectPath.get(config, 'aside.self.display');
    this.subheaderDisplay = objectPath.get(config, 'subheader.display');
    this.contentClasses = this.htmlClassService.getClasses('content', true).toString();
    this.contentContainerClasses = this.htmlClassService.getClasses('content_container', true).toString();
    this.contentExtended = objectPath.get(config, 'content.extended');

    // let the layout type change
    const subscription = this.layoutConfigService.onConfigUpdated$.subscribe(cfg => {
      setTimeout(() => {
        this.selfLayout = objectPath.get(cfg, 'self.layout');
      });
    });
    this.unsubscribe.push(subscription);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
    // https://www.npmjs.com/package/ngx-permissions
  }

  /**
   * NGX Permissions, init roles
   */
}
