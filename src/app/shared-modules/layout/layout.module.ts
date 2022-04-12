import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { TopBarComponent } from '../../layout-components/top-bar/top-bar.component';
import { FooterComponent } from '../../layout-components/footer/footer.component';

@NgModule({
  declarations: [TopBarComponent, FooterComponent],
  imports: [
    CommonModule,

    AppRoutingModule,

    FlexLayoutModule,

    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [TopBarComponent, FooterComponent],
})
export class LayoutModule {}
