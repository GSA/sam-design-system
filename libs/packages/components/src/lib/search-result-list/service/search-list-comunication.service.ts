import { BehaviorSubject } from 'rxjs';
export class SearchListComunicationService {
    /**
     *  Emits filter update
     */
    public filterChange = new BehaviorSubject(null);


}