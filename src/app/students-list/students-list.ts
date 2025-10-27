import { Component } from '@angular/core';
import { Student } from '../student/student';

@Component({
  selector: 'app-students-list',
  imports: [Student],
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
}
