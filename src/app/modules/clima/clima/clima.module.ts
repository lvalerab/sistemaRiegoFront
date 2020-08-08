import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import { BmeCardComponent } from './components/bme-card/bme-card.component';


@NgModule({
  declarations: [
    BmeCardComponent
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    CommonModule
  ],
  exports:[    
    BmeCardComponent
  ]
})
export class ClimaModule { }
