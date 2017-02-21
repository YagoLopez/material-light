import {Component} from '@angular/core';

@Component({
selector: 'ml-chip-button',
styleUrls: ['./mlChip.css'],
// moduleId: module.id.toString(),
template: `

<button type="button" class="mdl-chip">
<span class="mdl-chip__text"><ng-content></ng-content></span>
</button>

`//template
})
export class MlChipButton {}