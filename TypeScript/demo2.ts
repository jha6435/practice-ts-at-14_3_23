class Solution1{
    
    constructor(name:String,age:number){
        
        console.log("my name is "+name+" my age is "+age)
    }

    hello(){
        console.log("this is from first method")
    }
}

var v=new Solution1("Rupesh", 31);
v.hello();