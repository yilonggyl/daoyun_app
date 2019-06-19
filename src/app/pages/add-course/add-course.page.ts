import {Component, NgZone, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../shared/course';
import {LocalStorageService} from '../../services/local-storage.service';
import {AlertController, Events, ToastController} from '@ionic/angular';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  course: Course;
  constructor(private location: Location, private activatedRoute: ActivatedRoute,
              private localStorage: LocalStorageService, private alertController: AlertController,
              private router: Router, private toastController: ToastController,
              private ngZone: NgZone, private events: Events) {
      this.course = {
          name: '',
          courseId: UUID.UUID(),
          desc: '',
          owner: '',
          teacher: '',
          maxNum: 0
      };
      activatedRoute.queryParams.subscribe(queryParams => {
          this.course.owner = queryParams.owner;
      });
  }

  ngOnInit() {
  }
  back() {
      this.location.back();
  }

  async onSave() {
      if (this.course.maxNum > 0) {
          let c = this.localStorage.get('course', []);
          c.push(this.course);
          let alert = await this.alertController.create({
              header: '提示',
              message: '新增成功',
              buttons: ['确定']
          });
          alert.present();
          this.ngZone.run( () => {
              this.localStorage.set('course', c);
              this.events.publish('course:created', c, Date.now());
              this.router.navigateByUrl('tabs');
          });
      } else {
          let toast = await this.toastController.create({
              message: '请注意限选人数要大于0！',
              duration: 3000
          });
          toast.present();
      }
  }
}
