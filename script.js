let userPromis = new Promise((resolve, reject) =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(response.status === 200 && response.ok === true){
                resolve (response.json());
            } 
            reject(new Error(`${response.status} - ${response.ok}`));
        });
});


userPromis.then(data => {
    //console.log(data);

    //создаем обьект класа
    let gridView = new GridView();
    gridView._header = 'TEST';
    gridView._headerClass = ['header', 'sitr-class'];
    gridView._tableClass = ['table'];
    gridView._userData = data;
    gridView.attribute ={
        id: {
            lable: 'ID'
        },
        name: {
            lable: 'name'
        },
        username: {
            lable: 'username'
        },
        email: {
            lable: 'email'
        },
       
        phone: {
            lable: 'phone'
        },
        website: {
            lable: 'website'
        },
       
    };
    
    gridView.render();

});

