import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEnvelopeSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';
import { getDateDifference } from '../../tools/birthday';
import { firstValueFrom } from 'rxjs';
import { DialogService } from '../../shared/confirm-dialog/dialog.service';
import { Loading } from '../../shared/spinner/service/loading.service';
import { CasaMutualService } from '../../services';
import { CasaMutualI } from '../../interfaces';

@Component({
  selector: 'app-ser-socio',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroEnvelopeSolid, heroPhoneSolid })],
  templateUrl: './ser-socio.component.html',
  styleUrl: './ser-socio.component.scss',
})
export class SerSocioComponent {
  private readonly service = inject(CasaMutualService);
  private readonly dialog = inject(DialogService);
  private readonly loading = inject(Loading);

  delegaciones: CasaMutualI[] = [];

  years = 0;

  async ngOnInit() {
    try {
      this.delegaciones = await firstValueFrom(this.service.getCasas());
      window.scrollTo(0, 0);
      this.years = getDateDifference().yearsDifference;
    } catch (error) {
      console.error(error);
    }
  }

  sendForm() {
    this.dialog.present(
      'Envío de formulario.',
      '¿Está seguro de enviar el siguiente formulario de contacto?',
      () => {
        this.onSendForm();
      }
    );
  }
  onSendForm() {
    this.loading.isLoading(true);
  }
}
