import {Component, ViewChild} from "@angular/core";
import {MlRadio} from "../../ml/components/controls/radio/mlRadio";

@Component({
template:`

<style>
:host /deep/ ml-radio {margin-left: 20px}
:host /deep/ span.mdl-radio__label {color: orange; font-family: "Roboto", "Arial", sans-serif; font-size: smaller}
:host /deep/ span.mdl-radio__inner-circle {background: orange !important} 
:host /deep/ span.mdl-radio__outer-circle {border: 2px solid orange !important}
</style>

<h5>Material Light Layout</h5>

<p><strong>&lt;ml-layout&gt;</strong> is the base component where other components are placed</p> 

<p>The Material Light layout contains three main sections</p>
<ul>
  <li><strong>&lt;ml-header&gt;</strong>: the upper bar with the title</li>  
  <li><strong>&lt;ml-drawer&gt;</strong>: the menu to the left</li>
  <li><strong>&lt;ml-content&gt;</strong>: the main content area (suitable to place the router-outlet)</li>
</ul>

<p>Each section can have variations. For example <strong>&lt;ml-header&gt;</strong> 
can have tabs, links, or other icons</p>

<p>Here are some examples of <strong>&lt;ml-layout&gt;</strong> variations: </p>

<div><ml-radio #radio_scroll_head checked="true" (click)="WaterfallEffectHeaderTabs()">
  Header-Tabs with waterfall effect and solid background</ml-radio></div>
<div><ml-radio #radio_fixed_head (click)="fixedHeaderTabs()">
  Fixed Header-Tabs with solid background</ml-radio></div>
<p><ml-radio (click)="backgroundTransparent()">Background transparent with image</ml-radio></p>

<p>There is also the posibility of having different nested drawers and headers in each page using auxiliary 
router-outlets. This feature is experimental and still has not been tested</p>

<p>All options will be explained in the API documentation which is actually in process.
Meanwhile take a look at the examples and the code.</p>

<div>Here is the source code of this layout demo:</div>
<view-source uri="../app.layout.ts"></view-source>

`//template
}) export class PagLayout{

  // NOTE: this code simulates different options of the <ml-layout> component

  @ViewChild('radio_scroll_head') radioScrollHead: MlRadio;
  @ViewChild('radio_fixed_head') radioFixedHead: MlRadio;

  imgBackgrnd = 'assets/img/city2.jpg';
  mlLayout: HTMLElement = document.querySelector('ml-layout') as HTMLElement;
  mlHeader: HTMLElement = this.mlLayout.querySelector('ml-header') as HTMLElement;
  mlTitle: HTMLElement = this.mlLayout.querySelector('ml-title') as HTMLElement;
  mlHeaderTabs: HTMLElement = this.mlLayout.querySelector('div.mdl-layout__tab-bar-container') as HTMLElement;
  mlContent: HTMLElement = this.mlLayout.querySelector('ml-content') as HTMLElement;
  mlContentTabheader: HTMLElement = this.mlLayout.querySelector('ml-content-tabheader') as HTMLElement;

  /**
   * Gives background solid color to the view-source buttons (grey)
   * @param color {string}
   */
  backgroundBtns(color: string): void{
    const btns: NodeListOf<HTMLElement> = this.mlLayout.querySelectorAll('view-source > div > a') as NodeListOf<HTMLElement>;
    Array.from(btns).forEach( (btn: HTMLElement) => {btn.style.background = color} )
  }
  disableRadioBtn(radioBtn: MlRadio): void {
    radioBtn.setDisabled();
    radioBtn.label.nativeElement.querySelector('span').style.color = '#757575';
    radioBtn.label.nativeElement.querySelector('span.mdl-radio__outer-circle').
      style.cssText = 'border: 2px solid #757575 !important';
  }
  enableRadioBtn(radioBtn: MlRadio): void {
    radioBtn.setEnabled();
    radioBtn.label.nativeElement.querySelector('span').style.color = 'orange';
    radioBtn.label.nativeElement.querySelector('span.mdl-radio__outer-circle').
      style.cssText = 'border: 2px solid orange !important';
  }
  backgroundTransparent() {
    this.mlLayout.style.color = this.mlTitle.style.color = 'white';
    this.mlLayout.style.background = `url('${this.imgBackgrnd}') 0 0 / cover`;
    this.mlHeader.style.cssText = 'background-color: transparent; box-shadow: none !important';
    this.mlHeaderTabs.style.display = 'none';
    this.mlContent.style.backgroundColor = 'transparent';
    this.mlContentTabheader.style.cssText = 'background-color: transparent; border: none; box-shadow: none';
    this.backgroundBtns('darkgrey');
    this.disableRadioBtn(this.radioFixedHead);
  }
  fixedHeaderTabs() {
    this.mlHeader.classList.remove('mdl-layout__header--waterfall');
  }
  WaterfallEffectHeaderTabs() {
    this.mlHeader.classList.add('mdl-layout__header--waterfall');
    this.enableRadioBtn(this.radioFixedHead);
    this.mlLayout.style.cssText = 'color: black; background: "none"';
    this.mlHeader.style.cssText = 'background-color: ""; box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.2)';
    this.mlHeaderTabs.style.display = 'initial';
    this.mlContent.style.backgroundColor = '';
    this.mlContentTabheader.style.cssText = `@media (min-width: 700px) {background-color: white; margin: auto;
      width: 60%; padding: 25px 50px 50px; border: 1px solid lightgrey; box-shadow: 1px 1px 5px lightgrey; }`;
    this.backgroundBtns('');
    this.enableRadioBtn(this.radioScrollHead);
  }
  ngOnDestroy(){
    this.WaterfallEffectHeaderTabs();
  }
}
