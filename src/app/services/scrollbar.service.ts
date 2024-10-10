import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FsScrollbarService {

  private _style: HTMLStyleElement;

  constructor() {
    this._renderScrollbarStyle();
  }

  private _getStyleEl(): HTMLElement {
    return document.getElementById('fs-scrollbar-style');
  }

  private _renderScrollbarStyle() {

    let el = this._getStyleEl();

    if (el) {
      el.remove();
    }

    el = document.createElement('style');
    el.setAttribute('id', 'fs-scrollbar-style');
    document.getElementsByTagName('head')[0].appendChild(el);

    const style = `::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar * {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(166, 164, 164, 0.65);
  outline: none;
  border-radius: 44px;
}
`;

    el.innerHTML = '';
    el.appendChild(document.createTextNode(style));
  }
}
