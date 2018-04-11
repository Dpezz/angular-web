import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';


import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

// --
// import { AuthModule } from './services/modules/auth.module';
import { MaterialModule } from './config/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './config/app-routing.module';
import { ConstantsService } from './config/constants.service';

import { AppComponent } from './components/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar.component';
// import { MenuComponent } from './components/layout/menu.component';
// import { ToolbarComponent } from './components/layout/toolbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { AccountComponent } from './components/secured/account.component';
// import { PasswordComponent } from './components/secured/password.component';

import { DataService } from './services/base/data.service';
import { AuthGuard } from './services/base/auth-guard.service';
import { AuthService } from './services/data/auth.service';
import { UserService } from './services/data/user.service';

// --
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent, NavbarComponent,// MenuComponent, , ToolbarComponent,
    AuthComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000', 'localhost:3000'],
        // blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [ConstantsService, AuthGuard, DataService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
