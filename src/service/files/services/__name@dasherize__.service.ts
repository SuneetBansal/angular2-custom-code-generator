// lib imports
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Store } from '@ngrx/store';

// custom imports
import { Sandbox } from '../../core/sandbox/base.sandbox';
import { SenderService } from './../../core/async-service/sender.service';
import { ObjectAPIService } from '../../core/async-service/object-api.service';

@Injectable()
export class <%= classify(name) %>Service extends Sandbox {
    constructor(
        protected store: Store<any>,
        protected sender: SenderService,
        objectAPIService: ObjectAPIService,
        logger: NGXLogger
    ) {
        super(sender, objectAPIService, logger, store);
        this.logger.log('<%= dasherize(name) %>Service');
    }

    /** ---------------------------------------- public methods ------------------------------------------- */
    public getAndSetDataForGIP(): void {}
    public getAndSetData(): void {}
    public getAndSetDataForSMS(): void {}

    public resetGIPData(): void {}
    public resetSMSData(): void {}
}