import {HttpResponse} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {delay} from 'rxjs/operators';
import {SysToasrtService} from '../../shared/alert/sys-toasrt.service';
import {ITarget, Target} from './target.model';
import {TargetService} from './target.service';

@Component({
  selector: 'jhi-target-update',
  templateUrl: './target-update.component.html',
})
export class TargetUpdateComponent implements OnInit {
  @Input() target?: ITarget;
  @Output() targetUpdated = new EventEmitter<any>();
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    targetHost: ['', [Validators.required, Validators.pattern('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.)' +
      '{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9' +
      '\\-]*[a-zA-Z0-9])\\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\\-]*[A-Za-z0-9])$ ')]],
    job: [null, [Validators.required]],
    port: ['', [Validators.required]],
    zone: []
  });


  constructor(protected targetService: TargetService,
              public activeModal: NgbActiveModal,
              private sysToasrtService: SysToasrtService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.target) {
      this.updateForm(this.target);
    }
    this.editForm.get('targetHost')?.valueChanges.pipe(delay(3000)).subscribe(value => {
      console.log('checking');
    });
  }

  updateForm(target: ITarget): void {
    this.editForm.patchValue({
      id: target.id,
      targetHost: target.targetHost,
      port: target.port,
      job: target.job,
      zone: target.zone,
    });
  }

  save(): void {
    this.isSaving = true;
    const target = this.createFromForm();
    console.log(target);
    if (target.id) {
      this.subscribeToSaveResponse(this.targetService.update(target));
    } else {
      this.subscribeToSaveResponse(this.targetService.create(target));
    }
  }

  private createFromForm(): { targetHost?: string; zone?: string; port: number, id: any; job: any } {
    return {
      ...new Target(),
      targetHost: this.editForm.get(['targetHost'])!.value,
      port: this.editForm.get(['port'])!.value,
      id: this.editForm.get(['id'])!.value,
      job: this.editForm.get(['job'])!.value,
      zone: this.editForm.get(['zone'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITarget>>): void {
    result.subscribe(
      (response) => this.onSaveSuccess(response),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(response: HttpResponse<ITarget>): void {
    this.isSaving = false;
    this.targetUpdated.emit(response.body);
    this.activeModal.close();
    this.sysToasrtService.showSuccess('Target ' + (this.target?.id ? 'edited' : 'created') + ' successfully');
  }

  protected onSaveError(): void {
    this.isSaving = false;
    this.sysToasrtService.showError('Error', 'Error while trying to create a new Target');
  }
}
