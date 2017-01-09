import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
selector: 'debug-form',
template: `
<style>
.code-block{
  /*border: 1px solid cornflowerblue;*/
  background: aliceblue;
  font-size: 13px;
  margin: auto;
  width: 95%;
}
.inner-div{
  margin-left: 10px;
}
.value{
  color: cornflowerblue;
}
</style>

<pre class="code-block">
  <div class="inner-div">
    <b>FORM DEBUGGER:</b>
    - Form values: <span class="value">{{ formName.value | json }}</span>
    - Form valid: <span class="value">{{ formName.valid }}</span>
  </div>
</pre>
`//template
})
export class DebugForm {
  @Input('name') formName: FormGroup;
}