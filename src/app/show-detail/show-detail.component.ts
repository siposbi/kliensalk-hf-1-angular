import {Component, OnInit} from '@angular/core';
import {Show} from '../Show';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ShowService} from '../show.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Show;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getShow();
  }

  private getShow(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.showService.getShow(id).subscribe(show => this.show = show);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.show);
    // this.showService.updateShow(this.show).subscribe(() => this.goBack());
  }
}
