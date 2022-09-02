import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MeetingCreateComponent } from './components/meetings/meeting-create/meeting-create.component';
import { MeetingListComponent } from './components/meetings/meeting-list/meeting-list.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"clientlist", component:ClientListComponent},
  {path:"createclient", component:ClientCreateComponent},
  {path:"clients", component:ClientsComponent},
  {path:"createmeeting", component:MeetingCreateComponent},
  {path:"meetinglist", component:MeetingListComponent},

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
