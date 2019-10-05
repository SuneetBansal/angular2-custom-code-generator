// lib imports
import { TestBed } from '@angular/core/testing';

// custom imports
import { <%= classify(name) %>SandboxService } from './<%= dasherize(name) %>-sandbox.service';

describe('<%= classify(name) %>SandboxServiceTest', () => {
    let service: <<%= classify(name) %>SandboxService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                <%= classify(name) %>SandboxService    
            ]
        });
        service = TestBed.get(<%= classify(name) %>SandboxService);
    });

    it('should be created', () => {
        expect(service).toBeDefined();
    });
});