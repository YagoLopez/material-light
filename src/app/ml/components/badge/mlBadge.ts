import {ElementRef, Input, Renderer, Component, ViewEncapsulation} from "@angular/core";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-badge',
moduleId: module.id,
styleUrls: ['./mlBadge.css'],
host: {class: 'mdl-badge'},
encapsulation: ViewEncapsulation.None,
template: '<ng-content></ng-content>'
})
export class MlBadge{

  @Input() value: string = '0';
  @Input() background: string = 'true';
  @Input() overlap: string = 'false';
  @Input() icon: string;

  constructor(private host: ElementRef, private ren: Renderer){}

  ngOnInit() {
    ml.setAttribute(this.host, 'data-badge', this.value, this.ren);

    if (this.background.toLowerCase() === 'false'){
      ml.setClass(this.host, 'mdl-badge--no-background', this.ren);
    }
    if (this.overlap.toLowerCase() === 'true'){
      ml.setClass(this.host, 'mdl-badge--overlap', this.ren);
    }
    if (this.icon === ''){
      ml.setClass(this.host, 'material-icons', this.ren);
      ml.setClass(this.host, 'mdl-badge--overlap', this.ren);
      this.host.nativeElement.querySelector('ml-icon').className = 'mdl-badge-icon';
    }
  }
}
