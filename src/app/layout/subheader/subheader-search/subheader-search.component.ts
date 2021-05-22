// Angular
import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
// RxJS
import {Subscription} from 'rxjs';
import {Breadcrumb, SubheaderService} from '../../shared/services/subheader.service';

@Component({
  selector: 'app-subheader-search',
  templateUrl: './subheader-search.component.html',
  styleUrls: ['./subheader-search.component.scss']
})
export class SubheaderSearchComponent implements OnInit, OnDestroy, AfterViewInit {
  // Public properties
  @Input() fluid!: boolean;
  @Input() clear!: boolean;

  today: number = Date.now();
  title = '';
  desc: string | undefined = '';
  breadcrumbs: Breadcrumb[] = [];

  // Private properties
  private readonly subscriptions: Subscription[] = [];

  /**
   * Component constructor
   *
   * @param subheaderService: SubheaderService
   */
  constructor(public subheaderService: SubheaderService) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
      // breadcrumbs title sometimes can be undefined
      if (bt) {
        Promise.resolve(null).then(() => {
          this.title = bt.title;
          this.desc = bt.desc;
        });
      }
    }));

    this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
      Promise.resolve(null).then(() => {
        this.breadcrumbs = bc;
      });
    }));
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
