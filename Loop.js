function Elder(arr){

    // for(let i=0;i<arr.length;i++){
    //     if(arr[i].Course==='MCA'){
    //        console.log(arr[i]);

    //     }
    // }

    arr.filter((Element)=>{
        if(Element.Course==='MCA'){
    
console.log(Element.Name)


        }
    })

   
}


function UpdateCourse(arr){


    arr.map((Element)=>{
        if(Element.Course==='BCA'){
            Element.Course='MCA';
        }
        if(Element.Age===21){
            Element.Age++;
        }
    });

  }


// ForEach Loop :

function ForEachUse(arr){
    arr.forEach((Element)=>{
        console.log(Element.Name);
    })
}

// For of Loop : 

function forOFUse(arr){
    for((Element) of arr){
        console.log(Element.Course);
    }
}

// for in loop : 

function forinUse(arr){

    for(const key of arr){

        console.log(key.Name);
    }

}


const Arr=[

{ Name:'Anshu',Age:24,Gender:'Male',Course:'BCA',CoursePrice:90000},

{ Name:'Arjun',Age:21,Gender:'Male',Course:'CA',CoursePrice:15000},

{ Name:'Badal',Age:21,Gender:'Male',Course:'BCA',CoursePrice:90000},

{ Name:'Santosh',Age:21,Gender:'Male',Course:'BCA',CoursePrice:90000},

{ Name:'Rahul',Age:21,Gender:'Male',Course:'BBA',CoursePrice:90000},

{ Name:'Sanju',Age:21,Gender:'Male',Course:'MBA',CoursePrice:90000},

{ Name:'Samir',Age:22,Gender:'Male',Course:'BCA',CoursePrice:10000},

{ Name:'Sushant',Age:21,Gender:'Male',Course:'MCA',CoursePrice:93000},

{ Name:'Ankit',Age:21,Gender:'Male',Course:'BCA',CoursePrice:90000}


];






