import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams) {}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add elvis operator (?) in template to use this approach
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

}
