// lib imports
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// custom imports
import { Sandbox } from '../../core/sandbox/base.sandbox';
import { SenderService } from './../../core/async-service/sender.service';
import { ObjectAPIService } from '../../core/async-service/object-api.service';
import * as selectors from '../reducers';
import { ObjectAvailabilityDetail } from '../../common/interface/interface';

@Injectable()
export class <%= classify(name) %>SandboxService extends Sandbox {
    public <%= dasherize(name) %>AvailablityDetail$: Observable<ObjectAvailabilityDetail>;

    constructor(
        protected store: Store<any>,
        protected sender: SenderService,
        objectAPIService: ObjectAPIService,
        logger: NGXLogger
    ) {
        super(sender, objectAPIService, logger, store);
        this.logger.log('<%= dasherize(name) %>SandboxService');
    }

    /** ---------------------------------------- public methods ------------------------------------------- */
    public getAndSetDataForGIP(): void {
        <% if (introspectionFor.toLowerCase() === 'gip') { %>
            this.<%= dasherize(name) %>AvailablityDetail$ = this.store.select(selectors.<%= dasherize(name) %>ObjectAvailabilityDetailSelector);
            this.<%= dasherize(name) %>AvailablityDetail$.pipe(takeUntil(this.destroyed$)).subscribe(val => this.handleObjectAvailability(val));
        <% } %>
    }
    public getAndSetData(): void {
        <% if (introspectionFor.toLowerCase() === 'cc') { %>
        this.<%= dasherize(name) %>AvailablityDetail$ = this.store.select(selectors.<%= dasherize(name) %>ObjectAvailabilityDetailSelector);
        this.<%= dasherize(name) %>AvailablityDetail$.pipe(takeUntil(this.destroyed$)).subscribe(val => this.handleObjectAvailability(val));
        <% } %>
    }
    public getAndSetDataForSMS(): void {}

    public resetGIPData(): void {}
    public resetSMSData(): void {}
}
