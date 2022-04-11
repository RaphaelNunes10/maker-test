import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,

    AppRoutingModule,

    FlexLayoutModule,

    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [TopBarComponent],
})
export class TopBarModule {}
