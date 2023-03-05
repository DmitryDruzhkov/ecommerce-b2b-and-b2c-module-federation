import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent, ProfileService } from '@ecommerce-b2b-and-b2c/profile/features';
import { ProfileType } from '@ecommerce-b2b-and-b2c/shared';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth-b2b',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './auth-b2b.component.html',
  styleUrls: ['./auth-b2b.component.scss'],
})
export class AuthB2bComponent implements OnInit {

  private profileService: ProfileService = inject(ProfileService);

  public ngOnInit(): void {
    this.profileService.setProfile({
      name: 'Иванов Б2Б>',
      type: ProfileType.B2B
    })
  }
}
