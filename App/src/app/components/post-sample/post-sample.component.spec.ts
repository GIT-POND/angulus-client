import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSampleComponent } from './post-sample.component';

describe('PostSampleComponent', () => {
  let component: PostSampleComponent;
  let fixture: ComponentFixture<PostSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
