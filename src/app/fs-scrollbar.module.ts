import { ModuleWithProviders, NgModule, inject } from '@angular/core';

import { FsScrollbarService } from './services/scrollbar.service';


@NgModule({
  providers: [
    FsScrollbarService,
  ],
})
export class FsScrollbarModule {
  private readonly _scrollbarService = inject(FsScrollbarService);

  
  public static forRoot(): ModuleWithProviders<FsScrollbarModule> {
    return {
      ngModule: FsScrollbarModule,
      providers: [FsScrollbarService],
    };
  }
}
