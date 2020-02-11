import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs/operators';
import { Talk } from './interfaces';

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
  }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(skip(1)) // skip the first empty map
      .subscribe(
        queryParams => {
        this.videoId = queryParams.get("id");
        this.apiService.getTranscript(this.videoId).subscribe(
          result => {
            this.transcript = result.sort((a, b) => (a.time > b.time) ? 1 : -1);
          },
          error => {console.log(error); this.error = 'wrong id';});
    })
    
  }
}
