// Add your code here

function submitData(userName, userEmail) {

    const formData = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    };

    fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);                   //I think the problem is HERE
        })
        .catch(function (error) {
            alert("Error!");
            console.log(error.message);
        });



