import { Component } from '@angular/core';

@Component({
  selector: 'sds-workspace-tier2-item',
  template: `<ng-content></ng-content>`,
})
export class SdsWorkspaceTier2ItemComponent {}

// ==============================================
// ITEM HEAD
// ==============================================
@Component({
  selector: 'sds-workspace-tier2-item-head',
  template: ` <div class="margin-bottom-05"><ng-content></ng-content>:</div> `,
})
export class SdsWorkspaceTier2ItemHeadComponent {}

// ==============================================
// ITEM BODY
// ==============================================
@Component({
  selector: 'sds-workspace-tier2-item-body',
  template: `<div class="text-semibold">
    <ng-content></ng-content>
  </div>`,
})
export class SdsWorkspaceTier2ItemBodyComponent {}
