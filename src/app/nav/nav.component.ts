import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { environment } from 'src/environments/environment';
import {MainStationService} from '../shared/services/main-station.service';
import {bmeData} from '../shared/models/bme.data.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public menuItems:Array<any>=[
    {
      menu:'Principal',
      icon:'fas fa-book-open',
      url:'principal'
    },
    {
      menu:'Climatología',
      icon:'fas fa-sun',
      url:'clima'
    },
    {
      menu:'Control riego',
      icon:'fas fa-toggle-on',
      url:'control'
    },
    {
      menu:'Zonas de cultivo',
      icon:'fab fa-pagelines',
      url:'zonas'
    },
  ];
  public titulo:string;  
  public created:string;
  public datosBme:bmeData;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route:ActivatedRoute,
    private climaService:MainStationService
    ) {
      this.titulo=environment.titulo;
      this.created=environment.createdBy;
    }

    time=new Observable<bmeData>(observer=>{
      setInterval(()=>{
        this.climaService.getDatosBme().subscribe(p=>{
          observer.next(p);
        });
      },1000);
    });

    ngOnInit() {
      this.time.subscribe(p=>{
        p.fecha=new Date();
        this.datosBme=p
      });
    }

    mostrarIconoTemp():number {
      if(this.datosBme.temperature_C<1) {
        return 0;
      } else if(this.datosBme.temperature_C>=1 && this.datosBme.temperature_C<15) {
        return 1;
      } else {
        return 2;
      }
    }

}
