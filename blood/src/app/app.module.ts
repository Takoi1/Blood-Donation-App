import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import * as jwt_decode from 'jwt-decode'; // Import jwt_decode
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { CreateBloodComponent } from './admin/create-blood/create-blood.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { DisplayCenterComponent } from './admin/display-center/display-center.component';
import { DisplayEventComponent } from './admin/display-event/display-event.component';
import { DisplayUserComponent } from './admin/display-user/display-user.component';
import { UpdateEventComponent } from './admin/update-event/update-event.component';
import { UpdateCenterComponent } from './admin/update-center/update-center.component';
import { DashbordadminComponent } from './admin/dashbordadmin/dashbordadmin.component';
import { SidebaradminComponent } from './admin/sidebaradmin/sidebaradmin.component';
import { ProfileComponent } from './profile/profile.component';
import { ListeComponent } from './user/liste/liste.component';
import { DisplaycentreDonorComponent } from './donor/donor-profile/displaycentre-donor/displaycentre-donor.component';
import { DonorEventComponent } from './donor/donor-event/donor-event.component';
import { DisplayCentreComponent } from './center/display-centre/display-centre.component';
import { CreatedonComponent } from './admin/createdon/createdon.component';
import { VerifComponent } from './center/verif/verif.component';
import { DisplayDonComponent } from './admin/display-don/display-don.component';
import { EventsDisplayComponent } from './donor/events-display/events-display.component';
import { AlleventListComponent } from './donor/allevent-list/allevent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentComponent,
    ContactComponent,
    OurservicesComponent,
    CreateBloodComponent,
    CreateEventComponent,
    DonorProfileComponent,
    AdminProfileComponent,
    DisplayCenterComponent,
    DisplayEventComponent,
    DisplayUserComponent,
    UpdateEventComponent,
    UpdateCenterComponent,
    DashbordadminComponent,
    SidebaradminComponent,
    ProfileComponent,
    ListeComponent,
    DisplaycentreDonorComponent,
    DonorEventComponent,
    DisplayCentreComponent,
    CreatedonComponent,
    VerifComponent,
    DisplayDonComponent,
    EventsDisplayComponent,
    AlleventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
