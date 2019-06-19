import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  @Input() bottom: string;
  text: string;
  constructor() {
      let year = (new Date()).getFullYear();
      this.text = `2010-${year} 考勤管理系统`;
  }
  ngOnInit() {
  }
}
