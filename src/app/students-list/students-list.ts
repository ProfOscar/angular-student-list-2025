import { Component } from '@angular/core';
import { Student } from '../student/student';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  imports: [Student, FormsModule],
  templateUrl: './students-list.html',
  styleUrl: './students-list.css',
})
export class StudentsList {
  people: any[] = [
    { "name": "Pippo", "city": "Fossano", "gender": "M", "present": true },
    { "name": "Pluto", "city": "Cuneo", "gender": "M", "present": true },
    { "name": "Minnie", "city": "Alba", "gender": "F", "present": false },
    { "name": "Sonny", "city": "Torino", "gender": "M", "present": true },
    { "name": "Sally", "city": "Fossano", "gender": "F", "present": false },
    { "name": "Elly", "city": "Genola", "gender": "F", "present": true },
    { "name": "Fanny", "city": "Cuneo", "gender": "M", "present": false },
    { "name": "Sandy", "city": "Alba", "gender": "F", "present": true },
    { "name": "John", "city": "Torino", "gender": "M", "present": false },
    { "name": "Joe", "city": "Torino", "gender": "M", "present": true },
    { "name": "Jack", "city": "Fossano", "gender": "M", "present": true }
  ];

  cities: string[] = [
    "Bra", "Fossano", "Alba", "Mondovì", "Cuneo", "Saluzzo"
  ];

  studentName: string = "";
  studentGender: string = this.generaNumero(1, 3) == 1 ? "M" : "F";
  studentCity: string = this.cities[this.generaNumero(0, this.cities.length)];

  onAddStudent() {
    if (this.studentName.length == 0) 
      return;

    let newStudent = {
      name: this.studentName,
      gender: this.studentGender,
      city: this.studentCity,
      present: false
    }

    this.people.push(newStudent);

    this.studentName = "";
    this.studentGender = this.generaNumero(1, 3) == 1 ? "M" : "F";
    this.studentCity = this.cities[this.generaNumero(0, this.cities.length)];
  }

  // estremo superiore escluso
  generaNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
