import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FsScrollbarService {

  private _style: HTMLStyleElement;

  constructor() {
    this.renderScrollbarStyle();
  }

  private getStyleEl(): HTMLElement {
    return document.getElementById('fs-scrollbar-style');
  }

  private renderScrollbarStyle() {

    let el = this.getStyleEl();

    if (el) {
      el.remove();
    }

    el = document.createElement('style');
    el.setAttribute('id', 'fs-scrollbar-style')
    document.getElementsByTagName('head')[0].appendChild(el);

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

    el.innerHTML = '';
    el.appendChild(document.createTextNode(style));
  }
}
