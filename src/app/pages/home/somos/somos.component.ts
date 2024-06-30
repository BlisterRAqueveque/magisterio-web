import { Component, inject } from '@angular/core';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import { JuntaFiscalizacionService } from '../../../services/junta.fiscalizacion.service';
import { ConsejoDirectivoService } from '../../../services/consejo.directivo.service';
import { firstValueFrom } from 'rxjs';
import { JuntaFizcalizacionI } from '../../../interfaces/junta.fiscalizacion.interface';
import { ConsejoDirectivoI } from '../../../interfaces/consejo.directivo.interface';

@Component({
  selector: 'somos',
  standalone: true,
  imports: [ParallaxStandaloneDirective],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.scss',
})
export class SomosComponent {
  serviceJunta = inject(JuntaFiscalizacionService);
  serviceConsejo = inject(ConsejoDirectivoService);

  junta: JuntaFizcalizacionI[] = [];
  consejo: ConsejoDirectivoI[] = [];

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    try {
      this.junta = await firstValueFrom(this.serviceJunta.getConsejo());
      this.consejo = await firstValueFrom(this.serviceConsejo.getConsejo());
    } catch (error) {
      console.error(error);
    }
  }
}
