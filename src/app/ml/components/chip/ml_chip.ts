import {Component, Input} from "@angular/core";

@Component({
selector:  'ml-chip',
moduleId: module.id.toString(),
styleUrls: ['./ml_chip.css'],
template: `

<span *ngIf="visible" class="mdl-chip" 
      [ngClass]="{'mdl-chip--contact': img || letter, 'mdl-chip--deletable': deletable}">
  
  <span *ngIf="letter" class="mdl-chip__contact mdl-color--teal mdl-color-text--white">{{letter}}</span>
  
  <img *ngIf="img" class="mdl-chip__contact" [src]="img"/>
  
  <span class="mdl-chip__text">
    <ng-content></ng-content>
  </span>
    
  <a *ngIf="deletable" href="#" class="mdl-chip__action" (click)="deleteChip($event)">
    <i class="material-icons">cancel</i>
  </a>
</span>

`//template
})
export class MlChip {

  @Input() deletable: string;
  @Input('delete-action') action: Function;
  @Input('contact-image') img: string;
  @Input('contact-letter') letter: string;

  private visible: boolean = true;

  public deleteChip($event: any): boolean {
    //todo: remove from dom?
    this.visible = !this.visible;
    this.action ? this.action() : console.log('Chip deleted. No further action defined.');
    return false;
  }
}