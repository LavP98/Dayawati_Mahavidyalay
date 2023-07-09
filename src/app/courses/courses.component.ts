import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseNameEnum } from './enums/course-name.enums';

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
  courses = CourseNameEnum;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courseDetails = this.coursesService.courseDetails;
  }

  toggleExpansionSubjectsPanel(subject: string) {
    switch (subject) {
      case 'BA':
        this.hideBa = !this.hideBa;
        this.hideBsc = true;
        this.hideBscAgriculture = true;
        break;
      case 'BSc':
        this.hideBsc = !this.hideBsc;
        this.hideBa = true;
        this.hideBscAgriculture = true;
        break;
      case 'BSc Agriculture':
        this.hideBscAgriculture = !this.hideBscAgriculture;
        this.hideBa = true;
        this.hideBsc = true;
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
