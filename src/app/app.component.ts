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
     
     
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'agile-times-prime-ng';
}
