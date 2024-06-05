import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
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

    if (this.includeAlphabets) {
      chars += alphabets;
    }

    if (this.includeNumbers) {
      chars += numbers;
    }

    if (this.includeSpecialChars) {
      chars += specialChars;
    }

    if (chars === '') {
      this.generatedPassword = '';
      return;
    }

    let password = '';

    // Ensure at least one character from each selected type
    if (this.includeAlphabets) {
      password += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }

    if (this.includeNumbers) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    if (this.includeSpecialChars) {
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }

    // Generate the rest of the password
    for (let i = password.length; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }

    // Shuffle the password to avoid predictable patterns
    this.generatedPassword = password.split('').sort(() => Math.random() - 0.5).join('');
  }

  toggleButtonDisabled(): void {
    this.isButtonDisabled = (this.length < 8 || this.length > 15);
  }
}
