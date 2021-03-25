import {Component, OnInit} from '@angular/core';
import {Show} from '../model/Show';
import {ActivatedRoute, Router} from '@angular/router';
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
    private router: Router,
    private showService: ShowService
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.isInEditMode = id !== 0;
    if (this.isInEditMode) {
      this.getShow(id);
    } else {
      this.show = {
        id: undefined,
        title: '',
        releaseYear: undefined,
        imdbUrl: '',
        netflixUrl: '',
        coverUrl: undefined,
        myRating: 1,
      };
    }
    if (!this.isInEditMode) {
      this.pageTitle = 'Add a new show';
    }
  }

  goBack(id): void {
    if (id === undefined && !this.isInEditMode){
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(`/shows/${id}`);
    }
  }

  save(): void {
    if (this.isInEditMode) {
      this.showService.updateShow(this.show).subscribe(() => this.goBack(this.show.id));
    } else {
      this.showService.addShow(this.show).subscribe(show => this.goBack(show.id));
    }
  }

  getShow(id: number): void {
    this.showService.getShow(id).subscribe(show => {
      this.show = show;
      this.pageTitle = `Editing ${show.title}`;
    });
  }
}
