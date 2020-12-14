import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemOffComponent } from './postagem-off.component';

describe('PostagemOffComponent', () => {
  let component: PostagemOffComponent;
  let fixture: ComponentFixture<PostagemOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
