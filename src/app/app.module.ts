import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

//angular material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


//Charts
import {ChartsModule} from 'ng2-charts';

//App components
import { ClimaComponent } from './components/clima/clima.component';
import { ControlComponent } from './components/control/control.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DashGeneralComponent } from './components/dash-general/dash-general.component';
import { MatMenuModule } from '@angular/material/menu';

//App modules
import {ClimaModule} from './modules/clima/clima/clima.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClimaComponent,
    ControlComponent,
    NotFoundComponentComponent,
    DashGeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    AppRoutingModule,
    MatMenuModule,
    ClimaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
