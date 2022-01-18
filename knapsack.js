function runProgram(input) {
    // Write code here
    input= input.trim().split("\n");
    let test=+input[0];
    // console.log(test);
    let line=1;
    for(let i=0;i<test;i++){
        let w=[];
        let v=[];
        let [c,n]=input[line++].trim().split(" ").map(Number);
        for(let j=0;j<n;j++){
            let [a,b]=input[line++].trim().split(" ").map(Number);
            w.push(a);
            v.push(b);
        }
        
        for(let k=0;k<n;k++){
            for(let l=0;l<n;l++){
                if((v[l]/w[l])<(v[l+1]/w[l+1])){
                    [v[l],v[l+1]]=[v[l+1],v[l]];
                    [w[l],w[l+1]]=[w[l+1],w[l]];
                }
            }
        }
        let max=0;
        for(let m=0;m<n;m++){
            if(w[m]<=c){
                // console.log(v[m],w[m],c);
                max=max+v[m];
                c=c-w[m];
            }
        }
        console.log(max);
    }
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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