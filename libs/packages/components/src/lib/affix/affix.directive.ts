import { AfterViewInit, Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'input[prefix], input[suffix]'
})
export class SdsInputAffixDirective implements AfterViewInit {

  @Input() prefix: TemplateRef<any> | string;
  @Input() suffix: TemplateRef<any> | string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef) {
  }

  ngAfterViewInit(){

    const parent = this.renderer.parentNode(this.el.nativeElement);

    //Need next sibling to ensure generated usa-input-group is inserted into the same place on the page and input is expected to be
    const nextSibling = this.renderer.nextSibling(this.el.nativeElement);

    let prefixElement, suffixElement;
    if(this.prefix){
      prefixElement = this.handleAffix(this.prefix, 'usa-input-prefix')
    }
    if(this.suffix){
      suffixElement = this.handleAffix(this.suffix, 'usa-input-suffix')
    }
    // Return early if neither prefix nor suffix provided
    if(!this.prefix && !this.suffix){
      return;
    }

    const inputGroupDiv = document.createElement('div');
    this.renderer.addClass(inputGroupDiv,'usa-input-group')

    // Apply input class in case only directive was applied
    this.renderer.addClass(this.el.nativeElement, 'usa-input')

    if(this.prefix){
      this.renderer.appendChild(inputGroupDiv, prefixElement);
    }
    this.renderer.appendChild(inputGroupDiv, this.el.nativeElement);
    if(this.suffix){
      this.renderer.appendChild(inputGroupDiv, suffixElement);
    }

    this.renderer.insertBefore(parent, inputGroupDiv, nextSibling)

  }

  /**
   *
   * @param affix Template or string to be displayed as prefix or suffix.
   * @param affixClass USWDS class to apply to element
   */
  handleAffix(affix: TemplateRef<any> | string, affixClass: string){
    let affixView, affixElement;
    if(affix instanceof TemplateRef){
      affixView = this.viewContainer.createEmbeddedView(affix);
      affixElement = affixView.rootNodes[0];
    }

    // If text passed into template, need to wrap in element for USWDS CSS to kick in.
    if(affixView?.rootNodes[0].nodeName === '#text'){
      const div = document.createElement('div');
      this.renderer.appendChild(div, affixElement);
      affixElement = div;
    // If string passed in, insert into element for CSS to apply to
    } else if(typeof affix === 'string'){
      const div = document.createElement('div');
      div.innerText = affix;
      affixElement = div;
    }
    this.renderer.addClass(affixElement, affixClass)
    return affixElement;
  }



}
