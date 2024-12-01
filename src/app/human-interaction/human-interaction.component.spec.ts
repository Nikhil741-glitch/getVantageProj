import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanInteractionComponent } from './human-interaction.component';

describe('HumanInteractionComponent', () => {
  let component: HumanInteractionComponent;
  let fixture: ComponentFixture<HumanInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
