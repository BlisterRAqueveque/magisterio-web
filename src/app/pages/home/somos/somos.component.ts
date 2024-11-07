import { Component, inject } from '@angular/core';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import { JuntaFiscalizacionService } from '../../../services/junta.fiscalizacion.service';
import { ConsejoDirectivoService } from '../../../services/consejo.directivo.service';
import { firstValueFrom } from 'rxjs';
import { JuntaFiscalizacionI } from '../../../interfaces/junta.fiscalizacion.interface';
import { ConsejoDirectivoI } from '../../../interfaces/consejo.directivo.interface';
import { HttpParams } from '@angular/common/http';

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

  junta: JuntaFiscalizacionI[] = [];
  consejo: ConsejoDirectivoI[] = [];

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    try {
      let params = new HttpParams();
      params = params.set('sortBy', 'ASC');
      this.junta = (
        await firstValueFrom(this.serviceJunta.getConsejo(params))
      ).result;
      this.consejo = (
        await firstValueFrom(this.serviceConsejo.getConsejo(params))
      ).result;
    } catch (error) {
      console.error(error);
    }
  }
}
