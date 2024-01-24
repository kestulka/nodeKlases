console.log("sup from front")

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const getItems = async () => {
const result = await fetch('http://localhost:3000/my/route', {
    method: 'GET',
    headers: {'Content-Type': "application/json",
},
}).then((response)=> {
    if(!response.ok){
        throw new Error(`server responded with ${response.status}`)
    }
    return response.json()
})
.then((items)=>{
    console.log(items)
})
.catch((error) => {
    console.error("Error:", error.message)
})
}

getItems()

// ----------------------------------------------------------------------