import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Talk } from '../../models/interfaces';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnChanges {
  @Input() transcript: Talk[] = [];
  displayTranscript: Talk[] = [];

  ngOnChanges() {
    this.processTranscript();
  }

  processTranscript() {
    const talksComparator = (a: Talk, b: Talk) => (a.time > b.time) ? 1 : -1;
    this.transcript.sort(talksComparator);
    this.displayTranscript = this.mergeTalks();
  }

  mergeTalks(): Talk[] {
    let result: Talk[] = [];
    if (!this.transcript || this.transcript.length === 0) return result;
    let prev = this.transcript[0];
    for (let i=1; i< this.transcript.length; i++) {
      let curr = this.transcript[i];
      if (prev.speaker !== curr.speaker) {
        result.push(prev);
        prev = curr;
      } else {
        prev.snippet += ", " + curr.snippet;   
      }
    }
    result.push(prev);
    return result;
  }
}
