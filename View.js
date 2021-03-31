class GridView{
    constructor(){
        this._header = '',
        this._headerClass = [],
        this._tableClass = [],
        this.element = 'body',
        this.attribute
        this._userData = [];
    }

    set header(header) {
        if(typeof header === 'string'){
            this._header = header.trim();
            return true;
        }
        return false;
    }

    set headerClass(headerClass) {
        if(typeof headerClass === 'object'){
            this._headerClass = headerClass;
            return true;
        }
        return false
    }
    set tableClass(tableClass) {
        if(typeof tableClass === 'object'){
            this._tableClass = tableClass;
            return true;
        }
        return false
    }

    set userData (data) {
        this._userData = data;
        return true;
    }

    render(){
        //show header
        if(this._header){
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass =>{
                header.classList.add(cssClass);
            });
            document.querySelector(this.element).append(header);
        }
        //show Table
        const table = document.createElement('table');
        this._tableClass.forEach(cssClass =>{
            table.classList.add(cssClass);
        })
        //document.querySelector(this.element).append(table);
        //create table header

        let trHeader = document.createElement('tr');
        for(let i = 0; i < this._userData.length; i++) {
            for(let key in this._userData[i]){
                let th = document.createElement('th');
                th.textContent = key;
                trHeader.append(th);
            }
        }
        
        table.append(trHeader);
        document.querySelector(this.element).append(table);
    }
}