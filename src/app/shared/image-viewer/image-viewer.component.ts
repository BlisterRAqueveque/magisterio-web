import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  inject
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEyeSolid } from '@ng-icons/heroicons/solid';
import { DomService } from './backdrop/backdrop.service';
import { BackdropComponent } from './backdrop/backdrop.component';

@Component({
  selector: 'm-image-viewer',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroEyeSolid })],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
})
export class ImageViewerComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() class!: string;

  @ViewChild('contenedor', { read: ViewContainerRef })
  contenedor!: ViewContainerRef;

  service = inject(DomService);

  insert() {
    this.service.appendComponentToBody(BackdropComponent, this.src);
  }
}
