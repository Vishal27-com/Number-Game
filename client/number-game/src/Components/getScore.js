export const getScore=(nums,level)=>{
let temp=[...nums];
temp.sort((a,b)=>a-b);
let flag=true;
for(let i=0;i<nums.length;i++){
    if(temp[i]!==nums[i])flag=false
}
if(flag){
    return level==='easy'?5:level==='medium'?7:10
}
return 0;
}