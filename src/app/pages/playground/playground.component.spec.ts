import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundComponent } from './playground.component';

describe('PlaygroundComponent', () => {
    let component: PlaygroundComponent;
    let fixture: ComponentFixture<PlaygroundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaygroundComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaygroundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
