import { Component } from '@angular/core';
import { FsScrollbarService } from 'src/app/services';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.scss']
})
export class ExampleComponent {

  public links = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6', 'Link 7'];
}
