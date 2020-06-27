import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

class RouterStub {
    navigate(params) {
    }
}

class ActivatedRouteStub {
    private subject = new Subject();

    push(value) {
        this.subject.next(value);
    }

    get params() {
        return this.subject.asObservable();
    }
}

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailsComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should redirect the user to the users page after saving', () => {
        const router = TestBed.inject(Router);
        const spy = spyOn(router, 'navigate');

        component.save();

        expect(spy).toHaveBeenCalledWith(['users']);
    });

    it('should navigate the user to the not found page when an invalid user id is passed', () => {
        const router = TestBed.inject(Router);
        const route = TestBed.inject<ActivatedRouteStub>(ActivatedRoute as any);
        const spy = spyOn(router, 'navigate');

        route.push({ id: 0 });

        expect(spy).toHaveBeenCalledWith(['not-found']);
    });
});
