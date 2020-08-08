//From core
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

//From angular/material

//From shared
import { bmeData } from '../../../../../shared/models/bme.data.model';
import { MainStationService } from '../../../../../shared/services/main-station.service';


@Component({
  selector: 'app-bme-card',
  templateUrl: './bme-card.component.html',
  styleUrls: ['./bme-card.component.css']
})
export class BmeCardComponent implements OnInit {

  public datosSensor:bmeData;
  public colorTemp:string;

  @Input()
  title:string;

  @Input()
  soloDatosGenerales:boolean;

  @Input()
  muestraHora:boolean;

  @Input()
  muestraModelo:boolean;

  constructor(private mstationservice:MainStationService
  ) { 
    
  }

  time=new Observable<bmeData>(observer=>{
    setInterval(()=>{
      this.mstationservice.getDatosBme().subscribe(p=>{
        p.fecha=new Date();
        observer.next(p);
      });
    },1000);
  });

  getColorTemperatura(temperatura:number):string {    
    let t=255-((temperatura-30)*(255/20));
    t=Math.floor(t);
    if(t>255) {
      t=255;
    }
    if(t<0) {
      t=0;
    }
    let b=t.toString(16);
    //RGB
    b=`${b}`.length==1?'0'+b:b;
    return "#FF00"+b;
  }

  ngOnInit(): void {
    this.time.subscribe(
      p=> {
        this.datosSensor=p;
        this.colorTemp=this.getColorTemperatura(this.datosSensor.temperature_C);
      },
      error=>{alert(error.data)},()=>{});
  }

}
