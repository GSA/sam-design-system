import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';

import { SdsIconComponent } from './icon.component';
@Component({
  template: `
    <sds-icon [icon]="['bs', 'alarm']"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [rotate]="90"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [rotate]="180"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [rotate]="270"></sds-icon>
  `
})
class IconRotationComponent {}

describe('IconComponent Rotation', () => {
  let component: IconRotationComponent;
  let fixture: ComponentFixture<IconRotationComponent>;
  let iconRotationEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsIconComponent, IconRotationComponent ],
      imports: [FontAwesomeModule, NgxBootstrapIconsModule.pick(allIcons)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRotationComponent);
    component = fixture.componentInstance;
    iconRotationEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first boostrap icon should have rotate-0 class applied', () => {
    const firstSdsIcon = iconRotationEl.children[0];
    const baselineIcon = firstSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('rotate-0')).toBe(true);
  });
  it('second boostrap icon should have rotate-90 class applied', () => {
    const secondSdsIcon = iconRotationEl.children[1];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('rotate-90')).toBe(true);
  });
  it('third boostrap icon should have rotate-180 class applied', () => {
    const secondSdsIcon = iconRotationEl.children[2];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('rotate-180')).toBe(true);
  });
  it('fourth boostrap icon should have rotate-270 class applied', () => {
    const secondSdsIcon = iconRotationEl.children[3];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('rotate-270')).toBe(true);
  });
});



@Component({
  template: `
    <sds-icon [icon]="['bs', 'alarm']"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'xs'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'sm'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'lg'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'2x'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'3x'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'5x'"></sds-icon>
    <sds-icon [icon]="['bs', 'alarm']" [size]="'7x'"></sds-icon>

  `
})
class IconScalingComponent {}

describe('IconComponent Scaling', () => {
  let component: IconScalingComponent;
  let fixture: ComponentFixture<IconScalingComponent>;
  let iconScalingEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsIconComponent, IconScalingComponent ],
      imports: [FontAwesomeModule, NgxBootstrapIconsModule.pick(allIcons)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconScalingComponent);
    component = fixture.componentInstance;
    iconScalingEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('first boostrap icon should have size-lg class applied by default', () => {
    const firstSdsIcon = iconScalingEl.children[0];
    const baselineIcon = firstSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-lg')).toBe(true);
  });
  it('second boostrap icon should have size-xs class applied', () => {
    const firstSdsIcon = iconScalingEl.children[1];
    const baselineIcon = firstSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-xs')).toBe(true);
  });
  it('third boostrap icon should have size-sm class applied', () => {
    const secondSdsIcon = iconScalingEl.children[2];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-sm')).toBe(true);
  });
  it('fourth boostrap icon should have size-lg class applied', () => {
    const secondSdsIcon = iconScalingEl.children[3];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-lg')).toBe(true);
  });
  it('fifth boostrap icon should have size-2x class applied', () => {
    const secondSdsIcon = iconScalingEl.children[4];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-2x')).toBe(true);
  });
  it('sixth boostrap icon should have size-3x class applied', () => {
    const secondSdsIcon = iconScalingEl.children[5];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-3x')).toBe(true);
  });
  it('seventh boostrap icon should have size-5x class applied', () => {
    const secondSdsIcon = iconScalingEl.children[6];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-5x')).toBe(true);
  });
  it('eighth boostrap icon should have size-7x class applied', () => {
    const secondSdsIcon = iconScalingEl.children[7];
    const baselineIcon = secondSdsIcon.children[0]; // Either i-bs or fa-icon
    expect(baselineIcon.nativeElement.classList.contains('size-7x')).toBe(true);
  });
});

