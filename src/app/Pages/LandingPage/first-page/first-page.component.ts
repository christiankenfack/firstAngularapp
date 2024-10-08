import { Component } from '@angular/core';
import { HeaderComponent } from "../../../commom/header/header.component";
import { TableComponent } from "../components/table/table.component";
import { OffresComponent } from "../components/offres/offres.component";
import { FooterComponent } from "../../../commom/footer/footer.component";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [HeaderComponent, TableComponent, OffresComponent, FooterComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {

}
