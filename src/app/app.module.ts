import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    NgZorroAntdModule.forRoot(),
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
