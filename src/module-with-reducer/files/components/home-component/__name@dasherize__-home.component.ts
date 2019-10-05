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
import { ActionItem } from '../../../shared/components/toolbar/interface';
import {
    EventAction,
    ExpansionItemData
  } from '../../../common/interface/interface';
  import { filter, sort } from '../../../common/utils/utility-methods';

@Component({
    selector: 'app-<%= dasherize(name) %>-home-component',
    templateUrl: './<%= dasherize(name) %>-home.component.html',
    styleUrls: ['./<%= dasherize(name) %>-home.component.scss']
})
export class <%= classify(name) %>HomeComponent extends AbstractComponent implements OnInit, OnDestroy {
    public actionItems: ExpansionItemData[];
    public toolbarActionItems: ExpansionItemData[];
    public activePage: string;
    public searchValue: string;
    public isAsc: boolean;
    public filteredFiles: ExpansionItemData[];


    /** ----------------------------------- public methods -------------------------------------------- */

    public ngOnInit(): void {
        // getting locallized values to populate menu
        this.getLocalizedObj('<ModuleXPath>')
        .pipe(takeUntil(this.destroyed$))
        .subscribe((val: any) => {
            this.actionItems = [{
                id: '',
                icon: ''
            }];
        });
        
        // getting locallized value to populate tollbar actions
        this.getLocalizedObj('<ModuleXPath>')
        .pipe(takeUntil(this.destroyed$))
        .subscribe((val: any) => {
            this.toolbarActionItems = [{
                id: '',
                icon: ''
            }];
        });
    }

    /**
     * Used to sort list items
     */
    public sort(isAsc: boolean): void {
        this.isAsc = isAsc;
        sort(this.filteredFiles, isAsc, 'title');
    }

    /**
     * Used to filter the list based on provided user text
     */
    public searchText(searchValue: string): void {
        this.searchValue = searchValue;
        this.filteredFiles = filter(this.filteredFiles, searchValue, 'title', 'metaData');
    }

    /**
     * Used to handle toolbar actions
     * @param event
     */
    public handleToolbarActions(action: ActionItem): void {
        // put your code here to handle toolbar actions
    }

    /**
     * Used to handle file actions (delete/rename/activate etc)
     */
    public handleFileActions(event: EventAction): void {
        // put your code here to handle file actions    
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    /** ----------------------------------- private methods -------------------------------------------- */
}