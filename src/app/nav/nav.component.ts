import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Theme, ThemeManagerService } from '../theme-manager/theme-manager.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone:true,
  imports:[CommonModule,MatIconModule]
})
export class NavComponent {
constructor(public themeManager: ThemeManagerService){}

switchTheme(theme:Theme,event:Event)
{
  event?.preventDefault();
  this.themeManager.switchTheme(theme==='light' ? 'dark': 'light');
}

}
