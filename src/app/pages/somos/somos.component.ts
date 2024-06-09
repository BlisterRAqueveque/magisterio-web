import { Component } from '@angular/core';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';

@Component({
  selector: 'somos',
  standalone: true,
  imports: [ParallaxStandaloneDirective],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.scss',
})
export class SomosComponent {}
