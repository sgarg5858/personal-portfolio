import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[MatButtonModule]
})
export class AppComponent {
  title = 'sanjay-portfolio';
}
