import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Componentes
import {DashGeneralComponent} from '../components/dash-general/dash-general.component';
import {ControlComponent} from '../components/control/control.component';
import {ClimaComponent} from '../components/clima/clima.component';
import { NotFoundComponentComponent } from '../components/not-found-component/not-found-component.component';

const routes:Routes=[    
    {
        path:'principal',
        component:DashGeneralComponent
    },
    {
        path:'control',
        component:ControlComponent
    },
    {
        path:'clima',
        component:ClimaComponent
    },
    {
        path:'**',
        component:NotFoundComponentComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}