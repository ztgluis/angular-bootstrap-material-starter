import { TestBed } from '@angular/core/testing';
import { StorageService } from '@app/shared/services/storage.service';
import { of } from 'rxjs';
import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
    let service: SwapiService;
    let storageServiceSpy: jasmine.SpyObj<StorageService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('StorageService', ['getOrCache']);

        TestBed.configureTestingModule({
            providers: [{ provide: StorageService, useValue: spy }]
        });
        service = TestBed.get(SwapiService);
        storageServiceSpy = TestBed.get(StorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getTabs', () => {
        it('should get tabs data from base URL', () => {
            const testUrl = 'https://swapi.dev/api/';
            const testData = {
                films: `${testUrl}films/`,
                people: `${testUrl}people/`,
                planets: `${testUrl}planets/`,
                species: `${testUrl}species/`,
                starships: `${testUrl}starships/`,
                vehicles: `${testUrl}vehicles/`
            };
            const getOrCacheSpy = storageServiceSpy.getOrCache.and.returnValue(
                of(testData)
            );

            service.getTabs().subscribe(data => {
                expect(data).toEqual(testData);
                expect(getOrCacheSpy).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe('#getData', () => {
        it('should get data from a given URL', () => {
            const testUrl = 'https://swapi.dev/api/films';
            const testData = {
                characters: ['https://swapi.dev/api/people/1/'],
                created: '2014-12-10T14:23:31.880000Z',
                director: 'George Lucas',
                edited: '2014-12-12T11:24:39.858000Z',
                episode_id: 4,
                opening_crawl:
                    "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
                planets: ['https://swapi.dev/api/planets/1/'],
                producer: 'Gary Kurtz, Rick McCallum',
                release_date: '1977-05-25',
                species: ['https://swapi.dev/api/species/1/'],
                starships: ['https://swapi.dev/api/starships/2/'],
                title: 'A New Hope',
                url: 'https://swapi.dev/api/films/1/',
                vehicles: ['https://swapi.dev/api/vehicles/4/']
            };
            const getOrCacheSpy = storageServiceSpy.getOrCache.and.returnValue(
                of(testData)
            );

            service.getData(testUrl).subscribe(data => {
                expect(data).toEqual(testData);
                expect(getOrCacheSpy).toHaveBeenCalledWith(testUrl);
            });
        });
    });
});
