import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { ResolucionesI } from '../../interfaces/resoluciones.interface';

@Component({
  selector: 'd-dialog',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ heroXMarkSolid })],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  resol!: ResolucionesI;

  visible = false;

  present(resol: ResolucionesI) {
    this.resol = resol;
    const body = document.getElementById('body-principal');
    body?.classList.add('overflow-hidden');
    this.visible = true;
  }

  dismiss() {
    const body = document.getElementById('body-principal');
    body?.classList.remove('overflow-hidden');
    this.visible = false;
  }
}
