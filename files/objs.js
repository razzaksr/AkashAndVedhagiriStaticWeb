class Dynamic{
    constructor(){
        this.arr=[
            {
                "model":"realme5s",
                "price":13000,
                "ram":4,
                "size":5.5
            },
            {
                "model":"iqooz3",
                "price":21000,
                "ram":8,
                "size":6.1
            },
            {
                "model":"nokia 6.1 plus",
                "price":11000,
                "ram":4,
                "size":5.2
            }
        ]
    }

    delete(pos){
        var x=this.arr[pos]
        this.arr.splice(pos,1)
        alert(JSON.stringify(x)+" has been deleted")
        this.show()
    }

    create(){
        let obj={"model":"","price":0,"ram":0,"size":0.0}
        
        obj.model=prompt("Enter the mobile model ","")
        obj.price=prompt("Enter the mobile price ","")
        obj.ram=prompt("Enter the mobile ram ","")
        obj.size=prompt("Enter the mobile size ","")

        this.arr.push(obj)

        alert(JSON.stringify(obj)+" has pushed")
    }

    show(){
        var place=document.getElementById('where')
        var content=""
        this.arr.map((ele,ind)=>{
            content+="<tr>"
            content+="<td>"+ele.model+"</td>"
            content+="<td>"+ele.price+"</td>"
            content+="<td>"+ele.ram+"</td>"
            content+="<td>"+ele.size+"</td>"
            //content+="<td><button onclick='alert("+'+ele.model+'+")'>Delete</button></td>"
            //content+="<td><button onclick="+"alert('"+ele.model+"')>Delete</button></td>"
            //content+="<td><button onclick="+"alert('hai')"+">Delete</button></td>"
            //content+="<td><button onclick="+"this.delete('"+ind+"')"+">Delete</button></td>"
            content+="</tr>"
        })

        place.innerHTML=content
    }
}