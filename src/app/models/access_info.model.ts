export class AccessInfo {
    
    _access_id: string;
    _name: string;
    _message: string;
    _date: string;
    _status: string;

    get access_id() { return this._access_id }
    get name() { return this._name }
    get message() { return this._message; }
    set access_id(val) { this._access_id = val }
    set name(val) { this._name = val; }
    set message(val) { this._message = val }
    get date() { return this._date; }
    set date(val) { this._date = val }
    get status() { return this._status; }
    set status(val) { this._status = val }

    constructor(access_id: string, name: string) {
        this.access_id = access_id;
        this.name = name;
    }
}