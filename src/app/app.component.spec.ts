import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [AppComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-integration-testing'`, () => {
        expect(app.title).toEqual('angular-integration-testing');
    });

    it('should have a router outlet', () => {
        const de = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(de).not.toBeNull();
    });
});
