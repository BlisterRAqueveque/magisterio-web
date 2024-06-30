import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { Loading } from './service/loading.service';

@Component({
  selector: 'c-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  private readonly loading = inject(Loading);

  show = false;

  ngAfterViewInit() {
    this.loading.$loading.subscribe((condition) => {
      this.show = condition;
    });
    this.setAnimation(0);
  }

  @ViewChildren('item') items!: QueryList<ElementRef<HTMLDivElement>>;

  setAnimation(index: number) {
    const el = this.items.get(index);
    if (el)
      setTimeout(() => {
        el.nativeElement.classList.add('spinner');
        this.setAnimation(index + 1);
      }, 100); //250 - 150 - 100
  }
}
