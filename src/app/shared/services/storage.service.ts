import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor(private httpService: HttpService) {}

    get(key: string): any {
        const value = localStorage.getItem(key);
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }

    set(key: string, input: any): string {
        const value = typeof input === 'string' ? input : JSON.stringify(input);
        localStorage.setItem(key, value);
        return value;
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }

    getOrCache(url): Observable<any> {
        const cache = this.get(url);
        if (cache) {
            return of(cache);
        }
        return this.httpService.get(url).pipe(tap(data => this.set(url, data)));
    }
}
