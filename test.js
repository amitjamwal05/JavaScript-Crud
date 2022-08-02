
let id ="no";

const Data = () =>{
    document.querySelector(".box").innerHTML = "";  
    let name = document.querySelector('#name').value;

    if(name == ''){
     
      document.querySelector(".box").innerHTML ="Please enter your name";
      document.querySelector(".box").style.color = "red";
      document.querySelector('.box').style.fontSize="30px";
       
    }else{
        if(id == 'no'){
            let arr = getCrudData();
           if(arr == null){
            let data = [name];
            localStorage.setItem("crud",JSON.stringify(data));
            
           }
           else{
            arr.push(name);
            localStorage.setItem("crud",JSON.stringify(arr));
            document.querySelector(".box").innerHTML ="Data inserted successfully"; 
            document.querySelector('.box').style.cssText ="color:green;font-size:30px";
           }
           document.querySelector('#name').value = "";
          
        }else{
            let arr = getCrudData();
            arr[id] = name;
           
            localStorage.setItem("crud",JSON.stringify(arr));
            document.querySelector(".box").innerHTML ="Data Updated! successfully"; 
           
        } document.querySelector('#name').value = "";
        Select();
    }
}

const Select = () =>{
    let arr = getCrudData();
    if(arr!=null){
        let html = "";
        let srno = 1;
        for(let i in arr){
            html = html+=`<tr><td>${srno}</td><td>${arr[i]}</td>
            <td><a href="javascript:void(0)" onclick="editData(${i})">Edit</a></td>
            <td><a href="javascript:void(0)" onclick="deleteData(${i})">Delete</a></td></tr>`;
        srno++;
        }
        document.querySelector('#root').innerHTML = html;
       
    } 
}
Select();
const editData = (rid) =>{
    id = rid;
    let arr = getCrudData();
   let x = document.querySelector('#name').value = arr[rid];
   console.log(x)
   
}
const deleteData = (rid) =>{
    let arr = getCrudData();
    arr.splice(rid,1);
    localStorage.setItem("crud",JSON.stringify(arr));
    Select();
}

function getCrudData(){
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}