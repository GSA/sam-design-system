import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { registrationData } from './search-data';
import { SearchParameters, SearchResult } from '@sam-design-system/layouts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private data: any[];

    constructor() { }

    private getPage(data: any[], page: number, pageSize: number): any[] {
        let startIndex: number = page * pageSize;
        let endIndex = startIndex + (pageSize);
        if(endIndex > (data.length)) {
            endIndex = data.length;
        }
        return data.slice(startIndex, endIndex)
    }

    public getAllData() {
        this.data = registrationData._embedded.results;
        this.setRelevance(this.data);
        // return this.data;
    }

    getData(search: SearchParameters): Observable<SearchResult> {

        if(this.data) {
            this.sortItems(this.data, search);
            return of({
                items: this.getPage(this.data, search.page.pageNumber-1, search.page.pageSize),
                totalItems: this.data.length
            }); 
        } else {
            return of({
                items: [],
                totalItems: 0
            });
        }
    }

    private sortItems(itemList: any[], search: SearchParameters) {
        let values = [];
        let lessValueExpress = -1;
        let moreValueExpress = 1;
        itemList.sort((a, b) => {
            values = this.getAllValues(search.sortField, a, b);
            if(values) {
              if(values[0] < values[1]) {
                return -1;
              } else if (values[0] > values[1]) {
                return 1;
              }
            }
            return 0;
        });
    }

    private getAllValues(field: string, a: any, b: any) {
        return [a._rScore, b._rScore];
    }

    private getEntityInfoValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'nameAscending':
                return [(a.title) ? a.title : "", (b.title) ? b.title : ""];
            case 'nameDescending':
                return [(b.title) ? b.title : "", (a.title) ? a.title : ""];
            default: 
                return [a._rScore, b._rScore];
        }
    }

    private getRegistrationValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.registrationExpirationDate), new Date(b.registrationExpirationDate)];
            case 'dateAscending':
                return [new Date(b.registrationExpirationDate), new Date(a.registrationExpirationDate)];
            case 'nameAscending':
                return [a.name, b.name];
            case 'nameDescending':
                return [b.name, a.name];
            case 'ueiAscending':
                return [a.dunsNumber, b.dunsNumber];
            case 'ueiDescending':
                return [b.dunsNumber, a.dunsNumber];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private getOpportunityValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.response_date), new Date(b.response_date)];
            case 'dateAscending':
                return [new Date(b.response_date), new Date(a.response_date)];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private getAssistanceValues(field: string, a: any, b: any) {
         switch(field) {
            case 'relevanceDescending':
                return [a._rScore, b._rScore];
            case 'dateDescending':
                return [new Date(a.publishDate), new Date(b.publishDate)];
            case 'titleAscending':
                return [a.title, b.title];
            case 'titleDescending':
                return [b.title, a.title];
            case 'cfdaNumberAscending':
                return [+a.programNumber, +b.programNumber];
            case 'cfdaNumberDescending':
                return [+b.programNumber, +a.programNumber];
            default:
                return [a._rScore, b._rScore];
         }
    }

    private setRelevance(data) {
        for(let i = 0; i < data.length; i++) {
            data[i]._rScore = Math.random();
        }
    }

    private setType(data: any, type: string) {
        for(let i=0; i<data.length; i++) {
            data[i]._type = type;
        }
    }


}