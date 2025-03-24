import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTheBlogComponent } from './news-the-blog.component';

describe('NewsTheBlogComponent', () => {
  let component: NewsTheBlogComponent;
  let fixture: ComponentFixture<NewsTheBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTheBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTheBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
