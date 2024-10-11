import { Component } from '@angular/core';
import { TableComponent } from "../components/table/table.component";
import { OffresComponent } from "../components/offres/offres.component";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [TableComponent, OffresComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {

}
