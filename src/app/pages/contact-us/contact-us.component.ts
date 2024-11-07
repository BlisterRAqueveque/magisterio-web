import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEnvelopeSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';
import { DialogService } from '../../shared/confirm-dialog/dialog.service';
import { Loading } from '../../shared/spinner/service/loading.service';
import { MailService } from '../../services';
import { ContactUsMail } from '../../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgIconComponent, FormsModule],
  providers: [provideIcons({ heroEnvelopeSolid, heroPhoneSolid })],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  private readonly dialog = inject(DialogService);
  private readonly loading = inject(Loading);
  private readonly service = inject(MailService);

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  consulta: string = '';

  sendForm() {
    this.dialog.present(
      'Envío de formulario.',
      '¿Está seguro de enviar el siguiente formulario de contacto?',
      () => {
        const mail: ContactUsMail = {
          nombre: `${this.nombre} ${this.apellido}`,
          correo: this.correo,
          telefono: this.telefono,
          consulta: this.consulta,
        };
        this.onSendForm(mail);
      }
    );
  }
  onSendForm(mail: ContactUsMail) {
    this.loading.isLoading(true);
    this.service.sendMail(mail).subscribe({
      next: (data) => {
        this.loading.isLoading(false);
        this.clear();
        setTimeout(() => {
          this.dialog.confirmAction(
            'Envío de formulario.',
            'El formulario de contacto se envió correctamente',
            () => {}
          );
        }, 300);
      },
      error: (e) => {
        this.loading.isLoading(false);
        console.error(e);
        this.dialog.error(
          'Error en el envío de formulario',
          'Ocurrió un error durante el envío del formulario de contacto.',
          () => {}
        );
      },
    });
  }

  clear() {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.telefono = '';
    this.consulta = '';
  }
}
