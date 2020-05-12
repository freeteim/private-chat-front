export class AccessInfo {

    _access_id: string;
    _name: string;
    _message: string;
    _date: string;
    _status: string;
    _mine: boolean;

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
    get mine() { return this._mine; }
    set mine(val) { this._mine = val; }

    constructor(data: any) {
        this._access_id = data['_access_id'];
        this._name = data['_name'];
        this._message = data['_message'] || '';
        this._date = this.parseDate();
        this._status = data['_status'] || 'nodata';
        this._mine = data['_mine'] || false;
    }

    equal(name: string): boolean {
        return this.name === name;
    }

    parseDate() {
        const date = new Date();
        let text = '';
        text += date.getFullYear() + '.';
        text += ((date.getMonth() + 1) + '').padStart(2, '0') + '.';
        text += (date.getDate() + '').padStart(2, '0') + ' ';
        text += (date.getHours() + '').padStart(2, '0') + ':';
        text += (date.getMinutes() + '').padStart(2, '0');
        return text;
    }
}