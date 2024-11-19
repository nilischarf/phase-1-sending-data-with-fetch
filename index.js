function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(res => res.json())
    .then(data => {
        console.log("Success:", data)
        const body = document.querySelector("body")
        const element = document.createElement("p")
        element.textContent = `New User ID: ${data.id}`
        body.appendChild(element)
        return data
    })
    .catch(error => {
        console.error("Error:", error)
        const body = document.querySelector("body")
        const errorElement = document.createElement("p")
        errorElement.textContent = `Error: ${error.message}`
        body.appendChild(errorElement)
    })
}