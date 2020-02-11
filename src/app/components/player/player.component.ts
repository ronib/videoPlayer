import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() id: string;
  title: string = '';
  videoSource: string;

  ngOnInit(): void {
    this.title = 'Moment from meeting with Two Pillars';
   
  }

  ngOnChanges() {
    this.videoSource =  this.id ? `${environment.apiUrl}${this.id}.mp4` : '';
  }

}
