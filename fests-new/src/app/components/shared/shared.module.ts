import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRouting } from '../../app.routing';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
