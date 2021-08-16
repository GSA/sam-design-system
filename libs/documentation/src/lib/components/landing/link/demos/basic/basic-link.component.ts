import { Component } from '@angular/core';

@Component({
  templateUrl: './basic-link.component.html',
  selector: `docs-basic-link-demo`,
})
export class BasicLinkComponent {
  externalLink = {
    href: 'http://google.com',
    target: '_blank',
    innerHtml: 'External Link',
  }

  internalLink = {
    routerLink: 'internal-link',
    innerHtml: 'Internal Link',
  }
}
