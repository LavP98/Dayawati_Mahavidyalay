import { Component, OnInit } from '@angular/core';
import { Quicklinks } from './quick-links.model';
import { QuickLinksService } from './quick-links.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css'],
})
export class QuickLinksComponent implements OnInit {
  quickLinks: Quicklinks[] = [];

  constructor(private quickLinksService: QuickLinksService) {}

  ngOnInit(): void {
    this.quickLinks = this.quickLinksService.getLinks();
  }
}
