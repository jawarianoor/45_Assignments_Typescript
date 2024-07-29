// City Names: Write a function called city country() that takes in the name of a city and its country. The function should return a string formatted like this:

// “Lahore, Pakistan™

// call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string){ 
    return `${city},${country}`; 
}
    
    console.log (city_country('Karachi','Pakistan')); 

    console.log (city_country('Tokyo','Japan')); 

    console.log (city_country('New York','United State of America'));