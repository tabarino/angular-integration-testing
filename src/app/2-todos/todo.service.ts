import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor(private http: HttpClient) {
    }

    add(todo) {
        return this.http.post('...', todo).pipe(
            map(res => res[0])
        );
    }

    getTodos() {
        return this.http.get('...').pipe(
            map(res => res[0])
        );
    }

    delete(id) {
        return this.http.delete('...', id).pipe(
            map(res => res[0])
        );
    }
}
