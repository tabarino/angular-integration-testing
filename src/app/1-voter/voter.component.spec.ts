import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VoterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VoterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /**
     * Unit Tests
     */
    it('should increment totalVotes when up voted', () => {
        component.upVote();

        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when down voted', () => {
        component.downVote();

        expect(component.totalVotes).toBe(-1);
    });

    /**
     * Integration Tests
     */
    it('should render the total votes', () => {
        component.othersVote = 20;
        component.myVote = 1;
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('.vote-count'));
        const el: HTMLElement = de.nativeElement;

        expect(el.innerText).toContain('21');
    });

    it('should highlight the upVote button if I have upvoted', () => {
        component.myVote = 1;
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

        expect(de.classes.highlighted).toBeTruthy();
    });

    it('should increase totalVotes when I click the upVote button', () => {
        const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        button.triggerEventHandler('click', null);

        expect(component.totalVotes).toBe(1);
    });
});
