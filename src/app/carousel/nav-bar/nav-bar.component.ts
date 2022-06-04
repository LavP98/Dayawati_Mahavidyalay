import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

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

  showDropdown: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  navClicked(menuItem: string, event: any) {
    if (this.isViewMobile) {
      event.stopPropagation();
      this.trigger.closeMenu();
    }
    this.navBtnClicked.emit(menuItem);
  }
}
