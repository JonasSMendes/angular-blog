import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextTheBlogComponent } from './info-text-the-blog.component';

describe('InfoTextTheBlogComponent', () => {
  let component: InfoTextTheBlogComponent;
  let fixture: ComponentFixture<InfoTextTheBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTextTheBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTextTheBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
