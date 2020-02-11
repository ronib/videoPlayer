import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  title;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.title = "Moment from meeting with Two Pillars";
    this.route.queryParamMap
      .pipe(skip(1)) // skip the first empty map
      .subscribe(queryParams => {
        let id = queryParams.get("id")
        this.apiService.getData(id).subscribe(result => console.log(result));
    })
// handle error
  }

}
