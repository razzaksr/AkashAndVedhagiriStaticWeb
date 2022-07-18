class Warehouse{
    
    constructor(){
        this.arr=[]
    }

    insert(data){
        this.arr.push(data)
        alert(data+" has added to the array")
    }

    traverse(){
        // for(var x=0;x<this.arr.length;x++){
        //     alert(this.arr[x])
        // }

        this.arr.map((val)=>{
            alert(val)
        })
    }

    read(pos){
        alert(this.arr[pos]+" is the data @ "+pos)
    }

    deleteByData(data){
        this.arr=this.arr.filter((val)=>{
            return val!==data
        })
    }

    deleteByPosition(pos){
        this.arr.splice(pos,1)
    }
}