import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsScrollbarService } from './services/scrollbar.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FsScrollbarService
  ]
})
export class FsScrollbarModule {
  static forRoot(): ModuleWithProviders<FsScrollbarModule> {
    return {
      ngModule: FsScrollbarModule,
      providers: [FsScrollbarService]
    };
  }
}
