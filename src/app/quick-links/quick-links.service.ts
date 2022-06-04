import { Injectable } from '@angular/core';
import { Quicklinks } from './quick-links.model';

@Injectable({
  providedIn: 'root',
})
export class QuickLinksService {
  constructor() {}

  quickLinks: Quicklinks[] = [
    {
      name: 'Online Registration For Generating Unique Identification Number (UIN)',
      link: 'http://www.rmlau.site/',
    },
    {
      name: 'Examination Form',
      link: 'https://rmlauexams.co.in/',
    },
    {
      name: 'Result/ Marksheet',
      link: 'http://results.rmlauexams.in/Marks_Sheet/main.aspx',
    },
    {
      name: 'Online Application for Degree, Provisional, Duplicate Marksheet & Migration',
      link: 'http://www.rmlau.info/Provisional/',
    },
  ];

  public getLinks() {
    return [...this.quickLinks];
  }
}
