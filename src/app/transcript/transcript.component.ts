import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../interfaces';
@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
  @Input() transcript: Talk[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

}
