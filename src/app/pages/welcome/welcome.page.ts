import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MenuController, Slides} from '@ionic/angular';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePage implements OnInit {
  showSkip = true;
  @ViewChild('slides') slides: Slides;
  constructor(private localStorageService: LocalStorageService, private router: Router,
              private menuController: MenuController) { }
  ngOnInit() {
  }
  ionViewDidEnter() {
      this.menuController.enable(false);
  }
  ionViewDidLeave() {
      this.menuController.enable(true);
  }
  onSlideWillChange(event) {
    this.slides.isEnd().then((end) => {
          this.showSkip = !end;
      });
  }
  startApplication() {
      this.router.navigateByUrl('\home');
  }
}
