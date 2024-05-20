 var object = [
    { "brand": "Toyota", "model": "Corolla", "year": 2022 },
    { "brand": "Honda", "model": "Civic", "year": 2021 },
    { "brand": "Ford", "model": "Fusion", "year": 2020 }

]

for (let x = 0; x < object.length; x++) {
    if (object[x].year > 2020) {
        console.log(object[x].brand)
    }

}