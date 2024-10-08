import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderlogoComponent } from "./components/headerlogo/headerlogo.component";
import { TitlPageComponent } from "./components/titl-page/titl-page.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { UserDisconnectComponent } from "./components/user-disconnect/user-disconnect.component";
import { TableComponent } from "./components/table/table.component";
import { OffresComponent } from "./components/offres/offres.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent, HeaderlogoComponent, TitlPageComponent, UserInfoComponent, UserDisconnectComponent, TableComponent, OffresComponent, FooterComponent]
})
export class AppComponent {

}
