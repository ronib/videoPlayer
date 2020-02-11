import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Talk } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  videoId: string;
  error: string;
  transcript: Talk[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.parseVideoId = this.parseVideoId.bind(this);
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(this.parseVideoId);
  }

  parseVideoId(queryParams) {
    this.videoId = queryParams.get("id");
    if (this.videoId) {
      this.error = "";
      this.getVideoData();
    } else {
      this.error = "missing id";
    }
  }

  getVideoData() {
    this.apiService.getTranscript(this.videoId).subscribe(
      result => {
        this.transcript = result;
      },
      error => this.error = 'Video does not exist');
  }

  
}
