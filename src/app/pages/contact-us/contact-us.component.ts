import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEnvelopeSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroEnvelopeSolid, heroPhoneSolid })],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
