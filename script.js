//your code here

let touristSpots = ['Victoria Memorial','The Virupaksha Temple', 'Tajmahal'];

touristSpots.sort((a,b)=>{
    const splittedA = a.split(" ")
    const splittedB = b.split(" ")
    if(splittedA[0].toLowerCase() ==="a"||splittedA[0].toLowerCase()==="an"||splittedA[0].toLowerCase()==="the"){
        // console.log("A",a)
        return splittedA[1].toLowerCase().localeCompare(b.toLowerCase())
    }
    if(splittedB[0].toLowerCase() ==="a"||splittedB[0].toLowerCase()==="an"||splittedB[0].toLowerCase()==="the"){
        // console.log("B",b)
        return a.toLowerCase().localeCompare(splittedB[1].toLowerCase())
        
    }
    return a.toLowerCase().localeCompare(b.toLowerCase())
})

document.addEventListener("DOMContentLoaded",()=>{
    const bandUl=document.getElementById("band")
touristSpots.map((spot)=>{
    const item = document.createElement("li")
    item.innerText=spot
    bandUl.append(item)
})
})