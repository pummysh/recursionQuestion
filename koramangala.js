function runProgram(input) {
    // Write code here
    input= input.trim().split("\n");
    let t=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    // console.log(arr,t);
    
    let d=[];
    d.push(arr[0]);
    let count=arr[0];
    let i=1;
    while(i<arr.length){
      if(i+arr[i]>=arr.length){
        let b=i+arr[i];  
      }else{
        b=Math.max(arr[i+1],arr[i+arr[i]]);
      }
      console.log(b);
      d.push(arr[i]);
      console.log(d);
      i=i+arr.indexOf(b);
    }
    
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }