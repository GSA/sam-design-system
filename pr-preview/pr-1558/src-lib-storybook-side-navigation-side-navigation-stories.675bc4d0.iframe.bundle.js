"use strict";(self.webpackChunksam_design_system=self.webpackChunksam_design_system||[]).push([[2326],{"./libs/documentation/src/lib/storybook/side-navigation/side-navigation.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filters:()=>Filters,Introduction:()=>Introduction,Links:()=>Links,Selection:()=>Selection,__namedExportsOrder:()=>__namedExportsOrder,default:()=>side_navigation_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),sandbox_utils=__webpack_require__("./libs/documentation/src/sandbox/sandbox-utils.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SideNavigationIntroductionComponent=class SideNavigationIntroductionComponent{constructor(){}static#_=this.ctorParameters=()=>[]};SideNavigationIntroductionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-side-navigation-introduction",template:"<p>\n  Side navigation will allow user to add navigation panel and filter section\n</p>\n"})],SideNavigationIntroductionComponent);let SideNavigationIntroductionModule=class SideNavigationIntroductionModule{};SideNavigationIntroductionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[SideNavigationIntroductionComponent],bootstrap:[SideNavigationIntroductionComponent],exports:[SideNavigationIntroductionComponent]})],SideNavigationIntroductionModule);var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs");var router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");let SampleAutocompleteData=[{name:"Alabama",id:"AL"},{name:"Alaska",id:"AK"},{name:"American Samoa",id:"AS"},{name:"Arizona",id:"AZ"},{name:"Arkansas",id:"AR"},{name:"California",id:"CA"},{name:"Colorado",id:"CO"},{name:"Connecticut",id:"CT"},{name:"Delaware",id:"DE"},{name:"District Of Columbia",id:"DC"},{name:"Federated States Of Micronesia",id:"FM"},{name:"Florida",id:"FL"},{name:"Georgia",id:"GA"},{name:"Guam Gu",id:"GU"},{name:"Hawaii",id:"HI"},{name:"Idaho",id:"ID"},{name:"Illinois",id:"IL"},{name:"Indiana",id:"IN"},{name:"Iowa",id:"IA"},{name:"Kansas",id:"KS"},{name:"Kentucky",id:"KY"},{name:"Louisiana",id:"LA"},{name:"Maine",id:"ME"},{name:"Marshall Islands",id:"MH"},{name:"Maryland",id:"MD"},{name:"Massachusetts",id:"MA"},{name:"Michigan",id:"MI"},{name:"Minnesota",id:"MN"},{name:"Mississippi",id:"MS"},{name:"Missouri",id:"MO"},{name:"Montana",id:"MT"},{name:"Nebraska",id:"NE"},{name:"Nevada",id:"NV"},{name:"New Hampshire",id:"NH"},{name:"New Jersey",id:"NJ"},{name:"New Mexico",id:"NM"},{name:"New York",id:"NY"},{name:"North Carolina",id:"NC"},{name:"North Dakota",id:"ND"},{name:"Northern Mariana Islands",id:"MP"},{name:"Ohio",id:"OH"},{name:"Oklahoma",id:"OK"},{name:"Oregon",id:"OR"},{name:"Palau",id:"PW"},{name:"Pennsylvania",id:"PA"},{name:"Puerto Rico",id:"PR"},{name:"Rhode Island",id:"RI"},{name:"South Carolina",id:"SC"},{name:"South Dakota",id:"SD"},{name:"Tennessee",id:"TN"},{name:"Texas",id:"TX"},{name:"Utah",id:"UT"},{name:"Vermont",id:"VT"},{name:"Virgin Islands",id:"VI"},{name:"Virginia",id:"VA"},{name:"Washington",id:"WA"},{name:"West Virginia",id:"WV"},{name:"Wisconsin",id:"WI"},{name:"Wyoming",id:"WY"}],AutocompleteSampleDataService=class AutocompleteSampleDataService{constructor(){this.loadedData=SampleAutocompleteData}getDataByText(currentItems,searchValue){let itemsOb,items,data=(0,of.of)(this.loadedData);itemsOb=searchValue?data.pipe((0,map.T)((items=>items.filter((itm=>-1!==itm.name.indexOf(searchValue)||-1!==itm.subtext.indexOf(searchValue)))))):data,itemsOb.subscribe((result=>{items=result}));let totalItemCount=items.length,maxSectionPosition=currentItems+25;maxSectionPosition>totalItemCount&&(maxSectionPosition=totalItemCount);let returnItem={items:items.slice(currentItems,maxSectionPosition),totalItems:totalItemCount};return(0,of.of)(returnItem)}static#_=this.ctorParameters=()=>[]};AutocompleteSampleDataService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],AutocompleteSampleDataService);var src=__webpack_require__("./libs/packages/components/src/index.ts"),sam_formly_src=__webpack_require__("./libs/packages/sam-formly/src/index.ts"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");let FilterService=class FilterService{constructor(service){this.service=service,this.settings=new src.x0,this.autocompleteModel=new src.A,this.model={},this.form=new fesm2022_forms.J3({}),this.options={},this.keywordChangeSubject=new Subject.B,this.fields=[{key:"keyword",wrappers:["tabs"],props:{hideChildrenGroups:!0,label:"Keyword Search",description:'For more information on how to use our keyword search, visit our <a href="#"> help guide </a>',hideOptional:!0,tabClass:"sds-tabs--formly"},fieldGroup:[{props:{tabHeader:"Simple Search",label:"Simple Search",key:"simpleSearch"},id:"Tab1",defaultValue:{},fieldGroup:[{key:"keywordRadio",type:"radio",defaultValue:"anyWords",props:{label:"Keyword Radio",options:[{label:"Any Words",value:"anyWords"},{label:"All Words",value:"allWords"},{label:"Exact Match",value:"exactMatch"}]}},{key:"keywordTags",type:"autocomplete",props:{label:"Keyword Tags",expand:!1,configuration:{id:"keyword",primaryKeyField:"key",primaryTextField:"text",labelText:"Search Keyword",selectionMode:src.Qc.MULTIPLE,autocompletePlaceHolderText:"",isTagModeEnabled:!0}}}]},{id:"Tab2",defaultValue:{},props:{tabHeader:"Search Editor",key:"searchEditor",label:"Search Editor",submitButtonId:"booleanSearchSubmit"},fieldGroup:[{key:"keywordTextarea",type:sam_formly_src.XW.TEXTAREA,className:"display-block padding-left-2 padding-right-2",props:{label:"Keyword TextArea",placeholder:'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',required:!0}},{type:sam_formly_src.XW.BUTTON,id:"booleanSearchSubmit",key:"searchSubmit",className:"display-block margin-top-1 padding-left-2 padding-right-2",props:{label:"Submit Button",text:"Search",type:"submit"}}]}]},{key:"searchEntity",className:"margin-top-0",props:{label:"Entity",group:"accordion"},fieldGroup:[{key:"legalBusinessName",type:"input",props:{type:"text",hideOptional:!0,label:"Entity Name"}},{key:"uniqueEntityIdDuns",type:"input",props:{tagText:"DUNS",tagClass:"sds-tag--info-purple",label:"Unique Entity ID",hideOptional:!0,placeholder:"",min:13,max:40,inputType:"number",inputStyle:"error"}},{key:"uniqueEntityIdSam",type:"input",props:{tagText:"SAM",label:"Unique Entity ID",hideOptional:!0,placeholder:"",inputType:"text"}},{key:"cageCode",type:"input",props:{type:"text",hideOptional:!0,label:"CAGE / NCAGE"}}]},{key:"purposeOfRegistration",hide:!0,type:"multicheckbox",props:{label:"Purpose of Registration",group:"accordion",options:[{value:"allawards",label:"All Awards"},{value:"assistance-awards",label:"Federal Assistance Awards"},{value:"igt-awards",label:"Intragovernmental Transactions"}]}},{key:"startDate",type:"datepicker",props:{group:"panel",hideOptional:!0,label:"Date"}},{key:"entityType",type:"input",props:{label:"Entity Type",group:"accordion"}},{key:"socioEconomicStatus",type:"select",props:{label:"Socio-Economic Status",group:"accordion",options:[{label:"Contract Opportunities",value:"co"},{label:"Entity Information",value:"ei"},{label:"Assistance Listings",value:"al"},{label:"Contract Data",value:"cd"},{label:"Federal Hierarchy",value:"fh"},{label:"Wage Determination",value:"wd"}]}},{key:"serviceClassifications",props:{label:"NAICS and Product Service Codes",group:"accordion"},fieldGroup:[{key:"naicsCode",type:"input",props:{type:"text",hideOptional:!0,label:"NAICS Code",placeholder:"Ex: 110610"}},{key:"productServiceCode",type:"input",props:{label:"Product Service Code",hideOptional:!0,placeholder:"Ex: 3320 or L019"}}]},{key:"location",props:{label:"Location",group:"accordion"},fieldGroup:[{key:"country",type:"input",props:{type:"text",hideOptional:!0,label:"Country"}},{key:"zipCode",type:"input",props:{type:"text",hideOptional:!0,label:"Zip Code"}},{key:"state",type:"autocomplete",props:{label:"State / Province",hideOptional:!0,service:this.service,configuration:this.settings,model:this.autocompleteModel,modelChange:this.changes}},{key:"city",type:"input",props:{type:"text",hideOptional:!0,label:"City"}},{key:"congressionalDistrict",type:"input",props:{type:"text",hideOptional:!0,label:"Congressional District"}}]},{key:"status",props:{label:"Status",group:"accordion"},fieldGroup:[{key:"registrationStatus",type:"radio",props:{label:"Registration Status",options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}]}}]},{key:"entityStatus",props:{label:"Entity Status",group:"accordion"},fieldGroup:[{key:"statusId",id:"status",type:"multicheckbox",props:{label:"Entity Status",labelClass:"usa-sr-only",hideOptional:!0,options:[{value:"1,2",label:"Work in Progress Registration"},{value:"3",label:"Submitted Registration"},{value:"4",label:"Active Registration"},{value:"7",label:"Inactive Registration"},{value:"12",label:"ID Assigned"}]}}]},{key:"requestTypesOptions",props:{group:"panel",label:"Request Type Options"},fieldGroup:[{key:"requestType",id:"requestType",type:"radio",className:"margin-top-0",defaultValue:"myexclusions",props:{label:"Exclusions Type",hideOptional:!0,options:[{label:"Agency Exclusions",value:"myagencyexclusions",tooltipText:"Search results will contain all Agency Exclusions."},{label:"My Exclusions",value:"myexclusions",tooltipText:"Search results will contain all your Exclusions."}]}}]},{key:"expirationDate",props:{label:"Expiration Date",group:"accordion"},fieldGroup:[{key:"expirationDays",id:"exp",type:"radio",props:{label:"Expiration Date",labelClass:"margin-bottom-1",hideOptional:!0,defaultValue:null,options:[{label:"30 Days",value:"30"},{label:"60 Days",value:"60"},{label:"90 Days",value:"90"},{label:"All Registrations",value:null}]}}]}],this.setup()}changes(value){console.log(value)}setup(){this.settings.id="autocomplete1",this.settings.primaryKeyField="id",this.settings.primaryTextField="name",this.settings.secondaryTextField="subtext",this.settings.labelText="Autocomplete 1",this.settings.selectionMode=src.Qc.MULTIPLE,this.settings.autocompletePlaceHolderText="Alaska",this.settings.debounceTime=350}displayModifierFn(value,index){if(0===index)return value;const keywordRadio=this.model.keyword?.keywordRadio;return keywordRadio?"allWords"===keywordRadio?`and  ${value}`:"anyWords"===keywordRadio?`or  ${value}`:value:value}static#_=this.ctorParameters=()=>[{type:AutocompleteSampleDataService}]};FilterService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],FilterService);let navigationConfig={navigationLinks:[{id:"all",text:"All Domains",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation"},{id:"opportunites",text:"Contract Opportunities",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"opportunities"}},{id:"contractData",text:"Contract Data",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"contractdata"}},{id:"federalAssistance",text:"Federal Assistance",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",children:[{id:"assistancelist",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"assistancelist"},text:"Assistance Listings"},{id:"regionallocation",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",text:"Regional Locations"}]},{id:"entityInformation",text:"Entity Information",route:"/documentation/components/sidenavigation",queryParams:{index:"entityinfo"},mode:src.Ki.INTERNAL,children:[{id:"registrations",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"registrations"},text:"Entity Registrations"},{id:"disasterResponse",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"disasterresponse"},text:"Disaster Response Registry"},{id:"exclusions",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"exclusions"},text:"Exclusions"}]},{id:"federalHierarchy",route:"/documentation/components/sidenavigation",mode:src.Ki.INTERNAL,text:"Federal Hierarchy"},{id:"wageDeterminations",route:"/documentation/components/sidenavigation",queryParams:{index:"wdid"},mode:src.Ki.INTERNAL,text:"Wage Determinations",children:[{id:"searchWdByID",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"wdid"},text:"By Wage Determination ID"},{id:"dba",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"dba"},text:"Construction (DBA)"},{id:"sca",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"sca"},text:"Service Contracts (SCA)",children:[{id:"cba",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",text:"Collective Bargaining Agreements"}]}]}]},SideNavigationFiltersComponent=class SideNavigationFiltersComponent{constructor(filterService,router,activatedRoute){this.filterService=filterService,this.router=router,this.activatedRoute=activatedRoute,this.fields=[],this.filterModel={},this.filtersExpanded=!1,this.domainsExpanded=!0,this.responsiveDialogOptions={ariaLabel:"Search Filters"},this.filterChange$=new BehaviorSubject.t([]),this.navigationModel={navigationLinks:navigationConfig.navigationLinks,selectionMode:"SELECTION"},this.selectedPanel=this.navigationModel.navigationLinks[1]}ngOnInit(){this.fields=this.filterService.fields,this.filterModel=this.filterService.model,this.form=this.filterService.form,this.options=this.filterService.options,this.filterPanelConfig={title:"Filter By",fields:this.fields,model:this.filterModel,form:this.form,options:this.options,isHistoryEnabled:!0,advancedFilters:!0}}ngAfterViewInit(){this.filterChange$.subscribe((res=>{console.log("filter has changed")}))}onPanelSelection($event){this.selectedPanel=$event,this.domainsExpanded=!1,this.filtersExpanded=!0,console.log("Selected Domain",$event),this.router.navigate([],{queryParams:$event.queryParams,relativeTo:this.activatedRoute,queryParamsHandling:"merge"})}onSubPanelClicked($event){console.log("Sub Domain selected",$event),this.router.navigate([],{queryParams:$event.queryParams,relativeTo:this.activatedRoute,queryParamsHandling:"merge"})}static#_=this.ctorParameters=()=>[{type:FilterService},{type:router.Ix},{type:router.nX}];static#_2=this.propDecorators={filterComponent:[{type:core.ViewChild,args:["filters"]}]}};SideNavigationFiltersComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-side-navigation-filters",template:'<div class="desktop:grid-col-4 tablet-lg:grid-col-12 mobile-lg:grid-col-12 margin-bottom-3">\n  <sds-side-toolbar\n    [responsiveButtonText]="\'Advanced Search\'"\n    [responsiveButtonIcon]="\'chevron-left\'"\n    [responsiveSize]="1000"\n    [responsiveDialogOptions]="responsiveDialogOptions"\n    [showApply]="true"\n    [dialogTitleText]="\'Advanced Search\'"\n    [backButtonAria]="\'Close Advanced Search\'"\n  >\n    <ng-template #toolbarContent>\n      <div class="sds-card sds-card--collapsible" [ngClass]="{ \'sds-card--collapsed\': !domainsExpanded }">\n        <div\n          role="button"\n          class="sds-card__header sds-card__header--action"\n          [attr.aria-expanded]="domainsExpanded"\n          aria-controls="panelBody"\n          tabindex="0"\n          aria-label="Select Domain"\n          (click)="domainsExpanded = !domainsExpanded"\n          (keyup.enter)="domainsExpanded = !domainsExpanded"\n        >\n          <div class="sds-card__title">\n            Select Domain<br />\n            <span class="sds-card__subtitle">\n              {{ selectedPanel?.text }}\n            </span>\n          </div>\n\n          <div class="sds-card__action sds-card__collapse"></div>\n        </div>\n\n        <div class="sds-card__body sds-card__body--accent-cool" id="panelBody">\n          <sds-selection-panel\n            [model]="navigationModel"\n            [currentSelection]="selectedPanel"\n            (panelSelected)="onPanelSelection($event)"\n          >\n          </sds-selection-panel>\n        </div>\n      </div>\n\n      <div\n        class="sds-card"\n        *ngIf="selectedPanel && selectedPanel.children"\n        [ngClass]="{ \'display-none\': domainsExpanded }"\n      >\n        <div class="sds-card__body sds-card__body--accent-cool">\n          <sds-sub-panel [model]="selectedPanel.children" (subPanelClicked)="onSubPanelClicked($event)">\n          </sds-sub-panel>\n        </div>\n      </div>\n\n      <div class="sds-card sds-card--collapsible" [ngClass]="{ \'sds-card--collapsed\': !filtersExpanded }">\n        <div\n          class="sds-card__header sds-card__header--action"\n          role="button"\n          tabindex="0"\n          aria-controls="filtersBody"\n          [attr.aria-label]="\'Filter By\'"\n          [attr.aria-expanded]="filtersExpanded"\n          (click)="filtersExpanded = !filtersExpanded"\n          (keyup.enter)="filtersExpanded = !filtersExpanded"\n        >\n          <div class="sds-card__title">Filter By</div>\n          <div class="sds-card__action sds-card__collapse"></div>\n        </div>\n        <div class="sds-card__body sds-card__body--accent-cool" id="filtersBody">\n          <sds-filters\n            #filters\n            [options]="filterPanelConfig.options"\n            [advancedFilters]="filterPanelConfig.advancedFilters"\n            [form]="filterPanelConfig.form"\n            [fields]="filterPanelConfig.fields"\n            [model]="filterPanelConfig.model"\n            (filterChange)="filterChange$.next($event)"\n          >\n          </sds-filters>\n        </div>\n      </div>\n    </ng-template>\n  </sds-side-toolbar>\n</div>\n'})],SideNavigationFiltersComponent);var gsa_sam_ngx_uswds=__webpack_require__("./node_modules/@gsa-sam/ngx-uswds/fesm2022/gsa-sam-ngx-uswds.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs");let SideNavigationFiltersModule=class SideNavigationFiltersModule{};SideNavigationFiltersModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,testing.c,src.Cj,src.nw,src.Cj,gsa_sam_ngx_uswds.gU,fesm2022_forms.YN,src.Hc,sam_formly_src.IO,ngx_formly_core.qy.forRoot()],declarations:[SideNavigationFiltersComponent],bootstrap:[SideNavigationFiltersComponent],exports:[SideNavigationFiltersComponent]})],SideNavigationFiltersModule);let SideNavigationLinksComponent=class SideNavigationLinksComponent{constructor(){this.responsiveDialogOptions={ariaLabel:"Navigation Links"},this.navigationModel=navigationConfig}ngAfterViewInit(){this.sideNavigation&&this.sideNavigation.select(navigationConfig.navigationLinks[0].id)}onSideNavItemClicked($event){this.sideNavigation.select($event.id)}onSidenavDialogOpen($event){$event.afterOpened().toPromise().then((()=>{this.sideNavigation.select(navigationConfig.navigationLinks[0].id)}))}static#_=this.propDecorators={sideNavigation:[{type:core.ViewChild,args:["sideNavigation"]}]}};SideNavigationLinksComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-side-navigation-links",template:'<div class="desktop:grid-col-4 tablet-lg:grid-col-12 mobile-lg:grid-col-12 margin-bottom-3">\n  <sds-side-toolbar\n    [responsiveButtonText]="\'Links\'"\n    [responsiveDialogOptions]="responsiveDialogOptions"\n    [dialogTitleText]="\'Navigation Links\'"\n    [backButtonAria]="\'Close Navigation Links\'"\n    (responsiveDialog)="onSidenavDialogOpen($event)"\n  >\n    <ng-template #toolbarContent>\n      <sds-side-navigation\n        #sideNavigation\n        [model]="navigationModel"\n        (linkEvent)="onSideNavItemClicked($event)"\n      ></sds-side-navigation>\n    </ng-template>\n  </sds-side-toolbar>\n</div>\n'})],SideNavigationLinksComponent);let SideNavigationLinksModule=class SideNavigationLinksModule{};SideNavigationLinksModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.Cj,src.Hc],declarations:[SideNavigationLinksComponent],bootstrap:[SideNavigationLinksComponent],exports:[SideNavigationLinksComponent]})],SideNavigationLinksModule);let side_navigation_selection_config_navigationConfig={navigationLinks:[{id:"all",text:"All Domains",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation"},{id:"opportunites",text:"Contract Opportunities",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"opportunities"}},{id:"contractData",text:"Contract Data",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"contractdata"}},{id:"federalAssistance",text:"Federal Assistance",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",children:[{id:"assistancelist",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"assistancelist"},text:"Assistance Listings"},{id:"regionallocation",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",text:"Regional Locations"}]},{id:"entityInformation",text:"Entity Information",route:"/documentation/components/sidenavigation",queryParams:{index:"entityinfo"},mode:src.Ki.INTERNAL,children:[{id:"registrations",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"registrations"},text:"Entity Registrations"},{id:"disasterResponse",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"disasterresponse"},text:"Disaster Response Registry"},{id:"exclusions",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"exclusions"},text:"Exclusions"}]},{id:"federalHierarchy",route:"/documentation/components/sidenavigation",mode:src.Ki.INTERNAL,text:"Federal Hierarchy"},{id:"wageDeterminations",route:"/documentation/components/sidenavigation",queryParams:{index:"wdid"},mode:src.Ki.INTERNAL,text:"Wage Determinations",children:[{id:"searchWdByID",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"wdid"},text:"By Wage Determination ID"},{id:"dba",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"dba"},text:"Construction (DBA)"},{id:"sca",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",queryParams:{index:"sca"},text:"Service Contracts (SCA)",children:[{id:"cba",mode:src.Ki.INTERNAL,route:"/documentation/components/sidenavigation",text:"Collective Bargaining Agreements"}]}]}]},SideNavigationSelectionComponent=class SideNavigationSelectionComponent{constructor(){this.navigationModel={navigationLinks:side_navigation_selection_config_navigationConfig.navigationLinks,selectionMode:"SELECTION"},this.selectedPanel=this.navigationModel.navigationLinks[1]}onPanelSelection($event){this.selectedPanel=$event,console.log("Selected Domain",$event)}};SideNavigationSelectionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sds-side-navigation-selection",template:'<div class="desktop:grid-col-4 tablet-lg:grid-col-12 mobile-lg:grid-col-12 margin-bottom-3 margin-right-2">\n  <sds-side-toolbar>\n    <ng-template #toolbarContent>\n      <div class="sds-card">\n        <div class="sds-card__body sds-card__body--accent-cool">\n          <ul class="usa-sidenav usa-sidenav--styled">\n            <li\n              *ngFor="let panel of navigationModel.navigationLinks; let i = index"\n              class="usa-sidenav__item"\n              [ngClass]="{\n                \'usa-current\': selectedPanel?.id === panel.id,\n              }"\n            >\n              <ng-container [ngTemplateOutlet]="sidenavItem" [ngTemplateOutletContext]="{ $implicit: panel }">\n              </ng-container>\n              <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{ $implicit: panel }">\n              </ng-container>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </ng-template>\n  </sds-side-toolbar>\n</div>\n<ng-template #subPanelTemplate let-panelItem>\n  <div *ngFor="let pItem of panelItem.children; let i = index">\n    <ul class="usa-sidenav usa-sidenav--styled bg-base-lighter margin-x-0">\n      <li class="usa-sidenav__item padding-left-3" [ngClass]="{ \'usa-current\': selectedPanel?.id === pItem.id }">\n        <ng-container [ngTemplateOutlet]="sidenavItem" [ngTemplateOutletContext]="{ $implicit: pItem }"></ng-container>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n\n<ng-template #sidenavItem let-panel>\n  <ng-container>\n    <a\n      href="javascript:void(0);"\n      (click)="onPanelSelection(panel)"\n      class="display-flex justify-content-space-between"\n      [ngClass]="{ \'usa-sidenav__item--disabled\': panel.disabled }"\n    >\n      <span>\n        {{ panel.text }}\n      </span>\n    </a>\n  </ng-container>\n</ng-template>\n'})],SideNavigationSelectionComponent);var ngx_bootstrap_icons=__webpack_require__("./node_modules/ngx-bootstrap-icons/fesm2020/ngx-bootstrap-icons.mjs"),gsa_sam_ngx_uswds_icons=__webpack_require__("./node_modules/@gsa-sam/ngx-uswds-icons/fesm2022/gsa-sam-ngx-uswds-icons.mjs");let SideNavigationSelectionModule=class SideNavigationSelectionModule{};SideNavigationSelectionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,src.Cj,src.nw,src.Cj,gsa_sam_ngx_uswds.gU,fesm2022_forms.YN,src.Hc,sam_formly_src.IO,ngx_formly_core.qy.forRoot(),gsa_sam_ngx_uswds_icons.opy,ngx_bootstrap_icons.YWJ.pick({chevronLeft:ngx_bootstrap_icons.$L1,chevronRight:ngx_bootstrap_icons.KRm})],declarations:[SideNavigationSelectionComponent],bootstrap:[SideNavigationSelectionComponent],exports:[SideNavigationSelectionComponent]})],SideNavigationSelectionModule);const side_navigation_stories={title:"Components/Side Navigation",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,SideNavigationIntroductionModule,SideNavigationFiltersModule,SideNavigationLinksModule,SideNavigationSelectionModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})],argTypes:{}},Introduction=args=>({template:"<sds-side-navigation-introduction></sds-side-navigation-introduction>",props:{...args}});Introduction.parameters={controls:{disable:!0},actions:{disable:!0},sdsCodePreview:{disable:!0}};const Filters=args=>({template:"<sds-side-navigation-filters></sds-side-navigation-filters>",props:{...args}});Filters.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/side-navigation/side-navigation-filters","SideNavigationFiltersModule","sds-side-navigation-filters",[(0,sandbox_utils.Pg)("storybook/side-navigation/side-navigation-filters/side-navigation-filters.config.ts","ts",!1)]),stackblitzLink:(0,sandbox_utils.ft)("side-navigation","filters")};const Links=args=>({template:"<sds-side-navigation-links></sds-side-navigation-links>",props:{...args}});Links.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/side-navigation/side-navigation-links","SideNavigationLinkssModule","sds-side-navigation-links",[(0,sandbox_utils.Pg)("storybook/side-navigation/side-navigation-filters/side-navigation-filters.config.ts","ts",!1)]),stackblitzLink:(0,sandbox_utils.ft)("side-navigation","links")};const Selection=args=>({template:"<sds-side-navigation-selection></sds-side-navigation-selection>",props:{...args}});Selection.parameters={controls:{disable:!0,hideNoControlsWarning:!0},actions:{disable:!0},preview:(0,sandbox_utils.CC)("storybook/side-navigation/side-navigation-selection","SideNavigationSelectionModule","sds-side-navigation-selection",[(0,sandbox_utils.Pg)("storybook/side-navigation/side-navigation-selection/side-navigation-selection.config.ts","ts",!1)]),stackblitzLink:(0,sandbox_utils.ft)("side-navigation","selection")},Introduction.parameters={...Introduction.parameters,docs:{...Introduction.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-side-navigation-introduction></sds-side-navigation-introduction>`,\n  props: {\n    ...args\n  }\n})",...Introduction.parameters?.docs?.source}}},Filters.parameters={...Filters.parameters,docs:{...Filters.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-side-navigation-filters></sds-side-navigation-filters>`,\n  props: {\n    ...args\n  }\n})",...Filters.parameters?.docs?.source}}},Links.parameters={...Links.parameters,docs:{...Links.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-side-navigation-links></sds-side-navigation-links>`,\n  props: {\n    ...args\n  }\n})",...Links.parameters?.docs?.source}}},Selection.parameters={...Selection.parameters,docs:{...Selection.parameters?.docs,source:{originalSource:"args => ({\n  template: `<sds-side-navigation-selection></sds-side-navigation-selection>`,\n  props: {\n    ...args\n  }\n})",...Selection.parameters?.docs?.source}}};const __namedExportsOrder=["Introduction","Filters","Links","Selection"]}}]);