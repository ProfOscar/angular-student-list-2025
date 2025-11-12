import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  @Input() student: any;

  maleColor = "lightblue";
  femaleColor = "pink";

  ngOnInit() {
    let num: number = this.generaNumero(1, 3);
    console.log(num);
    this.student.present = num == 1;
  }

  // estremo superiore escluso
  generaNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getStyle(student: any) {
    const color: string = student.gender == "F" ? this.femaleColor : this.maleColor;
    const decoration: string = student.present ? "none" : "underline";
    const weight: string = student.present ? "normal" : "bold";

    return {
      "backgroundColor": color,
      "textDecoration": decoration,
      "font-weight": weight
    }
  }

  onStudentClick() {
    this.student.present = !this.student.present;
  }
}
