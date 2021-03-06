import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptComponent } from './transcript.component';

describe('TranscriptComponent', () => {
  let component: TranscriptComponent;
  let fixture: ComponentFixture<TranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should merge empty talks', () => {
    const emptyResult = component.mergeTalks();

    expect(emptyResult.length).toEqual(0);
  });

});
