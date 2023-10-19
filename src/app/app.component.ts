import { Component } from '@angular/core';
import { ThemeManagerService } from './theme-manager/theme-manager.service';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[NavComponent]
})
export class AppComponent {
  title = 'sanjay-portfolio';
  constructor(public theme:ThemeManagerService)
  {
    console.log(theme.theme$.subscribe(console.log))
  }
}
