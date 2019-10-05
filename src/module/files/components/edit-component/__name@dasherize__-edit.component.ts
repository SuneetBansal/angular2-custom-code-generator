// lib imports
import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';

// custom imports
import { AbstractComponent } from '../../../common/base/abstract.component';
import { EditAction } from '../../../shared/components/edit-toolbar/edit-toolbar.component';
import { ActionItem } from '../../../shared/components/toolbar/interface';

@Component({
    selector: 'app-<%= dasherize(name) %>-component',
    templateUrl: './<%= dasherize(name) %>-edit.component.html',
    styleUrls: ['./<%= dasherize(name) %>-edit.component.scss']
})
export class <%= classify(name) %>EditComponent extends AbstractComponent implements OnInit, OnDestroy {
    public title: string;
    public toolbarActions: EditAction[];

    private _localizedObj: any;

    constructor(
        private _translateService: TranslateService
    ) {
        super(_translateService);
    }

    /** ----------------------------------- public methods --------------------------------------- */

    public ngOnInit(): void {
        // getting locallized value
        this.getLocalizedObj('<ModuleXPath>')
        .pipe(takeUntil(this.destroyed$))
        .subscribe((val: any) => {
            this._localizedObj = val;
            this.toolbarActions = [{
                id: '',
                icon: ''
            }];
        });
    }

    /**
     * To handle toolbar actions
     * @param action
     */
    public handleToolarAction(action: ActionItem): void {
        // Here put the code to handle toolbar actions
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    /** ----------------------------------- private methods --------------------------------------- */
}