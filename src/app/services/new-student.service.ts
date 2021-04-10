import { Characters } from './../models/bio';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class NewStudentService {
  newStudents: Characters[] = [
    {
      id: 0,
      name: 'Alex',
      patronus: 'Horse',
      house: 'Gryffindor',
      dateOfBirth: 21 - 12 - 1999,
      image: '',
    },
    {
      id: 1,
      name: 'Angela',
      patronus: 'Horse',
      house: 'Gryffindor',
      dateOfBirth: 21 - 12 - 1999,
      image: '',
    },
    {
      id: 2,
      name: 'Dania',
      patronus: 'Cat',
      house: 'Gryffindor',
      dateOfBirth: 21 - 12 - 1999,
      image: '',
    },
  ];

  constructor() {}

  createStudent(newStudent: Characters) {
    const itemIndex = this.newStudents.length;
    newStudent.id = this.getnextId();
    console.log(newStudent);
    this.newStudents[itemIndex] = newStudent;
  }

  getallStudent(): Characters[] {
    console.log(this.newStudents);
    return this.newStudents;
  }

  getnextId(): number {
    let highest = 0;
    this.newStudents.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
