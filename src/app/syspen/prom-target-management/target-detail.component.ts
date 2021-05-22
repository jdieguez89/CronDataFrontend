import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITarget } from 'app/shared/model/target.model';

@Component({
  selector: 'jhi-target-detail',
  templateUrl: './target-detail.component.html',
})
export class TargetDetailComponent implements OnInit {
  target: ITarget | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ target }) => (this.target = target));
  }

  previousState(): void {
    window.history.back();
  }
}
