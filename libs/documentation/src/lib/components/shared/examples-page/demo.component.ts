import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fab } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'documentation-widget-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
})
export class DocumentationWidgetDemoComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() id: string;
  @Input() code: string;
  @Input() markup: string;
  @Input() readme: string;
  @Input() path: string;
  @Input() files: { name: string; source: string }[];
  @Input() showCode = false;

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
}
