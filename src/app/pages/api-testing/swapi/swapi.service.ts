import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@app/shared/services/storage.service';
import { forkJoin, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const Swapi = {
    host: 'https://swapi.co/api/'
};

@Injectable({
    providedIn: 'root'
})
export class SwapiService {
    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) {}

    getTabs() {
        return this.cache(Swapi.host);
    }

    getData(url) {
        return this.cache(url);
    }

    cache(url): Observable<any> {
        const cache = this.storageService.get(url);
        if (cache) {
            return of(cache);
        }
        return this.requestData(url).pipe(
            tap(data => this.storageService.set(url, data))
        );
    }

    /** API's */

    private requestAll(url) {
        return forkJoin([this.requestData(url), this.requestSchema(url)]).pipe(
            tap(res => {
                res[0]['schema'] = res[1];
            })
        );
    }
    private requestData(url) {
        return this.http.get(url);
    }

    private requestSchema(url) {
        return this.http.get(`${url}schema`);
    }

    // private getData(entity) {
    //     return this.http.get(`${Swapi.host}${entity}`);
    // }

    // getAll(entity) {
    //     return this.http.get(`${this.ENTITIES[entity]}`);
    // }

    // getOne(entity, id) {
    //     return this.http.get(`${this.ENTITIES[entity]}/${id}`);
    // }

    // getSchema(entity) {
    //     return this.http.get(`${this.ENTITIES[entity]}/schema`);
    // }
}
