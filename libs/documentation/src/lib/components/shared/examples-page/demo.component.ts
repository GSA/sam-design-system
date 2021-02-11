import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fab } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'documentation-widget-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DocumentationWidgetDemoComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() id: string;
  @Input() code: string;
  @Input() markup: string;
  @Input() module: string;
  @Input() readme: string;
  @Input() path: string;
  @Input() files: { name: string; source: string }[];
  @Input() showCode = false;
  viewMode = 'code';
  tabs: any[] = [
    { name: 'Source Code', type: 'code' },
    { name: 'Template Markup', type: 'markUp' },
    { name: 'Module', type: 'module' },
  ];

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, sds);
  }

  getGithubLink() {
    const baseRepoURL = 'https://github.com/GSA/sam-design-system/tree/master/';
    if (this.path) {
      return baseRepoURL + this.path;
    }
    return false;
  }

  tabType(name: string) {
    const ext = name.split('.').pop();
    return (
      {
        html: 'HTML',
        scss: 'Style (SCSS)',
        css: 'Style (CSS)',
        ts: 'Typescript',
      }[ext] || 'Code'
    );
  }

  getStackblitzLink() {
    if (!this.path) {
      throw new Error(
        `Demo component ${this.component} is missing path value in module setup`
      );
    }

    // example: path = libs/documentation/src/lib/components/search/demos/optional
    const splitPath = this.path.split('/');

    // in Example, gets 'search'
    const outerDirectory = splitPath[splitPath.length - 3];

    // in Example, gets 'optional' - assume a 'demos' directory will always be present in between
    const innerDirectory = splitPath[splitPath.length - 1];
    const filePath = `assets/stackblitzes/${outerDirectory}/${innerDirectory}/stackblitz.html`;
    return filePath;
  }
}
