import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../../../../../../../core/user/account.model';
import {AccountService} from '../../../../../../../core/auth/account.service';
import {SysToasrtService} from '../../../../../../../shared/alert/sys-toasrt.service';
import {SysHttpResponseErrorService} from '../../../../../../../shared/services/sys-http-response-error.service';

@Component({
  selector: 'app-account-profile-header',
  templateUrl: './account-profile-header.component.html',
  styleUrls: ['./account-profile-header.component.scss']
})
export class AccountProfileHeaderComponent implements OnInit {
  @Input() section!: string;
  @Input() subtext!: string;
  @Input() account!: Account;
  saving: any;

  constructor(private accountService: AccountService,
              private toasrtService: SysToasrtService,
              private errorService: SysHttpResponseErrorService) {
  }

  ngOnInit(): void {
  }

  saveAccount(): void {
    if (this.account) {
      this.saving = true;
      this.accountService.save(this.account).subscribe(saved => {
        this.saving = false;
        this.toasrtService.showSuccessBottom('Account edited successfully');

      }, error => this.errorService.processError(error));
    }
  }
}
