function printTicketPrice (visitorAge, isStudent) {



if (visitorAge <= 6)
  console.log("Biļete bez maksas")
else if (isStudent == true)
    console.log("Biļete makša 5 Euro")
else
  console.log ("Biļete maksā 10 euro")

}
printTicketPrice(12, true)
printTicketPrice(35, false)
