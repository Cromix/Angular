import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent} from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { SerciceDetailComponent } from './sercice-detail/sercice-detail.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "echipa", component: TeamComponent },
  { path: "specialitati", component: ServiceComponent },
  { path: "contact", component: ContactComponent },
  { path: "specialitati/:id", component:SerciceDetailComponent},

  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
