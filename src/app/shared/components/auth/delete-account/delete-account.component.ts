import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthServerProvider} from '../../../../core/auth/auth-jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private authServerProvider: AuthServerProvider,
              public activeModal: NgbActiveModal,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, {centered: true}).result.then((result) => {
    });
  }


  deleteAccount(): void {
    this.authServerProvider.logout().then(value => {
      this.router.navigate(['/']);
    });
  }
}
