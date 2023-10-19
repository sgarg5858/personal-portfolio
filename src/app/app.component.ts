import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { BannerComponent } from './banner/banner.component';
import { ThemeManagerService } from './theme-manager/theme-manager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[MatButtonModule,BannerComponent]
})
export class AppComponent {
  title = 'sanjay-portfolio';
  constructor(public theme:ThemeManagerService)
  {
    console.log(theme.theme$.subscribe(console.log))
  }
}
