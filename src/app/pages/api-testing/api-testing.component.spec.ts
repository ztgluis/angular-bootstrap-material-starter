import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTestingComponent } from './api-testing.component';

xdescribe('ApiTestingComponent', () => {
    let component: ApiTestingComponent;
    let fixture: ComponentFixture<ApiTestingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ApiTestingComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApiTestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
