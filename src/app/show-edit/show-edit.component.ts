import {Component, OnInit} from '@angular/core';
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
  show: Show;
  pageTitle: string;
  isInEditMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.getShow(id);
    } else {
      this.show = {
        id: undefined,
        title: '',
        releaseYear: undefined,
        imdbUrl: '',
        netflixUrl: '',
        myRating: undefined,
      };
    }
    this.isInEditMode = this.route.snapshot.url[1].path !== 'new';
    if (!this.isInEditMode) {
      this.pageTitle = 'Add a new show';
    }
  }

  private getShow(id: number): void {
    this.showService.getShow(id).subscribe(show => {
      this.show = show;
      this.pageTitle = `Editing ${show.title}`;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.isInEditMode) {
      this.showService.updateShow(this.show).subscribe(() => this.goBack());
    } else {
      this.showService.addShow(this.show).subscribe(() => this.goBack());
    }
  }
}
