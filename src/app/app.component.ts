import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubgridComponent } from './components/subgrid/subgrid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SubgridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
