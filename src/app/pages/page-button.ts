import {Component} from '@angular/core';

@Component({
template: `

<!--For incompatible attributes check: https://getmdl.io/components/index.html#buttons-section-->

<h5>Button</h5>

<p>
  <ml-button ripple>Flat Button With Ripple</ml-button>
</p>
<p>
  <ml-button aspect="colored">Flat Colored</ml-button>
</p>
<p>
  <ml-button aspect="raised" ripple>Raised Button (Ripple)</ml-button>
</p>
<p>
  <ml-button aspect="raised, colored" ripple>Raised Colored (Ripple)</ml-button>
</p>
<p>
  <ml-button aspect="raised, accent">Rised Accent</ml-button>
</p>
<p>
  <ml-button aspect="raised, accent" disabled>Disabled Button</ml-button>
</p>
<p>
  Fab button: <ml-button type="fab"><ml-icon>add</ml-icon></ml-button>
</p>
<p>
  Fab colored: <ml-button type="fab" aspect="colored"><ml-icon>add</ml-icon></ml-button>
</p>
<p>
  Mini-fab button: <ml-button type="minifab"><ml-icon>add</ml-icon></ml-button>
</p>
<p>
  Icon button: <ml-button type="icon"><ml-icon>email</ml-icon></ml-button>
</p>

`//template
})
export class PageButton {}