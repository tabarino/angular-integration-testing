import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [TodosComponent],
            providers: [TodoService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test getTodos Observable
    // it('should load todos from the server', () => {
    //     const service = TestBed.inject(TodoService);
    //     spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));
    //
    //     fixture.detectChanges();
    //
    //     expect(component.todos.length).toBe(3);
    // });

    // Test getTodos Promise using async
    // it('should load todos from the server', async(() => {
    //     const service = TestBed.inject(TodoService);
    //     spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    //
    //     fixture.detectChanges();
    //
    //     fixture.whenStable().then(() => {
    //         expect(component.todos.length).toBe(3);
    //     });
    // }));

    // Test getTodos Promise using fakeAsync
    it('should load todos from the server', fakeAsync(() => {
        const service = TestBed.inject(TodoService);
        spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

        fixture.detectChanges();

        tick();
        expect(component.todos.length).toBe(3);
    }));
});
