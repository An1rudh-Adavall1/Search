document.getElementById("btn").addEventListener("click", myFunction);
function myFunction(e) {
    let text = document.getElementById("filter").value;
    if(text != ""){
        searchTable(text.toLowerCase());
    }
}
function searchTable(text){
    let tr = document.querySelectorAll(".table-item");
    tr.forEach(row => {
        let counter = 0;
        Array.from(row.children).forEach(data =>{            
            if(data.textContent.toLowerCase().includes(text)){
                counter = counter+1;                 
            }
        });
        if(counter>0){
            row.style.display = 'table-row';
        }
        else{
            row.style.display = 'none';
        }
    });
}