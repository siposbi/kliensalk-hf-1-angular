import {Component, OnInit} from '@angular/core';
import {Show} from '../model/Show';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ShowService} from '../model/api/show.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  show: Show;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService,
    private location: Location,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getShow();
  }

  private getShow(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.showService.getShow(id).subscribe(show => this.show = show);
  }

  remove(): void {
    this.showService.deleteShow(this.show.id).subscribe(() => this.goToRoot());
  }

  goBack(): void {
    this.location.back();
  }

  goToRoot(): void {
    this.router.navigate(['..']);
  }

  openModal(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.remove();
    }, () => {
    });
  }
}
