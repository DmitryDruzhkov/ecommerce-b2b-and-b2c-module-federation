import {
  Component,
  ComponentRef,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_COMPONENTS_PROVIDER } from '../tokens';
import { Observable } from 'rxjs';
import { ComponentLoaderDirective } from '../directives/component-loader.directive';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ProfileInfoComponent } from '@ecommerce-b2b-and-b2c/shared';
import { ProfileService } from '@ecommerce-b2b-and-b2c/profile/features';
import { Profile } from '@ecommerce-b2b-and-b2c/shared';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth',
  standalone: true,
  imports: [CommonModule, ComponentLoaderDirective, ProfileInfoComponent, MatButtonModule, MatCardModule, MatDividerModule, MatListModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @ViewChild('authContainer', { read: ViewContainerRef }) authContainer!: ViewContainerRef;

  private profileService: ProfileService = inject(ProfileService);
  public profile$: Observable<Profile> = this.profileService.getProfile();

  authComponentRef!: ComponentRef<any>;

  public async authB2B(): Promise<void> {
    /* TODO: через провайдер */
    this.loadMFComponent('http://localhost:4202/remoteEntry.js');
  }

  public async authB2C(): Promise<void> {
    this.loadMFComponent('http://localhost:4201/remoteEntry.js');
  }

  private async loadMFComponent(mFPath: string): Promise<void> {
    if (this.authComponentRef) {
      this.authComponentRef.destroy();
    }

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: mFPath,
      exposedModule: './Component'
    });

    this.authComponentRef = this.authContainer.createComponent(m.AppComponent);
  }
}
