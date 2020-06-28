import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [
        AppComponent,
        VoterComponent,
        TodosComponent,
        UserDetailsComponent,
        UsersComponent,
        HomeComponent,
        NavComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
