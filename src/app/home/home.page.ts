import { AdMob } from '@admob-plus/ionic/ngx';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  banner:any;
  constructor(public platform: Platform, public admob: AdMob) {}
  ngOnInit() {
    this.platform.ready().then(async () => {
      if(this.platform.is('cordova')) {
        let adi:string = 'ca-app-pub-3940256099942544/6300978111';
        await this.admob.start();
        if(!this.banner) {
          this.banner = new this.admob.BannerAd({
            adUnitId: adi,
            position: 'bottom'
          });
        }
        await this.banner.show();
      }
    })
  }
}
