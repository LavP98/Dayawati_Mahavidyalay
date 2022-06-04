import { Injectable } from '@angular/core';
import { NavbarModel } from './navbar.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  navBarItems: NavbarModel[] = [
    { name: 'Courses', navItem: 'courses' },
    { name: 'Quick Links', navItem: 'quick-links' },
    { name: 'Contact Us', navItem: 'contact_us' },
  ];

  public getNavItems() {
    return [...this.navBarItems];
  }
}
