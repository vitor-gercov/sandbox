import { Component } from '@angular/core';

@Component({
  selector: 'app-subgrid',
  standalone: true,
  imports: [],
  templateUrl: './subgrid.component.html',
  styleUrl: './subgrid.component.scss'
})
export class SubgridComponent {
  cards: string[] = [
    'May the Emperor have mercy to the fool that stands against me, for I shall not',
    'I am his shield and his sword',
    'Blood for the blood god, skulls for the skullthrone',
    'Purge the herectics'
  ];
}
