// lib imports
import { TestBed, ComponentFixture } from '@angular/core/testing';

// custom imports
import { MocksModule } from '../../../mocks/mocks.module';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { <%= classify(name) %>HomeComponent } from './<%= dasherize(name) %>-home.component';

describe('<%= classify(name) %>HomeComponentTest', () => {
    let fixture: ComponentFixture<<%= classify(name) %>HomeComponent>;
    let component: <%= classify(name) %>HomeComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MocksModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                <%= classify(name) %>HomeComponent    
            ]
        });
        fixture = TestBed.createComponent(<%= classify(name) %>HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeDefined();
    });
});