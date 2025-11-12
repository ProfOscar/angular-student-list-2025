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

  newStudent = {
    name: "",
    gender: this.generaNumero(1, 3) == 1 ? "M" : "F",
    city: this.cities[this.generaNumero(0, this.cities.length)],
    present: false
  }

  onAddStudent() {
    if (this.newStudent.name.length == 0)
      return;

    this.people.push(this.cloneObject(this.newStudent));

    this.newStudent.name = "";
    this.newStudent.gender = this.generaNumero(1, 3) == 1 ? "M" : "F";
    this.newStudent.city = this.cities[this.generaNumero(0, this.cities.length)];
  }

  onDeleteStudent() {
    for (let i = 0; i < this.people.length; i++) {
      if (this.people[i].name == this.newStudent.name) {
        console.log(i);
        this.people.splice(i, 1);
        return
      }
    }
  }

  // restituisce un clone dell'oggetto in input
  cloneObject(obj: object) {
    return JSON.parse(JSON.stringify(obj))
  }

  // estremo superiore escluso
  generaNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
