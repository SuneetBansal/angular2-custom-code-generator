// lib imports
import { TestBed } from '@angular/core/testing';

// custom imports
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>ServiceTest', () => {
    let service: <<%= classify(name) %>Service>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                <%= classify(name) %>Service    
            ]
        });
        service = TestBed.get(<%= classify(name) %>Service);
    });

    it('should be created', () => {
        expect(service).toBeDefined();
    });
});