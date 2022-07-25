import { Injectable } from '@angular/core';

export interface DocumentationDemoConfig {
  title: string;
  code?: string;
  markup?: string;
  type: any;
  files?: Array<{ [name: string]: string }>;
  showCode?: boolean;
}

export interface DocumentationDemoListConfig {
  [demo: string]: DocumentationDemoConfig;
}

export interface DocumentationDemoOverviewConfig {
  [anchor: string]: string;
}

@Injectable({ providedIn: 'root' })
export class DocumentationDemoList {
  private _demos: { [widget: string]: DocumentationDemoListConfig } = {};

  private _overviews: {
    [widget: string]: DocumentationDemoOverviewConfig;
  } = {};

  register(
    widget: string,
    list: DocumentationDemoListConfig,
    overview?: DocumentationDemoOverviewConfig
  ) {
    this._demos[widget] = list;
    if (overview) {
      this._overviews[widget] = overview;
    }
  }

  getDemos(widget: string) {
    return this._demos[widget];
  }

  getOverviewSections(widget: string) {
    const overview = this._overviews[widget];
    const sections = {};
    if (overview) {
      Object.keys(overview).forEach((fragment) => {
        sections[fragment] = { fragment, title: overview[fragment] };
      });
    }
    return sections;
  }
}
