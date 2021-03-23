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
        let adi:string;
        if(this.platform.is('ios')) adi = 'ca-app-pub-9895747093869252/4786750647';
        else if(this.platform.is('android')) adi = 'ca-app-pub-9895747093869252/5532037861';
        if(true) adi = 'ca-app-pub-3940256099942544/6300978111';
        await this.admob.start();
        if(!this.banner) {
          this.banner = new this.admob.BannerAd({
            adUnitId: adi,
            position: 'top'
          });
        }
        await this.banner.show();
      }
    })
  }
}
