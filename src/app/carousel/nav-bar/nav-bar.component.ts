import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavbarModel } from './navbar.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  @Input() isViewMobile: boolean = false;
  @Output() navBtnClicked = new EventEmitter();

  navBarItems: NavbarModel[] = [];
  showDropdown: boolean = false;
  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navBarItems = this.navbarService.getNavItems();
  }

  navClicked(menuItem: string, event: any) {
    if (this.isViewMobile) {
      event.stopPropagation();
      this.trigger.closeMenu();
    }
    this.navBtnClicked.emit(menuItem);
  }
}
