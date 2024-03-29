function theatrePromotions(typeOfDay, age) {

    let ticketPrice = 0;

    switch (typeOfDay) {
        case "Weekday":
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (age <= 64) {
                ticketPrice = 18;
            } else if (age <= 122) {
                ticketPrice = 12;
            }
            break;

        case "Weekend":
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            } else if (age <= 64) {
                ticketPrice = 20;
            } else if (age <= 122) {
                ticketPrice = 15;
            }
            break;

        case "Holiday":
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            } else if (age <= 64) {
                ticketPrice = 12;
            } else if (age <= 122) {
                ticketPrice = 10;
            }
            break;
    }

    if (age < 0 || age > 122) {
        console.log("Error!");
    } else {
        console.log(`${ticketPrice}$`);
    }

}
theatrePromotions('Weekday', 42);