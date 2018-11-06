import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  id: string;
  person: string;
  text: string;

  constructor (private viewCtrl: ViewController, private navParams: NavParams, private quotesService: QuotesService) {}

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss();
  }

  onUnfavor() {
    this.quotesService.removeQuoteFromFavoritesById(this.id);
    this.viewCtrl.dismiss();
  }

}
