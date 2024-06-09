import { Component } from '@angular/core';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';

@Component({
  selector: 'principios',
  standalone: true,
  imports: [ParallaxStandaloneDirective],
  templateUrl: './principios.component.html',
  styleUrl: './principios.component.scss',
})
export class PrincipiosComponent {}
