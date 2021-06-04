import {Component, OnInit} from '@angular/core';
import {SysToasrtService} from '../../../shared/alert/sys-toasrt.service';
import {UtmConfigParamsService} from '../../../shared/services/config/utm-config-params.service';
import {UtmConfigSectionService} from '../../../shared/services/config/utm-config-section.service';
import {SectionConfigParamType} from '../../../shared/types/configuration/section-config-param.type';
import {SectionConfigType} from '../../../shared/types/configuration/section-config.type';

@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.scss']
})
export class AppConfigComponent implements OnInit {
  sections: SectionConfigType[] = [];
  private loading = true;
  confValid = true;
  saving: any;
  configToSave: SectionConfigParamType[] = [];

  constructor(private utmConfigSectionService: UtmConfigSectionService,
              private utmConfigParamsService: UtmConfigParamsService,
              private toastService: SysToasrtService) {
  }

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.loading = true;
    this.utmConfigSectionService.query({page: 0, size: 10000, 'moduleNameShort.specified': false}).subscribe(response => {
      this.loading = false;
      if (response.body) {
        this.sections = response.body;
      }
    }, error => {
      this.toastService.showError('Error', 'Error getting application configurations sections');
    });
  }

}
