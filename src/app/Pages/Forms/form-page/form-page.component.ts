import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormPageHeaderComponent } from "../component/form-page-header/form-page-header.component";
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user.models';
import { StorageServiceService } from '../../../services/storage-service.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [FormPageHeaderComponent, FormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent {
  user: User={
    name :'',
    surname: '',
    birthdate: '',
    birthlocation: '',
    email: '',
    studylevel :'',
    fieldsofstudy : '',
    filecv :''
};

  private storageservice : StorageServiceService = inject(StorageServiceService)
private adduser : ApiService = inject(ApiService)

  Onsubmit() {
    
    this.adduser.addUser(this.user) 
    
  }

}
