import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContentComponent } from "./landing-section/home-content/home-content.component";
import { HeaderComponent } from "./landing-section/header/header.component";
import { HomeContent2Component } from './landing-section/home-content-2/home-content-2.component';
import { HomeContent3Component } from "./landing-section/home-content-3/home-content-3.component";
import { HomeContent4Component } from "./landing-section/home-content-4/home-content-4.component";
import { HomeContent5Component } from "./landing-section/home-content-5/home-content-5.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeContentComponent, HeaderComponent, HomeContent2Component, HomeContent3Component, HomeContent4Component, HomeContent5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grint';
}
