    // console.log("Hello World");
    // console.log("Hello World");
    // console.log("Hello World");
    // console.log("Hello World");
    // console.log("Hello World");

      // ------------for loop------------

  //     for(i=0; i<=5; i++){
  //       console.log("Hello World");
  //     }

  //     // -------------using array+loop-------------

  // let number = [5, 8, 12, 21, 9, 6, 11, 17, 18, 19, 
  //   48, 34, 18,36, 22, 65, 81, 98, 34, 85, 57, 66];

  // let element = number.length;   
  // for(i=0; i<element; i++){
  //       // console.log(i);
  //       console.log(number[i]);
  //     }

      // ***. Using condition, Array, loop and show even or odd.
  // for(i=0; i<element; i++){
  //   if(number[i]%2==0){
  //     console.log(number[i]+":even");
  //   }
  //   else{
  //     console.log(number[i]+":odd");
  //   }
  // }


  // ---------------------Home Work---------------------


  // 1. Extract pass and fail from array marks using for loop?

  let marks = [90, 56, 78, 95, 78, 60, 78, 13, 65, 
    12, 56, 43, 56, 9, 67, 54, 78, 32 ];

    let element = marks.length;
    for(i=0; i<element; i++){
      if(marks[i]<=32){
        console.log(marks[i]+":This is fail");
      }
      else{
        console.log(marks[i]+":This is pass")
      }
    }

    // 2.Extract grading point from array marks using for loop?
  
    for(i=0; i<element; i++){
      if(marks[i]>100){
        console.log("Invalid Number");
      }
      else if(marks[i]>=80){
        console.log(marks[i]+":A+")
      }
      else if(marks[i]>=70){
        console.log(marks[i]+":A")
      }
      else if(marks[i]>=60){
        console.log(marks[i]+":A-")
      }
      else if(marks[i]>=50){
        console.log(marks[i]+":B")
      }
      else if(marks[i]>=40){
        console.log(marks[i]+":C")
      }
      else if(marks[i]>=33){
        console.log(marks[i]+":D")
      }
      else{
        console.log(marks[i]+":F")
      }
    }