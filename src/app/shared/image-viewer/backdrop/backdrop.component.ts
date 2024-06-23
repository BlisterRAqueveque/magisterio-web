import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { DomService } from './backdrop.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.scss',
  imports: [NgIconComponent],
  providers: [provideIcons({ heroXMarkSolid })],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BackdropComponent {
  private readonly service = inject(DomService);

  ngOnInit() {
    const body = document.getElementById('body-principal');
    body?.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    const body = document.getElementById('body-principal');
    body?.classList.remove('overflow-hidden');
  }

  src = '';

  close() {
    const el = document.getElementById('backdrop');
    el?.classList.add('opacity-0');
    setTimeout(() => {
      this.service.detachComponentFromBody();
    }, 300);
  }
}
