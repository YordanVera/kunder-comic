import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ComicService {
    static URL: string = 'http://gateway.marvel.com';

    constructor (private http: Http) {
    }
    getComics(){
        const search: URLSearchParams = new URLSearchParams();
        search.set('ts', '1');
        search.set('apikey', 'ca9bc801b4851bb9a88bd913281bde1f');
        search.set('hash', '62c6854ae7b03783c07658effef3d43b');
        return this.http
        .get(ComicService.URL+'/v1/public/comics', new RequestOptions({search}));
    }
    getCharacters(comicId){
        const search: URLSearchParams = new URLSearchParams();
        search.set('ts', '1');
        search.set('apikey', 'ca9bc801b4851bb9a88bd913281bde1f');
        search.set('hash', '62c6854ae7b03783c07658effef3d43b');
        return this.http
        .get(ComicService.URL+'/v1/public/comics/'+comicId+'/characters', new RequestOptions({search}));
    }
    getCreators(comicId){
        const search: URLSearchParams = new URLSearchParams();
        search.set('ts', '1');
        search.set('apikey', 'ca9bc801b4851bb9a88bd913281bde1f');
        search.set('hash', '62c6854ae7b03783c07658effef3d43b');
        return this.http
        .get(ComicService.URL+'/v1/public/comics/'+comicId+'/creators', new RequestOptions({search}));
    }
}