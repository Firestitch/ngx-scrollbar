import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsScrollbarService } from './services/scrollbar.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FsScrollbarService,
  ],
})
export class FsScrollbarModule {
  
  constructor(
    private readonly _scrollbarService: FsScrollbarService,
  ) {
  }
  
  static forRoot(): ModuleWithProviders<FsScrollbarModule> {
    return {
      ngModule: FsScrollbarModule,
      providers: [FsScrollbarService],
    };
  }
}
