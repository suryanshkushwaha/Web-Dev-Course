/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

const business_name_generator = () => {
    let rand = Math.random()
    let first, second, third;
    if (rand < 0.33) {
        first = "Crazy"
    } else if (rand < 0.66) {
        first = "Amazing"
    } else {
        first = "Fire"
    }

    rand = Math.random()
    if (rand < 0.33) {
        second = "Engine"
    } else if (rand < 0.66) {
        second = "Foods"
    } else {
        second = "Limited"
    }

    rand = Math.random()
    if (rand < 0.33) {
        third = "Bros"
    } else if (rand < 0.66) {
        third = "Garments"
    } else {
        third = "Hub"
    }

    console.log(first + second + third)
}

business_name_generator()