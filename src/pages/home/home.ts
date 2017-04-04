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
                      });
  }
  openComicDetail(comic){
    this.navCtrl.push(comicDetail, {comic: comic});
  }
  getItems(ev){

  }
}
