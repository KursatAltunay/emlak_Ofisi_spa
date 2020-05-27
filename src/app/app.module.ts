import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { AdvertDetailComponent } from './agent/advert-detail/advert-detail.component';
import { AdvertAddComponent } from './agent/advert-add/advert-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentAddComponent } from './admin/agent-add/agent-add.component';
import { AdvertUpdateComponent } from './agent/advert-update/advert-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      AdminComponent,
      AgentComponent,
      AdvertDetailComponent,
      AdvertAddComponent,
      AgentAddComponent,
      AdvertUpdateComponent,
      RegisterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      AgentAddComponent
   ]
})
export class AppModule {}
