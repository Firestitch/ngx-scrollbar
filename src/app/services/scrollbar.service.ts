import { Injectable } from '@angular/core';

@Injectable()
export class FsScrollbarService {

  private _style: HTMLStyleElement;
  private _hideScrollbars = [];

  constructor() {
    this._style = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(this._style);

    this.renderScrollbarStyle();
  }

  public hideScrollbar(options: { selector?: string } = {}) {
    this._hideScrollbars.push(options.selector);
    this.renderScrollbarStyle();
  }

  public showScrollbar(options: { selector?: string } = {}) {
    this._hideScrollbars = this._hideScrollbars.filter((item) => {
      return options.selector !== item;
    });
    this.renderScrollbarStyle();
  }

  private renderScrollbarStyle() {

    let style = `::-webkit-scrollbar {
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
        scrollbar-color: rgba(166, 164, 164, 0.65);
        scrollbar-width: 6px;
      }
      `;

    this._hideScrollbars.forEach(item => {

      style += `
        ${item}::-webkit-scrollbar {
          width: 0px;
          scrollbar-width: none;
        }

        ${item}::-webkit-scrollbar-thumb {
          background-color: transparent;
        }

        ${item} {
          scrollbar-width: none;
        }`;

        // HACK: Firefox
        if (item === 'body') {
          style += `html {
            scrollbar-width: none;
          }`;
        }

    });

    this._style.innerHTML = '';
    this._style.appendChild(document.createTextNode(style));
  }

  public disableScrolling(options: { selector?: string } = {}) {
    window.document.body.classList.add('fs-scrolling-disabled');
    this.getElements(options.selector).forEach((item) => {
      item.addEventListener('wheel', this.disableScroll, { passive: false });
      item.addEventListener('scroll', this.disableScroll, { passive: false });
      item.addEventListener('touch', this.disableScroll, { passive: false });
    });
  }

  public enableScrolling(options: { selector?: string } = {}) {
    window.document.body.classList.remove('fs-scrolling-disabled');
    this.getElements(options.selector).forEach((item) => {
      item.removeEventListener('wheel', this.disableScroll);
      item.removeEventListener('scroll', this.disableScroll);
      item.removeEventListener('touch', this.disableScroll);
    });
  }


  private getElements(selector: string) {
    selector = selector || 'html';
    return window.document.querySelectorAll(selector);
  }

  private disableScroll = (event: any) => {

    const path = event.path || (event.composedPath && event.composedPath());

    if (this.preventScroll(event, path)) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }

  private preventScroll(event, path) {

    for (var i = 0, len = path.length; i < len; i++) {

      if (path[i].scrollHeight !== path[i].clientHeight &&
          path[i].clientHeight &&
          event.currentTarget !== path[i]) {
        if (event.deltaY < 0 && !path[i].scrollTop) {
          return true;
        }

        if (event.deltaY > 0 && path[i].scrollHeight === (path[i].scrollTop + path[i].clientHeight)) {
          return true;
        }

        return false;
      }
    }

    return true;
  }
}
