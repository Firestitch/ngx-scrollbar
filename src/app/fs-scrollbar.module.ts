import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsScrollbarService } from './services/scrollbar.service';


@NgModule({
  providers: [
    FsScrollbarService,
  ],
})
export class FsScrollbarModule {

  constructor(
    private readonly _scrollbarService: FsScrollbarService,
  ) {
  }
  
  public static forRoot(): ModuleWithProviders<FsScrollbarModule> {
    return {
      ngModule: FsScrollbarModule,
      providers: [FsScrollbarService],
    };
  }
}
