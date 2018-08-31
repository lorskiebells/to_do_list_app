import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  //Declaration
  value = '';
  id = '';
  name = '';
  content = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    this.id = data.id;
    this.name = data.name;
    this.content = data.content;
  }

  closeModal() {
    this.view.dismiss();
  }

  save(title, content) {
    console.log('Add');
    const data = {
      id: this.id,
      name: title,
      content: content
    };
    this.view.dismiss(data);
  }

}
