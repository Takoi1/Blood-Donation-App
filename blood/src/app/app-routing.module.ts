import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { AppComponent } from './app.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateBloodComponent } from './admin/create-blood/create-blood.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { DisplayEventComponent } from './admin/display-event/display-event.component';
import { DisplayCenterComponent } from './admin/display-center/display-center.component';
import { DashbordadminComponent } from './admin/dashbordadmin/dashbordadmin.component';
import { SidebaradminComponent } from './admin/sidebaradmin/sidebaradmin.component';
import { UpdateEventComponent } from './admin/update-event/update-event.component';
import { UpdateCenterComponent } from './admin/update-center/update-center.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplaycentreDonorComponent } from './donor/donor-profile/displaycentre-donor/displaycentre-donor.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { DonorEventComponent } from './donor/donor-event/donor-event.component';
import { DisplayCentreComponent } from './center/display-centre/display-centre.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CreatedonComponent } from './admin/createdon/createdon.component';
import { VerifComponent } from './center/verif/verif.component';
import { DisplayDonComponent } from './admin/display-don/display-don.component';
import { EventsDisplayComponent } from './donor/events-display/events-display.component';
import { AlleventListComponent } from './donor/allevent-list/allevent-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'services',component:OurservicesComponent},
  {path:'createCentre',component:CreateBloodComponent},
  {path:'CreateEvent',component:CreateEventComponent},
  {path:'DisplayEvent',component:DisplayEventComponent},
  {path:'DisplayCenter',component:DisplayCenterComponent},
  {path:'Dashbordadmin',component:DashbordadminComponent},
  {path:'Sidebaradmin',component:SidebaradminComponent},
  {path:'UpdateEvent/:id',component:UpdateEventComponent},
  {path:'UpdateCenter',component:UpdateCenterComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'DisplaycentreDonor',component:DisplaycentreDonorComponent},
  {path:'DonorEvents',component:DonorEventComponent},
  {path:'DisplayCentreComponent',component:DonorEventComponent},
  {path:'CentreD',component:DisplayCentreComponent},
  {path:'Don',component:CreatedonComponent},
  {path:'Verifier',component:VerifComponent},
  {path:'EventsDisplay',component:EventsDisplayComponent},
  {path:'myAllevent',component:AlleventListComponent},

  
  {path:'DisplayDon',component:DisplayDonComponent},
  
  
  {path:'AdminProfile/:id',component:AdminProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
