'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sam-design-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link">PaginationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaginationModule-b922cf3d7cca2aa50dd025afa045f0bc"' : 'data-target="#xs-components-links-module-PaginationModule-b922cf3d7cca2aa50dd025afa045f0bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaginationModule-b922cf3d7cca2aa50dd025afa045f0bc"' :
                                            'id="xs-components-links-module-PaginationModule-b922cf3d7cca2aa50dd025afa045f0bc"' }>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsAccordionModule.html" data-type="entity-link">SdsAccordionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' : 'data-target="#xs-components-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' :
                                            'id="xs-components-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' }>
                                            <li class="link">
                                                <a href="components/SdsAccordionItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsAccordionItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsAccordionItemHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsAccordionItemHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' : 'data-target="#xs-directives-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' :
                                        'id="xs-directives-links-module-SdsAccordionModule-df07d1d617294049e624c57960e3b586"' }>
                                        <li class="link">
                                            <a href="directives/SdsAccordionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsAccordionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SdsAccordionItemContentDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsAccordionItemContentDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsAutocompleteModule.html" data-type="entity-link">SdsAutocompleteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsAutocompleteModule-bb64d2b1f11c0192ae5c051743ae8940"' : 'data-target="#xs-components-links-module-SdsAutocompleteModule-bb64d2b1f11c0192ae5c051743ae8940"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsAutocompleteModule-bb64d2b1f11c0192ae5c051743ae8940"' :
                                            'id="xs-components-links-module-SdsAutocompleteModule-bb64d2b1f11c0192ae5c051743ae8940"' }>
                                            <li class="link">
                                                <a href="components/SDSAutocompleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDSAutocompleteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsAutocompleteSearchModule.html" data-type="entity-link">SdsAutocompleteSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsAutocompleteSearchModule-b34eb38410968443f2b961959e767c06"' : 'data-target="#xs-components-links-module-SdsAutocompleteSearchModule-b34eb38410968443f2b961959e767c06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsAutocompleteSearchModule-b34eb38410968443f2b961959e767c06"' :
                                            'id="xs-components-links-module-SdsAutocompleteSearchModule-b34eb38410968443f2b961959e767c06"' }>
                                            <li class="link">
                                                <a href="components/SDSAutocompleteSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDSAutocompleteSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SDSClickOutsideModule.html" data-type="entity-link">SDSClickOutsideModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SDSClickOutsideModule-f67c19edc18870901247dd337aa079d3"' : 'data-target="#xs-directives-links-module-SDSClickOutsideModule-f67c19edc18870901247dd337aa079d3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SDSClickOutsideModule-f67c19edc18870901247dd337aa079d3"' :
                                        'id="xs-directives-links-module-SDSClickOutsideModule-f67c19edc18870901247dd337aa079d3"' }>
                                        <li class="link">
                                            <a href="directives/SDSClickOutsideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDSClickOutsideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsCollapseModule.html" data-type="entity-link">SdsCollapseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsCollapseModule-f02ae153e14c29fb138f09973a06f2b4"' : 'data-target="#xs-directives-links-module-SdsCollapseModule-f02ae153e14c29fb138f09973a06f2b4"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsCollapseModule-f02ae153e14c29fb138f09973a06f2b4"' :
                                        'id="xs-directives-links-module-SdsCollapseModule-f02ae153e14c29fb138f09973a06f2b4"' }>
                                        <li class="link">
                                            <a href="directives/CollapseDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapseDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsDialogModule.html" data-type="entity-link">SdsDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' : 'data-target="#xs-components-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' :
                                            'id="xs-components-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                            <li class="link">
                                                <a href="components/SdsDialogContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' : 'data-target="#xs-directives-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' :
                                        'id="xs-directives-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                        <li class="link">
                                            <a href="directives/SdsDialogActionsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogActionsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SdsDialogCloseDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogCloseDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SdsDialogContentDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SdsDialogSubtitleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogSubtitleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SdsDialogTitleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsDialogTitleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' : 'data-target="#xs-injectables-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' :
                                        'id="xs-injectables-links-module-SdsDialogModule-332ea3cc1b781c4c970f1bff47422559"' }>
                                        <li class="link">
                                            <a href="injectables/SdsDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SdsDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsDirectivesModule.html" data-type="entity-link">SdsDirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsDirectivesModule-37b3e97db727d9f439f58424a767007b"' : 'data-target="#xs-directives-links-module-SdsDirectivesModule-37b3e97db727d9f439f58424a767007b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsDirectivesModule-37b3e97db727d9f439f58424a767007b"' :
                                        'id="xs-directives-links-module-SdsDirectivesModule-37b3e97db727d9f439f58424a767007b"' }>
                                        <li class="link">
                                            <a href="directives/ExternalLinkDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExternalLinkDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsFooterModule.html" data-type="entity-link">SdsFooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsFooterModule-672f4c0c84fe19772477ac51a4150a4d"' : 'data-target="#xs-components-links-module-SdsFooterModule-672f4c0c84fe19772477ac51a4150a4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsFooterModule-672f4c0c84fe19772477ac51a4150a4d"' :
                                            'id="xs-components-links-module-SdsFooterModule-672f4c0c84fe19772477ac51a4150a4d"' }>
                                            <li class="link">
                                                <a href="components/SdsFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsFooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsHeaderModule.html" data-type="entity-link">SdsHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsHeaderModule-26373ee582eda7a84381f3a9a873f76d"' : 'data-target="#xs-components-links-module-SdsHeaderModule-26373ee582eda7a84381f3a9a873f76d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsHeaderModule-26373ee582eda7a84381f3a9a873f76d"' :
                                            'id="xs-components-links-module-SdsHeaderModule-26373ee582eda7a84381f3a9a873f76d"' }>
                                            <li class="link">
                                                <a href="components/SdsHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsTopBannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsTopBannerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsMenuModule.html" data-type="entity-link">SdsMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' : 'data-target="#xs-components-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' :
                                            'id="xs-components-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' }>
                                            <li class="link">
                                                <a href="components/SdsMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsMenuHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsMenuHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsMenuItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsMenuItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' : 'data-target="#xs-directives-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' :
                                        'id="xs-directives-links-module-SdsMenuModule-07b134b3c755537b05149135f29a1dc9"' }>
                                        <li class="link">
                                            <a href="directives/SdsMenuTriggerForDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsMenuTriggerForDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsObserversModule.html" data-type="entity-link">SdsObserversModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsObserversModule-192e2cce0123af4e8189db7246bdc2af"' : 'data-target="#xs-directives-links-module-SdsObserversModule-192e2cce0123af4e8189db7246bdc2af"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsObserversModule-192e2cce0123af4e8189db7246bdc2af"' :
                                        'id="xs-directives-links-module-SdsObserversModule-192e2cce0123af4e8189db7246bdc2af"' }>
                                        <li class="link">
                                            <a href="directives/SdsObserveWidthDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsObserveWidthDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsPageModule.html" data-type="entity-link">SdsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsPageModule-943689a5c91bd329b1df2277ea540a43"' : 'data-target="#xs-components-links-module-SdsPageModule-943689a5c91bd329b1df2277ea540a43"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsPageModule-943689a5c91bd329b1df2277ea540a43"' :
                                            'id="xs-components-links-module-SdsPageModule-943689a5c91bd329b1df2277ea540a43"' }>
                                            <li class="link">
                                                <a href="components/SdsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsPageOptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsPageOptionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsPopupModule.html" data-type="entity-link">SdsPopupModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsPopupModule-292fdb647fef587a416b0d029e9f265d"' : 'data-target="#xs-directives-links-module-SdsPopupModule-292fdb647fef587a416b0d029e9f265d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsPopupModule-292fdb647fef587a416b0d029e9f265d"' :
                                        'id="xs-directives-links-module-SdsPopupModule-292fdb647fef587a416b0d029e9f265d"' }>
                                        <li class="link">
                                            <a href="directives/SdsPopupDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsPopupDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsSearchModule.html" data-type="entity-link">SdsSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsSearchModule-6e1b6485aa01895e10a6261a1cdeea0e"' : 'data-target="#xs-components-links-module-SdsSearchModule-6e1b6485aa01895e10a6261a1cdeea0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsSearchModule-6e1b6485aa01895e10a6261a1cdeea0e"' :
                                            'id="xs-components-links-module-SdsSearchModule-6e1b6485aa01895e10a6261a1cdeea0e"' }>
                                            <li class="link">
                                                <a href="components/SdsSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsSearchResultListModule.html" data-type="entity-link">SdsSearchResultListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsSearchResultListModule-f793372c72e0efb18fff141dc426bf7e"' : 'data-target="#xs-components-links-module-SdsSearchResultListModule-f793372c72e0efb18fff141dc426bf7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsSearchResultListModule-f793372c72e0efb18fff141dc426bf7e"' :
                                            'id="xs-components-links-module-SdsSearchResultListModule-f793372c72e0efb18fff141dc426bf7e"' }>
                                            <li class="link">
                                                <a href="components/SdsSearchResultListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsSearchResultListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsSelectedResultsModule.html" data-type="entity-link">SdsSelectedResultsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsSelectedResultsModule-1e274adb4310da21ed46f49f4ba776ff"' : 'data-target="#xs-components-links-module-SdsSelectedResultsModule-1e274adb4310da21ed46f49f4ba776ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsSelectedResultsModule-1e274adb4310da21ed46f49f4ba776ff"' :
                                            'id="xs-components-links-module-SdsSelectedResultsModule-1e274adb4310da21ed46f49f4ba776ff"' }>
                                            <li class="link">
                                                <a href="components/SDSSelectedResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDSSelectedResultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsSideNavigationModule.html" data-type="entity-link">SdsSideNavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsSideNavigationModule-e7e08444722fc2ded76ea11176d82d14"' : 'data-target="#xs-components-links-module-SdsSideNavigationModule-e7e08444722fc2ded76ea11176d82d14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsSideNavigationModule-e7e08444722fc2ded76ea11176d82d14"' :
                                            'id="xs-components-links-module-SdsSideNavigationModule-e7e08444722fc2ded76ea11176d82d14"' }>
                                            <li class="link">
                                                <a href="components/SdsSideNavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsSideNavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsTabOutsideModule.html" data-type="entity-link">SdsTabOutsideModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsTabOutsideModule-706ed403e2724bfbecb56874eff1243f"' : 'data-target="#xs-directives-links-module-SdsTabOutsideModule-706ed403e2724bfbecb56874eff1243f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsTabOutsideModule-706ed403e2724bfbecb56874eff1243f"' :
                                        'id="xs-directives-links-module-SdsTabOutsideModule-706ed403e2724bfbecb56874eff1243f"' }>
                                        <li class="link">
                                            <a href="directives/SDSTabOutsideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDSTabOutsideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsToolbarModule.html" data-type="entity-link">SdsToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' : 'data-target="#xs-components-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' :
                                            'id="xs-components-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' }>
                                            <li class="link">
                                                <a href="components/SdsToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SdsToolbarHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsToolbarHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' : 'data-target="#xs-directives-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' :
                                        'id="xs-directives-links-module-SdsToolbarModule-1650cddaa16a8153975a767c6cb0d538"' }>
                                        <li class="link">
                                            <a href="directives/SdsToolbarExpandDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsToolbarExpandDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsTruncateModule.html" data-type="entity-link">SdsTruncateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' : 'data-target="#xs-components-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' :
                                            'id="xs-components-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' }>
                                            <li class="link">
                                                <a href="components/SdsTruncatedTextContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsTruncatedTextContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' : 'data-target="#xs-directives-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' :
                                        'id="xs-directives-links-module-SdsTruncateModule-cfdc200ecb06e0ddcbefeeee51ab97ba"' }>
                                        <li class="link">
                                            <a href="directives/SdsTruncateTextByLineDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsTruncateTextByLineDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SdsVideoPlayerModule.html" data-type="entity-link">SdsVideoPlayerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SdsVideoPlayerModule-b670aed11e64f25ada8618bd7d6da14a"' : 'data-target="#xs-components-links-module-SdsVideoPlayerModule-b670aed11e64f25ada8618bd7d6da14a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SdsVideoPlayerModule-b670aed11e64f25ada8618bd7d6da14a"' :
                                            'id="xs-components-links-module-SdsVideoPlayerModule-b670aed11e64f25ada8618bd7d6da14a"' }>
                                            <li class="link">
                                                <a href="components/SdsVideoPlayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SdsVideoPlayerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FooterLink.html" data-type="entity-link">FooterLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/FooterLinkSection.html" data-type="entity-link">FooterLinkSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/FooterModel.html" data-type="entity-link">FooterModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeaderHome.html" data-type="entity-link">HeaderHome</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeaderNavigationLink.html" data-type="entity-link">HeaderNavigationLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeaderSecondaryLink.html" data-type="entity-link">HeaderSecondaryLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyHelper.html" data-type="entity-link">KeyHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigationHelper.html" data-type="entity-link">NavigationHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigationLink.html" data-type="entity-link">NavigationLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationConfigurationModel.html" data-type="entity-link">PaginationConfigurationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationModel.html" data-type="entity-link">PaginationModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSAutocompletelConfiguration.html" data-type="entity-link">SDSAutocompletelConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSAutocompleteSearchConfiguration.html" data-type="entity-link">SDSAutocompleteSearchConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/SdsDialogConfig.html" data-type="entity-link">SdsDialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SdsDialogRef.html" data-type="entity-link">SdsDialogRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSHiercarchicalServiceSearchItem.html" data-type="entity-link">SDSHiercarchicalServiceSearchItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSSelectedItemModel.html" data-type="entity-link">SDSSelectedItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSSelectedItemModelHelper.html" data-type="entity-link">SDSSelectedItemModelHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SDSSelectedResultConfiguration.html" data-type="entity-link">SDSSelectedResultConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/SideNavigationModel.html" data-type="entity-link">SideNavigationModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogPosition.html" data-type="entity-link">DialogPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FooterLogo.html" data-type="entity-link">FooterLogo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderModel.html" data-type="entity-link">HeaderModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavigationLink.html" data-type="entity-link">INavigationLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InitPxVideoConfig.html" data-type="entity-link">InitPxVideoConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SdsAccordionBase.html" data-type="entity-link">SdsAccordionBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SDSAutocompleteServiceInterface.html" data-type="entity-link">SDSAutocompleteServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SDSHiercarchicalServiceResult.html" data-type="entity-link">SDSHiercarchicalServiceResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SdsMenuInterface.html" data-type="entity-link">SdsMenuInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SdsTruncateTextData.html" data-type="entity-link">SdsTruncateTextData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Selectable.html" data-type="entity-link">Selectable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VPInterface.html" data-type="entity-link">VPInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});