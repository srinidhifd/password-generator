import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-projects';
  length: number = 8;
  includeAlphabets: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  generatedPassword: string = '';
  isButtonDisabled: boolean = false;

  generatePassword(): void {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~';
    let chars = '';

    if (!this.includeAlphabets && !this.includeNumbers && !this.includeSpecialChars) {
      chars = alphabets;
    } else {
      if (this.includeAlphabets) {
        chars += alphabets;
      }

      if (this.includeNumbers) {
        chars += numbers;
      }

      if (this.includeSpecialChars) {
        chars += specialChars;
      }
    }


    let password = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }

    this.generatedPassword = password;
  }
    toggleButtonDisabled(): void {
      this.isButtonDisabled = (this.length < 8 || this.length > 15);
  }
}
