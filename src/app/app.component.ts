import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user.compoent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My first angular app';
  yourName: string | null = 'John Doe';
  greetings = 'Welcome to Angular';
  activities: string[] | [] = ['Learn Angular', 'Learn configuration', 'integrate tailwindcss', 'Learn how to use components'];
  
  greetMe() {
    const allGreetings = ['Mwaramutse','Hello', 'Salut', 'Jambo', 'Nihao', 'Salve', 'Habali'];
    const choice = Math.floor(Math.random()*allGreetings.length);
    console.log(choice);
    this.greetings = allGreetings[choice];
  }
}
