import { HighlightDirective } from './highlight.directive';
import { Component, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <p highlight="cyan">First</p>
        <p highlight>Second</p>
    `
})

class DirectiveHostComponent {
}

class MockElementRef {
    nativeElement: {};
}

describe('HighlightDirective', () => {
    let el: ElementRef;
    let directive: HighlightDirective;
    let fixture: ComponentFixture<DirectiveHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DirectiveHostComponent, HighlightDirective],
            providers: [{ provide: ElementRef, useClass: MockElementRef }]
        }).compileComponents();
    }));

    beforeEach(() => {
        el = TestBed.inject(ElementRef);
        directive = new HighlightDirective(el);
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should highlight the first element with cyan', () => {
        const de = fixture.debugElement.queryAll(By.css('p'))[0];

        expect(de.nativeElement.style.backgroundColor).toBe('cyan');
    });

    it('should highlight the second element with the default color', () => {
        const de = fixture.debugElement.queryAll(By.css('p'))[1];

        expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    });
});
