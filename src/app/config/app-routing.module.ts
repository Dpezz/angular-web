import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthGuard } from '../services/base/auth-guard.service';
import { AuthService } from '../services/data/auth.service';

import { AuthComponent } from '../components/auth/auth.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe(path => {
      if (this.auth.loggedIn())
        if (path['url'] && (path['url'].indexOf('home') !== -1 || path['url'].indexOf('login') !== -1))
          this.router.navigate(['dashboard']);
    });
  };
}




