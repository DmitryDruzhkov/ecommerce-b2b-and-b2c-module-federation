import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthB2bComponent } from "@ecommerce-b2b-and-b2c/auth-b2b/features";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AuthB2bComponent],
  selector: 'ecommerce-b2b-and-b2c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-b2b';
}
