import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  courseDetails: any = [
    {
      courseName: 'BA',
      duration: '3 Years, 6 Semesters',
      subjects: [
        'Hindi',
        'English',
        'Sanskrit',
        'Geography',
        'Home Science',
        'Sociology',
        'Education',
      ],
    },
    {
      courseName: 'BSc',
      duration: '3 years, 6 semesters',
      subjects: ['Physics', 'Chemistry', 'Maths', 'Zoology', 'Botany'],
    },
    {
      courseName: 'BSc Agriculture',
      duration: '4 years, 8 semesters',
      subjects: null,
    },
  ];
}
