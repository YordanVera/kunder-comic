import { Component }    from '@angular/core';
import { NavParams }    from 'ionic-angular';
import { ComicService } from '../../../services/comic.service';

@Component({
    selector    : 'comicDetail',
    templateUrl : 'comicDetail.html',
    providers   : [ComicService]
})

export class comicDetail{
    private comic;
    section: string = 'description';
    private characters;
    private creators;
    constructor(params: NavParams,
                private comicService: ComicService){
        this.comic = params.data.comic;
        this.loadCharacters(this.comic.id);
        this.loadCreators(this.comic.id);
    }
    loadCharacters(comicId){
        this.comicService.getCharacters(comicId).subscribe(
            data => {
                this.characters = data.json().data.results;
            }
        );
        
    }
    loadCreators(comicId){
        this.comicService.getCreators(comicId).subscribe(
            data => {
                this.creators = data.json().data.results;
            }
        );

    }
}