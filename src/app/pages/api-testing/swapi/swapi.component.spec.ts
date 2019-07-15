import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { SwapiComponent } from './swapi.component';
import { SwapiService } from './swapi.service';

describe('SwapiComponent', () => {
    let component: SwapiComponent;
    let fixture: ComponentFixture<SwapiComponent>;
    let swapiServiceSpy: jasmine.SpyObj<SwapiService>;

    beforeEach(async(() => {
        const spy = jasmine.createSpyObj('SwapiService', [
            'getTabs',
            'getData'
        ]);

        TestBed.configureTestingModule({
            imports: [MatTableModule],
            declarations: [SwapiComponent],
            providers: [{ provide: SwapiService, useValue: spy }],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwapiComponent);
        component = fixture.componentInstance;
        swapiServiceSpy = TestBed.get(SwapiService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#getData()', () => {
        it('should get data from Swapi Service', async(() => {
            component.getData('some-url');
            expect(swapiServiceSpy.getData).toHaveBeenCalled();
        }));
    });
});
