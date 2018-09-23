import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
      {path: '', component: AppComponent, children: [
      {path: 'admin', component: AdminComponent},
      {path: 'user', component: UserComponent}
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
