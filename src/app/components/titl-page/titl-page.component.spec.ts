import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlPageComponent } from './titl-page.component';

describe('TitlPageComponent', () => {
  let component: TitlPageComponent;
  let fixture: ComponentFixture<TitlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
