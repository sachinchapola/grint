import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContentComponent } from "./landing-section/home-content/home-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grint';
}
