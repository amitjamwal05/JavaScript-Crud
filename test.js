
let id ="";

const Data = () =>{
    document.querySelector(".box").innerHTML = "";  
    let name = document.querySelector('#name').value;

    if(name == ''){
     
      document.querySelector(".box").innerHTML ="Please enter your name";
      document.querySelector(".box").style.color = "red";
      document.querySelector('.box').style.fontSize="30px";
       
    }else{
        if(id == ''){
            let arr = getCrudData();
           if(arr == null){
            let data = [name];
            localStorage.setItem("crud",JSON.stringify(data));
            
           }
           else{
            arr.push(name);
            localStorage.setItem("crud",JSON.stringify(arr));
           }
           document.querySelector('#name').value = "";
           document.querySelector(".box").innerHTML ="Data inserted successfully"; 
           document.querySelector('.box').style.cssText ="color:green;font-size:30px";
        }else{
     
        }
        Select();
    }
}

const Select = () =>{
    let arr = getCrudData();
    if(arr!=null){
        let html = "";
        let srno = 1;
        for(let i in arr){
            html = html+=`<tr><td>${srno}</td><td>${arr[i]}</td><td><a href="javascript:void(0)" onclick="deleteData(${i})">Delete</a></td><td><a href="javascript:void(0)" onclick="editData()">Edit</a></td></tr>`;
        srno++;
        }
        document.querySelector('#root').innerHTML = html;
       
    } 
}
Select();
const edit = (editDatas) =>{
    let arr = getCrudData();
    document.querySelector('#name').value = arr[editDatas];
}
const deleteData = (dataDelete) =>{
    let arr = getCrudData();
    arr.splice(dataDelete,1);
    localStorage.setItem("crud",JSON.stringify(arr));
    Select();
}
function getCrudData(){
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}