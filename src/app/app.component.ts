import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContentComponent } from "./landing-section/home-content/home-content.component";
import { HeaderComponent } from "./landing-section/header/header.component";
import { HomeContent2Component } from './landing-section/home-content-2/home-content-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeContentComponent, HeaderComponent, HomeContent2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grint';
}
