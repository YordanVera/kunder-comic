import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ComicService]
})
export class HomePage implements OnInit{
  public listComics;

  constructor(public navCtrl: NavController,
              private comicService: ComicService) {
                    var info = this.comicService.getComics();
                    info.subscribe(
                      data => {
                        this.listComics = data.json().data.results;
                      }
                    );
  }
  ngOnInit(){

  }
}
