import { Component } from '@angular/core';
import { environment } from 'ngx/ngx-scrollbar/playground/environments/environment';


@Component({
  templateUrl: './examples.component.html'
})
export class ExamplesComponent {
  public config = environment;
}
