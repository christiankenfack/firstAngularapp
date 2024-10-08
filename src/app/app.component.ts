import { Component } from '@angular/core';
import { FirstPageComponent } from "./Pages/LandingPage/first-page/first-page.component";



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FirstPageComponent],
})
export class AppComponent {

}
