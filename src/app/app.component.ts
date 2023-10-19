import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { BannerComponent } from './banner/banner.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[MatButtonModule,BannerComponent]
})
export class AppComponent {
  title = 'sanjay-portfolio';
}
