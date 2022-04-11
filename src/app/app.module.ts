import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarModule } from './layout-components/top-bar/top-bar.module';
import { FooterModule } from './layout-components/footer/footer.module';

import { HomeModule } from './page-components/home/home.module';
import { LoginModule } from './page-components/login/login.module';
import { RegisterModule } from './page-components/register/register.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    TopBarModule,
    FooterModule,

    HomeModule,
    LoginModule,
    RegisterModule,

    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
