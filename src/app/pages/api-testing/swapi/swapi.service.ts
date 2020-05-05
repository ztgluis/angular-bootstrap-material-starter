import { Injectable } from '@angular/core';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable } from 'rxjs';

const Swapi = {
    host: 'https://swapi.dev/api/'
};

@Injectable({
    providedIn: 'root'
})
export class SwapiService {
    constructor(private storageService: StorageService) {}

    getTabs(): Observable<any> {
        return this.storageService.getOrCache(Swapi.host);
    }

    getData(url): Observable<any> {
        return this.storageService.getOrCache(url);
    }
}
