import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
  {{title}}
      </h1>
    </div>
    <h2 style="color:blue">primeng Train </h2>
     
    <p-accordion>
    <p-accordionTab header="Salads">
      Salads...
    </p-accordionTab>
    <p-accordionTab header="Pasta">
      Pasta...
    </p-accordionTab>
    <p-accordionTab header="Pizza" [selected]="true">
      <p-radioButton
        label="Double cheese 🧀🧀"
        name="pizza"
        value="double-cheese"
        [(ngModel)]="pizzaSelection">
      </p-radioButton><br>
  
      <p-radioButton
        label="Anchovy"
        name="pizza"
        value="anchovy"
        [(ngModel)]="pizzaSelection">
      </p-radioButton><br>
  
      <p-radioButton
        label="Meat lover's 🍖"
        name="pizza"
        value="meat-lover"
        [(ngModel)]="pizzaSelection">
      </p-radioButton>
    </p-accordionTab>
  </p-accordion>
  
  <br>
  
  <p-panel header="Extras" *ngIf="pizzaSelection && pizzaSelection.length">
    🍕 Would you like extra cheese on your pizza?
    <button pButton type="button" label="Ok, yeah!"></button>
  </p-panel>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'agile-times-prime-ng';
}
