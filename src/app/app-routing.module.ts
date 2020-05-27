import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { AdvertDetailComponent } from './agent/advert-detail/advert-detail.component';
import { AdvertAddComponent } from './agent/advert-add/advert-add.component';
import { AgentAddComponent } from './admin/agent-add/agent-add.component';
import { AdvertUpdateComponent } from './agent/advert-update/advert-update.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agentAdd', component: AgentAddComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'advertDetail/:advertId', component: AdvertDetailComponent },
  { path: 'advertUpdate/:advertId', component: AdvertUpdateComponent },
  { path: 'advertAdd', component: AdvertAddComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
