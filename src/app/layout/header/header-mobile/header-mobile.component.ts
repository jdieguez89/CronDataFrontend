// Angular
import {Component, OnInit} from '@angular/core';
import {LayoutConfigService} from '../../shared/services/layout-config.service';
import {HtmlClassService} from '../../shared/services/html-class.service';
import {ToggleOptions} from '../../../shared/directives/toggle.directive';
import {ADMIN_ROLE} from '../../../shared/constants/global.constant';

// Layout

@Component({
    selector: 'app-header-mobile',
    templateUrl: './header-mobile.component.html',
    styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
    // Public properties
    headerLogo = '';
    asideSelfDisplay = true;
    headerMenuSelfDisplay = true;
    headerMobileClasses = '';
    ADMIN_ROLE = ADMIN_ROLE;
    toggleOptions: ToggleOptions = {
        target: KTUtil.getBody(),
        targetState: 'topbar-mobile-on',
        toggleState: 'active'
    };

    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param uiService UiSr
     */
    constructor(private layoutConfigService: LayoutConfigService, private uiService: HtmlClassService) {
    }

    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */


    /**
     * On init
     */
    ngOnInit() {
        this.headerMobileClasses = this.uiService.getClasses('header_mobile', true).toString();
        this.headerLogo = this.getLogoUrl();
        this.asideSelfDisplay = this.layoutConfigService.getConfig('aside.self.display');
        this.headerMenuSelfDisplay = this.layoutConfigService.getConfig('header.menu.self.display');
    }

    getLogoUrl() {
        const headerSelfTheme = this.layoutConfigService.getConfig('header.self.theme') || '';
        const brandSelfTheme = this.layoutConfigService.getConfig('brand.self.theme') || '';
        let result = 'logo-letter-13.png';
        if (!this.asideSelfDisplay) {
            if (headerSelfTheme === 'light') {
                result = 'logo-letter-13.png';
            }
        } else {
            if (brandSelfTheme === 'light') {
                result = 'logo-letter-13.png';
            }
        }
        return `./assets/media/logos/${result}`;
    }
}
