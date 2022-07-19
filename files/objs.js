var arr=[
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

    const deletes=(pos)=>{
        var x=arr[pos]
        arr.splice(pos,1)
        alert(JSON.stringify(x)+" has been deleted")
        show()
    }

    const create=()=>{
        let obj={"model":"","price":0,"ram":0,"size":0.0}
        
        obj.model=prompt("Enter the mobile model ","")
        obj.price=prompt("Enter the mobile price ","")
        obj.ram=prompt("Enter the mobile ram ","")
        obj.size=prompt("Enter the mobile size ","")

        arr.push(obj)

        alert(JSON.stringify(obj)+" has pushed")
    }

    const show=()=>{
        var place=document.getElementById('where')
        var content=""
        arr.map((ele,ind)=>{
            content+="<tr>"
            content+="<td>"+ele.model+"</td>"
            content+="<td>"+ele.price+"</td>"
            content+="<td>"+ele.ram+"</td>"
            content+="<td>"+ele.size+"</td>"
            content+="<td><button onclick=deletes('"+ind+"')>Delete</button></td>"
            content+="<td><button onclick=edit('"+ind+"')>Edit</button></td>"
            content+="</tr>"
        })
        place.innerHTML=content
    }

    const edit=(pos)=>{
        arr[pos].model=prompt("Enter the new model instead of "+arr[pos].model,"")
        arr[pos].price=prompt("Enter the new price instead of "+arr[pos].price,"")
        arr[pos].ram=prompt("Enter the new ram instead of "+arr[pos].ram,"")
        arr[pos].size=prompt("Enter the new size instead of "+arr[pos].size,"")

        show()
    }