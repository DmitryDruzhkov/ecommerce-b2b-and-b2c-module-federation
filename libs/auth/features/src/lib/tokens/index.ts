import { inject, InjectionToken, Provider } from "@angular/core";
import { ProfileService } from "@ecommerce-b2b-and-b2c/profile/features";
import { AuthB2cComponent } from "@ecommerce-b2b-and-b2c/auth-b2c/features";
import { AuthB2bComponent } from "@ecommerce-b2b-and-b2c/auth-b2b/features";
import { map } from "rxjs";

export const AUTH_COMPONENTS = new InjectionToken<any>('Auth components');

export const AUTH_COMPONENTS_PROVIDER: Provider[] = [
  {
    provide: AUTH_COMPONENTS,
    useFactory: (ProfileService: any) => {
      const profileService: ProfileService = inject(ProfileService);

      return profileService.isB2bStream().pipe(map((isB2b: boolean) => {
        return isB2b ? AuthB2bComponent : AuthB2cComponent;
      }))
    },
    deps: [ProfileService],
  },
];
