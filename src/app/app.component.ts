import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
      <mat-toolbar color="primary">
        <span>LocalCast Weather</span>
      </mat-toolbar>
      <br>
      <div style="display:flex; justify-content:center">
        <div class="mat-caption">Your city, your forecast, right now.</div>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <mat-card fxFlex="400px" style="margin:2em; width:300px">
          <mat-card-header>
            <mat-card-title><div class="mat-title">Current Weather</div></mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
  `,

})
export class AppComponent {
  title = 'localcast-weather'
}
