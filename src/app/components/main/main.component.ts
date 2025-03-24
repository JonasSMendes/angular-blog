import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { MainCardComponent } from "../main-card/main-card.component";
import { NewsTheBlogComponent } from "../news-the-blog/news-the-blog.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, MainCardComponent, NewsTheBlogComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
