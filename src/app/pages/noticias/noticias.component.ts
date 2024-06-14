import { Component, inject } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoticiasI } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss',
})
export class NoticiasComponent {
  private readonly service = inject(NoticiasService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  noticia!: NoticiasI;

  ngOnInit() {
    this.route.queryParams.subscribe((query) => {
      const id = query['id'];
      if (!id) this.router.navigate(['home']);
      this.service.getOneNoticia(+id).subscribe({
        next: (data) => {
          if (data) this.noticia = data;
          else this.router.navigate(['home']);
        },
        error: (e) => {
          console.error(e);
          this.router.navigate(['home']);
        },
      });
    });
  }
}
