export const generateRandomNumber = (level) =>{
    let n=0;
    let rnd_num=[]
    if(level==='easy')n=5;
    else if(level==='medium')n=7;
    else n=10;
for(let i=0;i<n;i++){
    let random=Math.floor(Math.random()*100)
    rnd_num.push(random)
}
return rnd_num
}