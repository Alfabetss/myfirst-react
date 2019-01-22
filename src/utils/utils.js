
export function priceHandler(rating) {
    let price = 0
    if (rating <= 3) {
        price = 3500
        return price 
    } else if (rating > 3 && rating <= 6) {
        price = 8250
        return price
    } else if (rating > 6 && rating <= 8) {
        price = 16350
        return price
    } else  {
        price = 21250
        return price
    } 
}

export function existingMovie(listMovies, movie) {
    const exists = listMovies.filter((item) => item.id == movie.id)
    if (exists && exists.length > 0) {
        return true
    } 
    return false
}
