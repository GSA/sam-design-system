(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[9886],{"./libs/documentation/src/lib/storybook/tabs/tabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Aria:()=>Aria,AutomaticActivation:()=>AutomaticActivation,Configurable:()=>Configurable,CustomClasses:()=>CustomClasses,CustomHeader:()=>CustomHeader,Disabled:()=>Disabled,DynamicGeneration:()=>DynamicGeneration,Introduction:()=>Introduction,PreChangeEvent:()=>PreChangeEvent,SelectedTab:()=>SelectedTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tabs_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/packages/components/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var tabs_aria_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-aria/tabs-aria.component.scss?ngResource"),tabs_aria_componentngResource_default=__webpack_require__.n(tabs_aria_componentngResource);let TabsAriaComponent=class TabsAriaComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsAriaComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-aria",template:'<div class="tabs-wrapper">\n  <sds-tabs>\n    <sds-tab-panel #tab1 tabHeader="Tab1" ariaLabel="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2" ariaLabel="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3" ariaLabel="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',styles:[tabs_aria_componentngResource_default()]})],TabsAriaComponent);let TabsAriaModule=class TabsAriaModule{};TabsAriaModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsAriaComponent],bootstrap:[TabsAriaComponent],exports:[TabsAriaComponent]})],TabsAriaModule);var tabs_automatic_activation_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-automatic-activation/tabs-automatic-activation.component.scss?ngResource"),tabs_automatic_activation_componentngResource_default=__webpack_require__.n(tabs_automatic_activation_componentngResource);let TabsAutomaticActivationComponent=class TabsAutomaticActivationComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsAutomaticActivationComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-automatic-activation",template:'<div class="tabs-wrapper">\n  <sds-tabs [automaticActivation]="true">\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',styles:[tabs_automatic_activation_componentngResource_default()]})],TabsAutomaticActivationComponent);let TabsAutomaticActivationModule=class TabsAutomaticActivationModule{};TabsAutomaticActivationModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsAutomaticActivationComponent],exports:[TabsAutomaticActivationComponent],bootstrap:[TabsAutomaticActivationComponent]})],TabsAutomaticActivationModule);var tabs_configurable_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-configurable/tabs-configurable.component.scss?ngResource"),tabs_configurable_componentngResource_default=__webpack_require__.n(tabs_configurable_componentngResource);let TabsConfigurableComponent=class TabsConfigurableComponent{set selectedTab(tab){switch(tab){case"Tab 1":this._selectedTab=this.tab1;break;case"Tab 2":this._selectedTab=this.tab2}}handlePreTabCheck(destinationTab){if(this.interceptTabChange){1==confirm("Proceed?")&&(this._selectedTab=destinationTab)}}constructor(){this.tabClass="sds-tabs--default"}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={tab1:[{type:core.ViewChild,args:["tab1"]}],tab2:[{type:core.ViewChild,args:["tab2"]}],selectedTab:[{type:core.Input}],automaticActivation:[{type:core.Input}],tabClass:[{type:core.Input}],interceptTabChange:[{type:core.Input}]}};TabsConfigurableComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-configurable",template:'<div class="tabs-wrapper">\n  <sds-tabs\n    [(selectedTab)]="_selectedTab"\n    [automaticActivation]="automaticActivation"\n    [tabClass]="tabClass"\n    [interceptTabChange]="interceptTabChange"\n    (preTabChange)="handlePreTabCheck($event)"\n  >\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:[tabs_configurable_componentngResource_default()]})],TabsConfigurableComponent);let TabsConfigurableModule=class TabsConfigurableModule{};TabsConfigurableModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsConfigurableComponent],exports:[TabsConfigurableComponent],bootstrap:[TabsConfigurableComponent]})],TabsConfigurableModule);var tabs_custom_classes_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-custom-classes/tabs-custom-classes.component.scss?ngResource"),tabs_custom_classes_componentngResource_default=__webpack_require__.n(tabs_custom_classes_componentngResource);let TabsCustomClassesComponent=class TabsCustomClassesComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsCustomClassesComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-custom-classes",template:'<div class="tabs-wrapper">\n  <sds-tabs [tabClass]="\'custom-class\'">\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:[tabs_custom_classes_componentngResource_default()]})],TabsCustomClassesComponent);let TabsCustomClassesModule=class TabsCustomClassesModule{};TabsCustomClassesModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsCustomClassesComponent],exports:[TabsCustomClassesComponent],bootstrap:[TabsCustomClassesComponent]})],TabsCustomClassesModule);var tabs_custom_header_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-custom-header/tabs-custom-header.component.scss?ngResource"),tabs_custom_header_componentngResource_default=__webpack_require__.n(tabs_custom_header_componentngResource);let TabsCustomHeaderComponent=class TabsCustomHeaderComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsCustomHeaderComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-custom-header",template:'<div class="tabs-wrapper">\n  <sds-tabs [(selectedTab)]="selectedTab">\n    <sds-tab-panel #tab1 [tabHeader]="tab1Header">\n      <ng-template #tab1Header>\n        <usa-icon [icon]="\'table\'"></usa-icon>\n      </ng-template>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 [tabHeader]="tab2Header">\n      <ng-template #tab2Header>\n        <i><b>Tab 2</b></i>\n      </ng-template>\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 [tabHeader]="tab3Header">\n      <ng-template #tab3Header>\n        <p class="text-red">Tab 3</p>\n      </ng-template>\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',styles:[tabs_custom_header_componentngResource_default()]})],TabsCustomHeaderComponent);var gsa_sam_ngx_uswds_icons=__webpack_require__("./node_modules/@gsa-sam/ngx-uswds-icons/fesm2022/gsa-sam-ngx-uswds-icons.mjs"),ngx_bootstrap_icons=__webpack_require__("./node_modules/ngx-bootstrap-icons/fesm2020/ngx-bootstrap-icons.mjs");let TabsCustomHeaderModule=class TabsCustomHeaderModule{};TabsCustomHeaderModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL,gsa_sam_ngx_uswds_icons.QX1,ngx_bootstrap_icons.o7e.pick({table:ngx_bootstrap_icons.Kzj})],declarations:[TabsCustomHeaderComponent],exports:[TabsCustomHeaderComponent],bootstrap:[TabsCustomHeaderComponent]})],TabsCustomHeaderModule);var tabs_disabled_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-disabled/tabs-disabled.component.scss?ngResource"),tabs_disabled_componentngResource_default=__webpack_require__.n(tabs_disabled_componentngResource);let TabsDisabledComponent=class TabsDisabledComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsDisabledComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-disabled",template:'<div class="tabs-wrapper">\n  <sds-tabs>\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2" [disabled]="true">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',styles:[tabs_disabled_componentngResource_default()]})],TabsDisabledComponent);let TabsDisabledModule=class TabsDisabledModule{};TabsDisabledModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsDisabledComponent],exports:[TabsDisabledComponent],bootstrap:[TabsDisabledComponent]})],TabsDisabledModule);var tabs_dynamic_generation_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-dynamic-generation/tabs-dynamic-generation.component.scss?ngResource"),tabs_dynamic_generation_componentngResource_default=__webpack_require__.n(tabs_dynamic_generation_componentngResource),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let TabsDynamicGenerationComponent=class TabsDynamicGenerationComponent{constructor(){this.additionalTabs=[],this.tabFormGroup=new fesm2022_forms.cw({tabHeader:new fesm2022_forms.NI(""),tabContent:new fesm2022_forms.NI("")})}createTab(){const tabHeader=this.tabFormGroup.get("tabHeader").value,tabContent=this.tabFormGroup.get("tabContent").value;tabHeader&&tabHeader.length&&tabContent&&tabContent.length&&this.additionalTabs.push({header:tabHeader,content:tabContent}),this.tabFormGroup.reset()}removeLastCreatedTab(){this.additionalTabs.length&&this.additionalTabs.pop()}};TabsDynamicGenerationComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-dynamic-generation",template:'<div class="tabs-wrapper">\n  <sds-tabs>\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n\n    <ng-container *ngFor="let tabPanel of additionalTabs">\n      <sds-tab-panel [tabHeader]="tabPanel.header">\n        <span [innerHTML]="tabPanel.content"></span>\n      </sds-tab-panel>\n    </ng-container>\n  </sds-tabs>\n</div>\n\n<form [formGroup]="tabFormGroup" (ngSubmit)="createTab()">\n  <label class="usa-label" for="tabHeaderInput">Tab Header</label>\n  <input class="usa-input" id="tabHeaderInput" formControlName="tabHeader" />\n\n  <label class="usa-label" for="tabContentInput">Tab Content</label>\n  <input class="usa-input" id="tabContentInput" formControlName="tabContent" />\n\n  <div class="margin-top-2">\n    <button class="usa-button" type="submit">Create Tab</button>\n    <button\n      class="usa-button usa-button--secondary"\n      type="button"\n      [disabled]="additionalTabs.length === 0"\n      (click)="removeLastCreatedTab()"\n    >\n      Remove Last Created Tab\n    </button>\n  </div>\n</form>\n',styles:[tabs_dynamic_generation_componentngResource_default()]})],TabsDynamicGenerationComponent);let TabsDynamicGenerationModule=class TabsDynamicGenerationModule{};TabsDynamicGenerationModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL,fesm2022_forms.UX,fesm2022_forms.u5],declarations:[TabsDynamicGenerationComponent],exports:[TabsDynamicGenerationComponent],bootstrap:[TabsDynamicGenerationComponent]})],TabsDynamicGenerationModule);let TabsIntroductionComponent=class TabsIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};TabsIntroductionComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-introduction",template:"<p>\n  Tabs allows multiple panels to be switched between.\n</p>\n"})],TabsIntroductionComponent);let TabsIntroductionModule=class TabsIntroductionModule{};TabsIntroductionModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsIntroductionComponent],exports:[TabsIntroductionComponent],bootstrap:[TabsIntroductionComponent]})],TabsIntroductionModule);var tabs_pre_change_event_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-pre-change-event/tabs-pre-change-event.component.scss?ngResource"),tabs_pre_change_event_componentngResource_default=__webpack_require__.n(tabs_pre_change_event_componentngResource);let TabsPreChangeEventComponent=class TabsPreChangeEventComponent{constructor(){}handlePreTabChange(destinationTab){console.log("preTabChange object:",destinationTab),this.selectedTab=destinationTab}static#_=this.ctorParameters=()=>[]};TabsPreChangeEventComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-pre-change-event",template:'<div class="tabs-wrapper">\n  <sds-tabs [(selectedTab)]="selectedTab" [interceptTabChange]="true" (preTabChange)="handlePreTabChange($event)">\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n',styles:[tabs_pre_change_event_componentngResource_default()]})],TabsPreChangeEventComponent);let TabsPreChangeEventModule=class TabsPreChangeEventModule{};TabsPreChangeEventModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsPreChangeEventComponent],exports:[TabsPreChangeEventComponent],bootstrap:[TabsPreChangeEventComponent]})],TabsPreChangeEventModule);var tabs_selected_tab_componentngResource=__webpack_require__("./libs/documentation/src/lib/storybook/tabs/tabs-selected-tab/tabs-selected-tab.component.scss?ngResource"),tabs_selected_tab_componentngResource_default=__webpack_require__.n(tabs_selected_tab_componentngResource);let TabsSelectedTabComponent=class TabsSelectedTabComponent{selectTab(tab){this.selectedTab=tab}};TabsSelectedTabComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sds-tabs-selected-tab",template:'<div class="tabs-wrapper">\n  <sds-tabs [(selectedTab)]="selectedTab">\n    <sds-tab-panel #tab1 tabHeader="Tab1">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </sds-tab-panel>\n    <sds-tab-panel #tab2 tabHeader="Tab2">\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem\n      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\n      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui\n      ratione voluptatem sequi nesciunt.\n    </sds-tab-panel>\n    <sds-tab-panel #tab3 tabHeader="Tab3">\n      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque\n      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa\n      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita\n      distinctio.\n    </sds-tab-panel>\n  </sds-tabs>\n</div>\n\n<div>\n  <button class="usa-button usa-button--secondary" (click)="selectTab(tab1)">Select Tab 1</button>\n  <button class="usa-button usa-button--secondary" (click)="selectTab(tab2)">Select Tab 2</button>\n  <button class="usa-button usa-button--secondary" (click)="selectTab(tab3)">Select Tab 3</button>\n</div>\n',styles:[tabs_selected_tab_componentngResource_default()]})],TabsSelectedTabComponent);let TabsSelectedTabModule=class TabsSelectedTabModule{};TabsSelectedTabModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,src.sL],declarations:[TabsSelectedTabComponent],exports:[TabsSelectedTabComponent],bootstrap:[TabsSelectedTabComponent]})],TabsSelectedTabModule);const disable={table:{disable:!0}},tabs_stories={title:"Components/Tabs",component:src.n4,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TabsConfigurableModule,TabsIntroductionModule,TabsPreChangeEventModule,TabsDisabledModule,TabsCustomHeaderModule,TabsAutomaticActivationModule,TabsCustomClassesModule,TabsSelectedTabModule,TabsAriaModule,TabsDynamicGenerationModule]})],argTypes:{preTabChange:disable,selectedTabChange:disable,changeSelectedTabPanel:disable,getNextTabLeft:disable,getNextTabRight:disable,isObj:disable,ngAfterContentInit:disable,ngOnChanges:disable,ngOnInit:disable,onKeyDown:disable,onTabClicked:disable,tabPanels:disable,focusedTab:disable,selectedTab:{options:["Tab 1","Tab 2"],control:{type:"select"}}}},Introduction=args=>({template:"<sds-tabs-introduction></sds-tabs-introduction>",props:{...args}});Introduction.parameters={options:{showPanel:!1},controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:{disable:!0}};const Configurable=args=>({template:"<sds-tabs-configurable\n    [automaticActivation]=automaticActivation\n    [tabClass]=tabClass\n    [interceptTabChange]=interceptTabChange\n    [selectedTab]=selectedTab\n  ></sds-tabs-configurable>",props:{...args}});Configurable.parameters={preview:{disable:!0},actions:{disable:!0}};const Aria=args=>({template:"<sds-tabs-aria></sds-tabs-aria>",props:{...args}});Aria.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-aria","TabsAriaModule","sds-tabs-aria"),stackblitzLink:(0,sandbox_utils.wX)("tabs","aria")};const AutomaticActivation=args=>({template:"<sds-tabs-automatic-activation></sds-tabs-automatic-activation>",props:{...args}});AutomaticActivation.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-automatic-activation","TabsAutomaticActivationModule","sds-tabs-automatic-activation"),stackblitzLink:(0,sandbox_utils.wX)("tabs","automatic-activation")};const CustomHeader=args=>({template:"<sds-tabs-custom-header></sds-tabs-custom-header>",props:{...args}});CustomHeader.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-custom-header","TabsCustomHeaderModule","sds-tabs-custom-header"),stackblitzLink:(0,sandbox_utils.wX)("tabs","custom-header")};const Disabled=args=>({template:"<sds-tabs-disabled></sds-tabs-disabled>",props:{...args}});Disabled.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-disabled","TabsDisabledModule","sds-tabs-disabled"),stackblitzLink:(0,sandbox_utils.wX)("tabs","disabled")};const DynamicGeneration=args=>({template:"<sds-tabs-dynamic-generation></sds-tabs-dynamic-generation>",props:{...args}});DynamicGeneration.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-dynamic-generation","TabsDynamicGenerationModule","sds-tabs-dynamic-generation"),stackblitzLink:(0,sandbox_utils.wX)("tabs","dynamic-generation")};const PreChangeEvent=args=>({template:"<sds-tabs-pre-change-event></sds-tabs-pre-change-event>",props:{...args}});PreChangeEvent.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-pre-change-event","TabsPreChangeEventModule","sds-tabs-pre-change-event"),stackblitzLink:(0,sandbox_utils.wX)("tabs","pre-change-event")};const CustomClasses=args=>({template:"<sds-tabs-custom-classes></sds-tabs-custom-classes>",props:{...args}});CustomClasses.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-custom-classes","TabsCustomClassesModule","sds-tabs-custom-classes"),stackblitzLink:(0,sandbox_utils.wX)("tabs","custom-classes")};const SelectedTab=args=>({template:"<sds-tabs-selected-tab></sds-tabs-selected-tab>",props:{...args}});SelectedTab.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.zg)("storybook/tabs/tabs-selected-tab","TabsSelectedTabModule","sds-tabs-selected-tab"),stackblitzLink:(0,sandbox_utils.wX)("tabs","selected-tab")};const __namedExportsOrder=["Introduction","Configurable","Aria","AutomaticActivation","CustomClasses","CustomHeader","Disabled","DynamicGeneration","PreChangeEvent","SelectedTab"];Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-introduction></sds-tabs-introduction>`,\n  props: {\n    ...args\n  }\n})",...Introduction.parameters?.docs?.source}}},Configurable.parameters={...Configurable.parameters,docs:{...Configurable.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-configurable\n    [automaticActivation]=automaticActivation\n    [tabClass]=tabClass\n    [interceptTabChange]=interceptTabChange\n    [selectedTab]=selectedTab\n  ></sds-tabs-configurable>`,\n  props: {\n    ...args\n  }\n})",...Configurable.parameters?.docs?.source}}},Aria.parameters={...Aria.parameters,docs:{...Aria.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-aria></sds-tabs-aria>`,\n  props: {\n    ...args\n  }\n})",...Aria.parameters?.docs?.source}}},AutomaticActivation.parameters={...AutomaticActivation.parameters,docs:{...AutomaticActivation.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-automatic-activation></sds-tabs-automatic-activation>`,\n  props: {\n    ...args\n  }\n})",...AutomaticActivation.parameters?.docs?.source}}},CustomClasses.parameters={...CustomClasses.parameters,docs:{...CustomClasses.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-custom-classes></sds-tabs-custom-classes>`,\n  props: {\n    ...args\n  }\n})",...CustomClasses.parameters?.docs?.source}}},CustomHeader.parameters={...CustomHeader.parameters,docs:{...CustomHeader.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-custom-header></sds-tabs-custom-header>`,\n  props: {\n    ...args\n  }\n})",...CustomHeader.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-disabled></sds-tabs-disabled>`,\n  props: {\n    ...args\n  }\n})",...Disabled.parameters?.docs?.source}}},DynamicGeneration.parameters={...DynamicGeneration.parameters,docs:{...DynamicGeneration.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-dynamic-generation></sds-tabs-dynamic-generation>`,\n  props: {\n    ...args\n  }\n})",...DynamicGeneration.parameters?.docs?.source}}},PreChangeEvent.parameters={...PreChangeEvent.parameters,docs:{...PreChangeEvent.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-pre-change-event></sds-tabs-pre-change-event>`,\n  props: {\n    ...args\n  }\n})",...PreChangeEvent.parameters?.docs?.source}}},SelectedTab.parameters={...SelectedTab.parameters,docs:{...SelectedTab.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-tabs-selected-tab></sds-tabs-selected-tab>`,\n  props: {\n    ...args\n  }\n})",...SelectedTab.parameters?.docs?.source}}}},"./libs/documentation/src/lib/storybook/tabs/tabs-aria/tabs-aria.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-automatic-activation/tabs-automatic-activation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-configurable/tabs-configurable.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-custom-classes/tabs-custom-classes.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".custom-class .sds-tabs__item {\n  color: red;\n  background-color: green;\n}\n\n.tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-custom-header/tabs-custom-header.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-disabled/tabs-disabled.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-dynamic-generation/tabs-dynamic-generation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-pre-change-event/tabs-pre-change-event.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/documentation/src/lib/storybook/tabs/tabs-selected-tab/tabs-selected-tab.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".tabs-wrapper {\n  width: 90%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);