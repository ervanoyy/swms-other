import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
//import { Tab1Page } from '../pages/tab1/tab1';
import { dataDiriItem } from '../../models/data-diri/data-diri.interface';
import { EditProfilePage } from '../editprofil/editprofil';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilePage {
  dataDiriItemRef$: FirebaseListObservable<dataDiriItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase ) {

    this.dataDiriItemRef$ = this.database.list(`profilee`);
    //this.dataDiriRef$.subscribe(x => console.log(x));

  }

  GoToEditProfile() {
    this.navCtrl.push(EditProfilePage, { dataDiriId: dataDiriItem.$key });
  }
}
