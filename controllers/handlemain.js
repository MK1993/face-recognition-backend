const main=(s,a,e)=>{e.select("*").from("users").then(s=>{a.json(s)}).catch(s=>{a.status(400).json("No available users!")})};module.exports={main:main};