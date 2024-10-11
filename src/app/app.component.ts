import { Component } from '@angular/core';
import { FirstPageComponent } from "./Pages/LandingPage/first-page/first-page.component";
import { HeaderComponent } from './commom/header/header.component';
import { FooterComponent } from './commom/footer/footer.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FirstPageComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {

}
