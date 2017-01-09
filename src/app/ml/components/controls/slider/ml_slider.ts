import {Component, ElementRef, Renderer, ViewEncapsulation} from "@angular/core";
import MdlSlider from "./mdl_slider";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'input.[ml-slider]',
styleUrls: ['./ml_slider.css'],
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
template:'' // no inner html
})
export class MlSlider{

  private mdlSlider: MdlSlider;

  public constructor(
    private hostElement: ElementRef,
    private ren: Renderer){
  }

  public change(value: number): void {
    this.mdlSlider.change(value)
  }

  ngOnInit(){
    ml.setClass(this.hostElement, 'mdl-slider', this.ren);
    ml.setAttribute(this.hostElement, 'type', 'range', this.ren);
    this.mdlSlider = new MdlSlider(this.hostElement.nativeElement);
  }
}