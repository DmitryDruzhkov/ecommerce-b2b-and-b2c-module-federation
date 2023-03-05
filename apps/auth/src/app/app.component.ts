import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthB2cComponent } from '@ecommerce-b2b-and-b2c/auth-b2c/features';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AuthB2cComponent],
  selector: 'ecommerce-b2b-and-b2c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth';
}
