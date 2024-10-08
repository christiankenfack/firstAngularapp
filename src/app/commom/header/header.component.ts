import { Component } from '@angular/core';
import { UserInfoComponent } from "./component/user-info/user-info.component";
import { TitlPageComponent } from "./component/titl-page/titl-page.component";
import { HeaderlogoComponent } from "./component/headerlogo/headerlogo.component";
import { UserDisconnectComponent } from "./component/user-disconnect/user-disconnect.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserInfoComponent, TitlPageComponent, HeaderlogoComponent, UserDisconnectComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
