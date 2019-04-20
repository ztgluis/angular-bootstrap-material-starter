import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
    let service: StorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(StorageService);
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
});
