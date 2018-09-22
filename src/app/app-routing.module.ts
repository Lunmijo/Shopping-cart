import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
      {path: '', component: AppComponent, children: [
      {path: 'admin', component: AdminComponent},
     // {path: 'registration', component: RegistrationComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
