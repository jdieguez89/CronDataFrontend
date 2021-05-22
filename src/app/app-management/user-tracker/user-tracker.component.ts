import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtmTrackerService} from '../../core/tracker/tracker.service';

@Component({
  selector: 'app-user-tracker',
  templateUrl: './user-tracker.component.html',
  styleUrls: ['./user-tracker.component.scss']
})
export class UserTrackerComponent implements OnInit, OnDestroy {
  loading!: boolean;
  activities: any[] = [];

  constructor(private trackerService: UtmTrackerService) {
    // this.trackerService.connect();
  }

  ngOnInit(): void {
    // this.trackerService.subscribe();
    // this.trackerService.receive().subscribe(activity => {
    //   this.showActivity(activity);
    // });
  }

  showActivity(activity: any): void {
    let existingActivity = false;
    for (let index = 0; index < this.activities.length; index++) {
      if (this.activities[index].sessionId === activity.sessionId) {
        existingActivity = true;
        if (activity.page === 'logout') {
          this.activities.splice(index, 1);
        } else {
          this.activities[index] = activity;
        }
      }
    }
    if (!existingActivity && activity.page !== 'logout') {
      this.activities.push(activity);
    }
  }


  ngOnDestroy(): void {
    // this.trackerService.disconnect();
    // this.trackerService.unsubscribe();
  }

}
