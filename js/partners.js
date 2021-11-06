const renderItems = (data) => {
    data.forEach((elem) => {
        console.log(elem);
    })
}

fetch('https://test-7bdda-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {

    })