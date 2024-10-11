import { Routes } from '@angular/router';
import { FirstPageComponent } from './Pages/LandingPage/first-page/first-page.component';
import { FormPageComponent } from './Pages/Forms/form-page/form-page.component';

export const routes: Routes = [
    {path:"", redirectTo:"candidatures", pathMatch:"full"},
    {path:"candidatures", component:FirstPageComponent},
    {path:"form", component: FormPageComponent}
];
