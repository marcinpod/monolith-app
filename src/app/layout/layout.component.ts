import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
