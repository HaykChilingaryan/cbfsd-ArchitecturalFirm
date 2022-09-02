import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MeetingListComponent } from './components/meetings/meeting-list/meeting-list.component';
import { MeetingCreateComponent } from './components/meetings/meeting-create/meeting-create.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { AccountInfoComponent } from './components/auth/account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ClientsComponent,

    ClientListComponent,
    ClientCreateComponent,
    MeetingsComponent,
    MeetingListComponent,
    MeetingCreateComponent,
    ChangePasswordComponent,
    AccountInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
