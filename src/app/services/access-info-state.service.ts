import { Injectable } from "@angular/core";
import { AccessInfo } from "../models/access_info.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccessInfoStateService {
    _access_info: AccessInfo = null;

    set access_info(val) { this._access_info = val; }
    get access_info(): AccessInfo {
        return this._access_info;
    }


    subject = null;
    transfer = null;

    constructor() {
        this.subject = new Subject<AccessInfo>();
        this.transfer =  this.subject.asObservable();
    }

    mutations() {
        // this.access_info = access_info;
        this.subject.next(this.access_info);
    }
}