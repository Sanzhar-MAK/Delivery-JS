const restourant = 'food-band';

const renderItems = (data) => {
    data.forEach((elem) => {
        console.log(elem);
    })
}

fetch(`./db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {

    })