import { Component, OnInit } from '@angular/core';
import { Link } from './models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public links: Link[];

  constructor() {
    this.links = [
      { label: 'home', url: '/' },
      { label: 'list', url: '/list' },
      { label: 'about', url: '/about' },
      { label: 'my superheros', url: '/my-superheros' },
    ];
  }
}
