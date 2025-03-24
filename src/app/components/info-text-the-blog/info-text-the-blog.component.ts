import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-text-the-blog',
  imports: [],
  templateUrl: './info-text-the-blog.component.html',
  styleUrl: './info-text-the-blog.component.scss'
})
export class InfoTextTheBlogComponent {

  @Input() info: string = ""
  @Input() authorName: string = ""

}
