import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../model/Show';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ShowService} from '../model/api/show.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {

  @Input()
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
    this.showService.updateShow(this.show).subscribe(() => this.goBack());
  }
}
