import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  drawerOpened = false
  session = sessionStorage.getItem('session')
  parsedSession: ILoginResponse | undefined

  constructor(private router: Router, private stateService: StateService) {
    if (!this.session)
      this.router.navigate(['/'])
    else {
      this.parsedSession = JSON.parse(this.session) as ILoginResponse
      console.log(this.parsedSession)
      this.stateService.setState({ session: this.parsedSession ?? null })
    }
  }

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened
  }

  logout() {
    sessionStorage.removeItem('session')
    this.router.navigate(['/'])
  }
}
