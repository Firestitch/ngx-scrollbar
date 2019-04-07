import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  declarations: [

  ]
})
export class FsScrollbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsScrollbarModule
    };
  }
}
