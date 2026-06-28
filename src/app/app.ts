import { Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import {HeaderComponent} from "../components";
import {FooterComponent} from "../components/footer/footer.component";
import { AppToastComponent } from '../components/app-toast/app-toast.component';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AppToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'ed-portfolio';
  isRouteLoading = false;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(event => {
      this.isRouteLoading = event instanceof NavigationStart;
    });
  }
}
