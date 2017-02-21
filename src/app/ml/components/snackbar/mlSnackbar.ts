import {Component, ElementRef, Input, ViewEncapsulation, Renderer} from "@angular/core";
import MdlSnackbar from "./mlSnackbarLib";

export interface IConfigSnackbar {
  message: string, actionHandler?: Function, actionText?: string, timeout?: number
}

@Component({
selector: 'ml-snackbar',
styleUrls: ['./mlSnackbar.css'],
// moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-snackbar'},
template:`

<div class="mdl-snackbar__text"></div>
<button type="button" class="mdl-snackbar__action" (click)="close()"></button>

`//template
})
export class MlSnackbar{
  @Input() config: IConfigSnackbar;
  mdlSnackbar: MdlSnackbar;

  constructor( private hostElm: ElementRef){}
  show(){ this.mdlSnackbar.showSnackbar(this.config) }
  close(){ this.mdlSnackbar.cleanup_() }
  ngAfterViewInit(){ this.mdlSnackbar = new MdlSnackbar(this.hostElm.nativeElement) }

}