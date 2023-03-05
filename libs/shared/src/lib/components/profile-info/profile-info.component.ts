import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '@ecommerce-b2b-and-b2c/profile/features';

@Component({
  selector: 'ecommerce-b2b-and-b2c-profile-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  @Input() profile!: Profile

}
