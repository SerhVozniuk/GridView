class GridView{
    constructor(){
        this._header = '',
        this._headerClass = [],
        this._tableClass = [],
        this.element = 'body',
        this.attribute
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
    }
}