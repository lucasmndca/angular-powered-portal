import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email = ''

  constructor(private stateService: StateService) {
    this.stateService.state$.subscribe({ next: ({ session }) => {
      this.email = session?.email ?? 'unknown'
    }, error: (err) => console.error(err) })
  }
}
