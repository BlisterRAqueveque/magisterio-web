import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'magisterio-web';

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const swipers = document.querySelectorAll('#swiper');
    swipers.forEach((swiper) => {
      (swiper as SwiperContainer).swiper.update();
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    //? Get the clicked element
    const clickedElement = event.target as HTMLElement;
    //? If it's a button, then:
    if (clickedElement.tagName.toLowerCase() === 'button') {
      //? Creates a span element inside
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      //* ---------->
      clickedElement.appendChild(ripple);
      //? Get the element position & the pointer as well
      let rect = clickedElement.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      //? Position the span element
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      //? At least, remove span after 0.3s
      setTimeout(() => {
        ripple.remove();
      }, 300);
    }
  }
}
