import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash-general',
  templateUrl: './dash-general.component.html',
  styleUrls: ['./dash-general.component.css']
})
export class DashGeneralComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public cardLayout:any = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns:4,
          miniCard:{cols:1,rows:1},
          chart:{ cols:1, rows:2},
          table:{cols:1, rows:4}
        }
      }

      return {
        columns:4,
        miniCard:{cols:1,rows:1},
        chart:{cols:2, rows:2},
        table:{cols:4,rows:4}
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
