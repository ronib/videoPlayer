import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  title: string;
  videoSource: string;
  @Input() id: string;
  error: string;

  constructor() { 
  }

  ngOnInit(): void {
    this.title = "Moment from meeting with Two Pillars";
    
    
  }

  ngOnChanges() {

    this.error = (!this.id) ? "missing id parameter" : null;
    this.videoSource = `${environment.apiUrl}${this.id}.mp4`

    
  }

}
