import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudiesComponent } from './services/studies/studies.component';
import { TipsComponent } from './services/tips/tips.component';
import { AccompanyingComponent } from './services/accompanying/accompanying.component';
import { MediationComponent } from './services/mediation/mediation.component';
import { ArbitrationComponent } from './services/arbitration/arbitration.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"aboutUs", component: AboutUsComponent},
  {path:"contactUS", component: ContactComponent},
  {path:"services/studies", component: StudiesComponent},
  {path:"services/tips", component: TipsComponent},
  {path:"services/accompanying", component: AccompanyingComponent},
  {path:"services/mediation", component: MediationComponent},
  {path:"services/arbitration", component: ArbitrationComponent},
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
