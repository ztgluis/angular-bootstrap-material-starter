import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
describe('StorageService', () => {
    let service: StorageService;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('HttpService', ['get']);
        TestBed.configureTestingModule({
            providers: [{ provide: HttpService, useValue: spy }]
        });
        service = TestBed.get(StorageService);
        httpServiceSpy = TestBed.get(HttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#set', () => {
        it('should store a string', () => {
            const result = service.set('someKey', 'some string');
            expect(result).toEqual('some string');
        });
        it('should store an object', () => {
            const result = JSON.parse(
                service.set('someKey', {
                    prop1: 'value1',
                    prop2: 'value2'
                })
            );
            expect(result).toBeDefined();
            expect(result.prop1).toEqual('value1');
            expect(result.prop2).toEqual('value2');
        });
    });

    describe('#get', () => {
        it('should return null if key not found', () => {
            const result = service.get('undefinedKey');
            expect(result).toBeNull();
        });
        it('should retrieve a string', () => {
            service.set('someKey', 'some string');
            const result = service.get('someKey');
            expect(result).toEqual('some string');
        });
        it('should retrieve an object', () => {
            service.set('someObj', {
                prop1: 'value1',
                prop2: 'value2'
            });
            const result = service.get('someObj');
            expect(result).toBeDefined();
            expect(result.prop1).toEqual('value1');
            expect(result.prop2).toEqual('value2');
        });
    });

    describe('#remove', () => {
        it('should remove an entry', () => {
            service.set('someKey', 'some string');
            expect(service.get('someKey')).toEqual('some string');

            service.remove('someKey');
            expect(service.get('someOtherKey')).toBeNull();
        });
    });

    describe('#clear', () => {
        it('should clear everything', () => {
            service.set('someKey', 'some string');
            service.set('someOtherKey', 'some other string');
            expect(service.get('someKey')).toEqual('some string');
            expect(service.get('someOtherKey')).toEqual('some other string');

            service.clear();
            expect(service.get('someKey')).toBeNull();
            expect(service.get('someOtherKey')).toBeNull();
        });
    });
    describe('#getOrCache', () => {
        it('should make a request if no cached valued exists', () => {
            const testUrl = 'https://swapi.co/api/';
            const testData = {
                films: 'https://swapi.co/api/films/',
                people: 'https://swapi.co/api/people/',
                planets: 'https://swapi.co/api/planets/',
                species: 'https://swapi.co/api/species/',
                starships: 'https://swapi.co/api/starships/',
                vehicles: 'https://swapi.co/api/vehicles/'
            };

            service.remove(testUrl);
            const getSpy = httpServiceSpy.get.and.returnValue(of(testData));
            service.getOrCache(testUrl).subscribe(data => {
                expect(data).toEqual(testData);
                expect(getSpy).toHaveBeenCalledTimes(1);
                expect(getSpy).toHaveBeenCalledWith(testUrl);
            });
        });

        it('should return a cached value if one exists', () => {
            const testUrl = 'https://swapi.co/api/';
            const testData = {
                films: 'https://swapi.co/api/films/',
                people: 'https://swapi.co/api/people/',
                planets: 'https://swapi.co/api/planets/',
                species: 'https://swapi.co/api/species/',
                starships: 'https://swapi.co/api/starships/',
                vehicles: 'https://swapi.co/api/vehicles/'
            };
            service.set(testUrl, testData);
            service
                .getOrCache(testUrl)
                .subscribe(data => expect(data).toEqual(testData));
            expect(httpServiceSpy.get).toHaveBeenCalledTimes(0);
        });
    });
});
