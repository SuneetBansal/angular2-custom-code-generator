// lib imports
import { TestBed, ComponentFixture } from '@angular/core/testing';

// custom imports
import { MocksModule } from '../../../mocks/mocks.module';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { <%= classify(name) %>EditComponent } from './<%= dasherize(name) %>-edit.component';

describe('<%= classify(name) %>EditComponentTest', () => {
    let fixture: ComponentFixture<<%= classify(name) %>EditComponent>;
    let component: <%= classify(name) %>EditComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MocksModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                <%= classify(name) %>EditComponent 
            ]
        });
        fixture = TestBed.createComponent(<%= classify(name) %>EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeDefined();
    });
});