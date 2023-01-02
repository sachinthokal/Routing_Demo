import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  Id: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res) => (this.Id = res['id']));
  }
  ngOnInit() {}
}
