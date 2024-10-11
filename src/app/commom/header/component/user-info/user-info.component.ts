import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  template:`<app-menu [IsOpen]="isOpen"></app-menu>`,
})
export class UserInfoComponent {
isOpen = false;
toggleOpen() : boolean{
  this.isOpen = !this.isOpen;
  return this.isOpen;
}

}


