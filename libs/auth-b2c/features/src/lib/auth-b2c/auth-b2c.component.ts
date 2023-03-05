import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileService } from '@ecommerce-b2b-and-b2c/profile/features';
import { ProfileType } from '@ecommerce-b2b-and-b2c/shared';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth-b2c',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './auth-b2c.component.html',
  styleUrls: ['./auth-b2c.component.scss'],
})
export class AuthB2cComponent implements OnInit {

  private profileService: ProfileService = inject(ProfileService);

  public ngOnInit(): void {
    this.profileService.setProfile({
      name: 'Петров Б2С',
      type: ProfileType.B2C
    })
  }
}
