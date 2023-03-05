import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DefaultProfile } from '../shared/constants';
import { Profile, ProfileType } from '@ecommerce-b2b-and-b2c/shared';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile$: BehaviorSubject<Profile> = new BehaviorSubject(DefaultProfile);

  constructor() {
    console.log(`ProfileService`)
  }

  public getProfile(): Observable<Profile> {
    return this.profile$;
  }

  public setProfile(profile: Profile): void {
    this.profile$.next(profile);
  }

  /* private isB2b: BehaviorSubject<boolean> = new BehaviorSubject(false) */

  /* public setIsB2B(isB2b: boolean): void {
    this.isB2b.next(isB2b);
  } */

  public isB2bStream(): Observable<boolean> {
    return this.profile$.pipe(map((profile: Profile) => profile.type === ProfileType.B2B));
  }
}
