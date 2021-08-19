import { Component, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CdkPortalOutletAttachedRef, ComponentPortal } from '@angular/cdk/portal';
import { SdsLandingListComponent } from '@gsa-sam/layouts';
import { SdsVideoPlayerComponent } from '@gsa-sam/components';

@Component({
  selector: 'docs-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  // Tile buttons
  buttons = [
    {
      text: 'Sign in to get started',
      url: '/workspace',
      external: true,
      clickHandler: () => console.log('click'),
    },
    {
      text: 'Go to Contract Opportunities Federal home',
      url: './federal',
      classes: ['usa-button--secondary'],
    },
  ];

  // Search Form
  searchForm: FormGroup = new FormGroup({});

  model = {
    activeOnly: true,
  };

  fields = [
    {
      key: 'search',
      type: 'search',
      templateOptions: {
        required: true,
        searchSettings: {
          placeholder: 'e.g. W91QVN-17-R-0088, light bulbs',
          arialLabel: 'Search contract opportunities',
          size: 'large',
        },
        submitHandler: () => {
          console.log('Search submitted');
        },
      },
    },
    {
      key: 'activeOnly',
      type: 'checkbox',
      defaultValue: true,
      templateOptions: {
        label: 'Show active only',
        hideOptional: true,
      },
    },
  ];

  // Accordion
  accordion = [
    {
      head: {
        title: 'Get started searching contract opportunities',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'Use the search feature on SAM.gov',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0017298',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Follow contract opportunities',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0017560',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Save my searches',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0017561',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'file-earmark',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Use the interested vendors list',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0017569',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Use contract opportunities advanced search',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'Changing search filters',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029688',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Filter by notice types',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029689',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Filter by small business set-asides',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029690',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml:
                        'Filter by product and services (NAICS and PSC)',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0020214',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'play-btn',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Filter by place of performance',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029691',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Search vendor collaboration opportunities',
                      routerLink:
                        '/search/?index=opp&page=1&sort=-relevance&sfm%5Bstatus%5D%5Bis_active%5D=true&sfm%5Bkeywords%5D%5B0%5D%5Bkey%5D=Vendor%20Collaboration&sfm%5Bkeywords%5D%5B0%5D%5Bvalue%5D=Vendor%20Collaboration',
                    },
                    icon: {
                      icon: 'search',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Search small business events',
                      routerLink:
                        '/search/?index=opp&page=1&sort=-relevance&sfm%5Bstatus%5D%5Bis_active%5D=true&sfm%5Bkeywords%5D%5B0%5D%5Bkey%5D=Small%20Business%20Event&sfm%5Bkeywords%5D%5B0%5D%5Bvalue%5D=Small%20Business%20Event',
                    },
                    icon: {
                      icon: 'search',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  ];

  cards = [
    {
      head: {
        title: 'Do I need a user account?',
      },
      body: {
        intro:
          'Anyone may search contract opportunities without an account. A user account lets you save searches, follow changes to opportunities, and join interested vendor lists.',
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'Get started with login.gov',
                      href:
                        'https://login.gov/help/creating-an-account/how-to-create-an-account/',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'file-earmark',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Sign up at login.gov',
                      href: 'https://secure.login.gov/',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'file-earmark',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Help',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'Frequently Asked Questions',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_category&kb_category=7e00c7041b4f64108aa3a8eae54bcb0f&kb_id=f66d8e6cdb76d4100d73f81d0f9619c6',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Glossary Terms',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_category&kb_category=2820cf041b4f64108aa3a8eae54bcbb6&kb_id=f66d8e6cdb76d4100d73f81d0f9619c6',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'book',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Videos',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_category&kb_category=a5100b041b4f64108aa3a8eae54bcbdc&kb_id=f66d8e6cdb76d4100d73f81d0f9619c6',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'play-btn',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Get started with login.gov',
                      href:
                        'https://login.gov/help/creating-an-account/how-to-create-an-account/',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'file-earmark',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Video: Basic Searching',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsVideoPlayerComponent),
            inputs: {
              VPConfiguration: {
                width: '100%',
                sourceMp4:
                  'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4',
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Opportunities Reports',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'How to run a DataBank report',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029692',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Go to DataBank reports',
                      routerLink: '/reports/opp/standard',
                    },
                    icon: {
                      icon: 'arrow-right-circle-green',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Download Data Files',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'How to use contract opportunities data files',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029693',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'file-earmark',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Go to contract opportunities data',
                      routerLink: '/data-services/Contract%20Opportunities',
                    },
                    icon: {
                      icon: 'arrow-right-circle-green',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Go to <strong>Buy American Act</strong> data',
                      routerLink:
                        '/data-services/Contract%20Opportunities/Buy%20American%20Act',
                    },
                    icon: {
                      icon: 'arrow-right-circle-green',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'Connect to Data Services',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                iconList: true,
                items: [
                  {
                    link: {
                      innerHtml: 'How to use data services',
                      href:
                        'https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0029694',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'question-circle',
                      prefix: 'bs',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Go to public contract opportunties API',
                      href:
                        'https://open.gsa.gov/api/get-opportunities-public-api/',
                      target: '_blank',
                    },
                    icon: {
                      icon: 'arrow-right-circle-green',
                      prefix: 'bs',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      head: {
        title: 'External Resources',
      },
      body: {
        content: [
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                title: 'Policy and Regulations',
                intro: 'Learn about policy that guides federal contracting.',
                items: [
                  {
                    link: {
                      innerHtml: 'Acquisition.gov',
                      href: 'https://acquisition.gov',
                      target: '_blank',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Federal Acquistion Regulation (FAR)',
                      href: 'https://www.acquisition.gov/browse/index/far',
                      target: '_blank',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Supplemental Agency Regulations \n',
                      href: 'https://www.acquisition.gov/content/regulations',
                      target: '_blank',
                    },
                  },
                ],
              },
            },
          },
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                title: 'Small Business Resources',
                intro:
                  'Find support and training to help orient small businesses to federal contracting.',
                items: [
                  {
                    link: {
                      innerHtml:
                        'Procurement Technical Assistance Centers (PTACs)',
                      href: 'https://www.aptac-us.org/',
                      target: '_blank',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'Dynamic Small Business Search',
                      href: 'http://web.sba.gov/pro-net/search/dsp_dsbs.cfm',
                      target: '_blank',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'SBA Subcontracting Network (SubNet)',
                      href:
                        'https://eweb1.sba.gov/subnet/client/dsp_Landing.cfm',
                      target: '_blank',
                    },
                  },
                  {
                    link: {
                      innerHtml: 'SBA Commercial Market Representative (CMR)',
                      href:
                        'https://www.sba.gov/federal-contracting/counseling-help',
                      target: '_blank',
                    },
                  },
                ],
              },
            },
          },
          {
            component: new ComponentPortal(SdsLandingListComponent),
            inputs: {
              list: {
                title: 'Forecasting',
                intro:
                  'Link to individual agency recurring procurement forecasts.',
                items: [
                  {
                    link: {
                      innerHtml: 'Federal Agency Business Forecasts',
                      href:
                        'https://www.acquisition.gov/?q=procurement-forecasts',
                      target: '_blank',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      layout: {
        grid: 'grid-col-12',
      },
    },
  ];

  inputs(ref: CdkPortalOutletAttachedRef, componentInputs = {}) {
    ref = ref as ComponentRef<any>;
    for (const [input, value] of Object.entries(componentInputs)) {
      ref.instance[input] = value;
    }
  }
}
