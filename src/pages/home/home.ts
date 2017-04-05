import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ComicService } from '../../services/comic.service';
import { comicDetail } from './comicDetail/comicDetail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ComicService]
})
export class HomePage{
  public listComics = [];
  private _list = [];

  constructor(public navCtrl: NavController,
              private comicService: ComicService) {
                    var info = this.comicService.getComics();
                    info.subscribe(
                      data => {
                        data.json().data.results.forEach(e => {
                          this.listComics.push({
                            id:e.id,
                            thumbnail:e.thumbnail,
                            title:e.title,
                            description: e.description,
                            series:e.series,
                            images:e.images,
                            prices:e.prices,
                            dates:e.dates});
                        });
                        this._list=this.listComics;
                      });
  }
  openComicDetail(comic){
    this.navCtrl.push(comicDetail, {comic: comic});
  }
  getItems(ev){
    this.listComics = this._list;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listComics = this.listComics.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

    }
  }
}
