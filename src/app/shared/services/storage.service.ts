import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
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
}
