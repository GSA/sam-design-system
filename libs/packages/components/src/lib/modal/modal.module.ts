import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbModal} from './modal';
import {NgbModalBackdrop} from './modal-backdrop';
import {NgbModalWindow} from './modal-window';

export {NgbModal} from './modal';
export {NgbModalConfig, NgbModalOptions} from './modal-config';
export {NgbModalRef, NgbActiveModal} from './modal-ref';
export {ModalDismissReasons} from './modal-dismiss-reasons';

@NgModule({
  declarations: [NgbModalBackdrop, NgbModalWindow],
  entryComponents: [NgbModalBackdrop, NgbModalWindow],
  providers: [NgbModal]
})
export class NgbModalModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgbModalModule}; }
}
