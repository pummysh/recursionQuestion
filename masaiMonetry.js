let obj={};
function money(n){
    if(obj[n]){
        return obj[n];
    }
    if(n==1){
        return 1;
    }

    if(n<=0){
        return 0;
    }

    let s1=money(Math.floor(n/2));
    let s2=money(Math.floor(n/3));
    let s3=money(Math.floor(n/4));
    obj[Math.floor(n/2)]=s1;
    obj[Math.floor(n/3)]=s2;
    obj[Math.floor(n/4)]=s3;
    return Math.max(n,(s1+s2+s3));

    // return Math.max(n,money(Math.floor(n/2))+money(Math.floor(n/3))+money(Math.floor(n/4)));
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n").map(Number);
    let line=0;
    for(let i=0;i<input.length;i++){
        let n=input[line++];
        // console.log(n);
        let a=money(n);
        console.log(a);
    }
   
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`12
2`);
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