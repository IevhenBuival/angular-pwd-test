import { Component, signal } from '@angular/core';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-mainform',
  standalone: true,
  imports: [],
  templateUrl: './mainform.component.html',
  styleUrl: './mainform.component.css',
})
export class MainformComponent {
  password = signal('');
  colormap = signal(['grey', 'grey', 'grey']);

  constructor(private validator: ValidatorService) {}
  strongGrade(text: string) {
    return (
      +this.validator.isNumbers(text) +
      (this.validator.isLetters(text) ? 1 : 0) +
      (this.validator.isSymbols(text) ? 1 : 0)
    );
  }

  handleChange(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const newvalue = target.value as string;
    this.password.set(newvalue);

    if (this.validator.isEmpty(newvalue)) {
      this.colormap.set(['grey', 'grey', 'grey']);
      return;
    }
    if (this.validator.isShort(newvalue)) {
      this.colormap.set(['red', 'red', 'red']);
      return;
    }
    const grade = this.strongGrade(newvalue);
    if (grade === 1) {
      this.colormap.set(['red', 'grey', 'grey']);
      return;
    }
    if (grade === 2) {
      this.colormap.set(['yellow', 'yellow', 'grey']);
      return;
    }
    if (grade === 3) {
      this.colormap.set(['green', 'green', 'green']);
      return;
    }
  }
}
