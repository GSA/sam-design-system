import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-footer-sample',
  templateUrl: './footer-sample.component.html',
  styleUrls: ['./footer-sample.component.scss']
})
export class FooterSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modelFooter = {
    footerLogo: {
      text: 'General Services Administration',
      imageSourcePath: '/assets/sam-styles/img/sam/logo-gsa.svg',
      imageAltText: 'GSA Logo'
    },
    linkSections: [
      {
        text: 'About beta.SAM.gov', links: [
          { text: 'Explore Our Community', route: '/' },
          { text: 'Release Notes', route: '/' }
        ]
      },
      {
        text: 'Our Partners', links: [
          { text: 'Aquisition.gov', route: '/' },
          { text: 'USASpending.gov', route: '/' },
          { text: 'Grants.gov', route: '/' },
          { text: 'More Partners', route: '/' },
        ]
      },
      {
        text: 'Customer Service', links: [
          { text: 'Learning Center', route: '/' },
          { text: 'Contact Federal Service Desk', route: '/' },
          { text: 'Resources', route: '/' },
          { text: 'Freedom of Information Act', route: '/' },
        ]
      }
    ]
  };

}
