import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FsScrollbarService {

  private _style: HTMLStyleElement;

  constructor() {
    this._style = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(this._style);
    this.renderScrollbarStyle();
  }

  private renderScrollbarStyle() {

    const style = `::-webkit-scrollbar {
        height: 6px;
        width: 6px;
        scrollbar-width: none;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(166, 164, 164, 0.65);
        outline: none;
        border-radius: 44px;
      }

      * {
        scrollbar-color: rgba(166, 164, 164, 0.65) transparent;
        scrollbar-width: thin;
      }
      `;

    this._style.innerHTML = '';
    this._style.appendChild(document.createTextNode(style));
  }
}
