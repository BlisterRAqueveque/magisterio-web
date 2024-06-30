import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEnvelopeSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';
import { DialogService } from '../../shared/confirm-dialog/dialog.service';
import { Loading } from '../../shared/spinner/service/loading.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroEnvelopeSolid, heroPhoneSolid })],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  private readonly dialog = inject(DialogService);
  private readonly loading = inject(Loading);
  ngOnInit() {
    window.scrollTo(0, 0);
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
    setTimeout(() => {
      this.loading.isLoading(false);
      this.dialog.confirmAction(
        'Confirmación de envío',
        '¡El formulario se envió con éxito!',
        () => {}
      );
    }, 2000);
  }
}
