import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronDownSolid,
  heroPhoneSolid,
} from '@ng-icons/heroicons/solid';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NgIconComponent, RouterModule, CommonModule],
  providers: [provideIcons({ heroChevronDownSolid, heroPhoneSolid })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const topElement = document.getElementById('navbar');
    const rect = topElement?.getBoundingClientRect();
    if (rect) {
      const top = rect.top + window.scrollY;
      if (top > 160) {
        document.getElementById('logo')?.classList.remove('opacity-0');
      } else document.getElementById('logo')?.classList.add('opacity-0');
    }
  }

  show(div: HTMLDivElement) {
    div.classList.add('show');
  }
  hide(div: HTMLDivElement) {
    div.classList.remove('show');
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  isActive = false;

  toggleDiv(divOne: HTMLDivElement, divTwo?: HTMLDivElement) {
    divOne.classList.toggle('show');
    if (divTwo) divTwo.classList.remove('show');
  }

  router = inject(Router);
  navigate(link: string, fragment: string) {
    this.router.navigate([link], { fragment, replaceUrl: true });
  }

  routerService = inject(RouterService);
  selectTurismo(i: number) {
    this.routerService.setIndex(i);
  }

  showFormulario(form: string) {
    window.open(`/assets/formularios/${form}.pdf`)
  }
}
