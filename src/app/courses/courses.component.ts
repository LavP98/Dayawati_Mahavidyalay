import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  hideBa: boolean = true;
  hideBsc: boolean = true;
  hideBscAgriculture: boolean = true;
  courseDetails: any;
  showExpansion: boolean = false;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courseDetails = this.coursesService.courseDetails;
  }

  toggleExpansionSubjectsPanel(subject: string) {
    this.hideBa = true;
    this.hideBsc = true;
    this.hideBscAgriculture = true;

    switch (subject) {
      case 'BA':
        this.hideBa = false;
        break;
      case 'BSc':
        this.hideBsc = false;
        break;
      case 'BSc Agriculture':
        this.hideBscAgriculture = false;
        break;
    }
  }

  getCourseDetails(subject: string) {
    let course = this.courseDetails.find(
      (obj: { courseName: string }) => obj.courseName == subject
    );
    if (!course) {
      return;
    }
    return course;
  }
}
