import { Component } from '@angular/core';


@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.scss'],
    standalone: true
})
export class ExampleComponent {

  public links = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6', 'Link 7'];
}
