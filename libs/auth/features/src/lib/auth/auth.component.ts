import {
  Component,
  ComponentRef,
  inject,
  Inject,
  SkipSelf,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_COMPONENTS_PROVIDER } from '../tokens';
import { Observable } from 'rxjs';
import { ComponentLoaderDirective } from '../directives/component-loader.directive';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ProfileInfoComponent } from '@ecommerce-b2b-and-b2c/shared';
import { Profile, ProfileService } from '@ecommerce-b2b-and-b2c/profile/features';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth',
  standalone: true,
  imports: [CommonModule, ComponentLoaderDirective, ProfileInfoComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @ViewChild('authContainer', { read: ViewContainerRef }) authContainer!: ViewContainerRef;

  public profile$: Observable<Profile> = this.profileService.getProfile();

  constructor(@SkipSelf() private profileService: ProfileService) {}

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
