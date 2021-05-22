import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../core/user/account.model';
import {AccountService} from '../../../../core/auth/account.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  account!: any;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      this.account = account;
    });
  }

}
