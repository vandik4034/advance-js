async function getMovies() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve([
                { id: 1, title: 'Avengers: Endgame' },
                { id: 2, title: 'The Dark Knight' },
                { id: 3, title: 'Inception' }
            ]);


        }, 2000)
    })
}


async function bookTickets(movieId) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(`tickets book are sucessfully for Movie Id : ${movieId}`);

        }, 2000)
    })
}


async function processPayment(amount) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(`Payment of $${amount} proccessed successfullt`)
        }, 2500)

    })
}

async function sendTicket(ticketsDetails) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(`Tickets sent your Email : ${ticketsDetails}`)

        }, 2000);

    })
}

async function movieBookingSystem() {

    try {

        console.log('fetching movie list......  ')

        let movies = await getMovies()

        console.log('Movies available : ', movies)


        let selectedMovie = 1;

        console.log(`user selectedMovie Id: ${selectedMovie}`

        )

        let ticketbooking = await bookTickets()

        console.log(ticketbooking);


        let paymentResult = await processPayment()

        console.log(paymentResult);

        const ticketDetails = `Movie ID: ${selectedMovie}, Price: $15`;

        const ticketSendingResult = await sendTicket(ticketDetails);

        console.log(ticketSendingResult);

        console.log('Movie booking completed successfully!');
    } catch (error) {
        console.error('Error during movie booking:', error);
    }

}


movieBookingSystem();