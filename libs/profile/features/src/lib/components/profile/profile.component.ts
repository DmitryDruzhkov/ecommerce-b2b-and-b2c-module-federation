import { Component, inject, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecommerce-b2b-and-b2c-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profile$: Observable<Profile> = this.profileService.getProfile()

  constructor(@SkipSelf() private profileService: ProfileService) {}
}
