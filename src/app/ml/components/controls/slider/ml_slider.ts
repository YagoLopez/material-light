import {Component, ElementRef, Renderer, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import MdlSlider from "./mdl_slider";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'input.[ml-slider]',
styleUrls: ['./ml_slider.css'],
host: {class: 'mdl-slider'},
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
template:'' // no template
})
export class MlSlider{

  private mdlSlider: MdlSlider;

  constructor(private hostElement: ElementRef, private ren: Renderer){}
  change(value: number): void {this.mdlSlider.change(value)}

  ngOnInit(){
    ml.setAttribute(this.hostElement, 'type', 'range', this.ren);
    this.mdlSlider = new MdlSlider(this.hostElement.nativeElement);
  }
}