import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../Show';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  @Input()
  show?: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
