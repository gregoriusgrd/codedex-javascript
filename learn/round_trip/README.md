# Boarding Pass Builder ✈️
This project creates two objects, departTripTicket and returnTripTicket, to simulate boarding passes for a round trip. It includes the ability to upgrade tickets to business class and calculate flight time.

## Features
### Ticket Properties
- .name: Passenger's name.
- .from: Departure location.
- .to: Destination.
- .businessClass: Boolean indicating if it's a business class ticket (true/false).
- .leaveTime: Departure time (in hours, 1-24).
- .arriveTime: Arrival time (in hours, 1-24).

### Ticket Methods
1. .upgrade():
- Upgrades the ticket to business class.
- If already upgraded, prints:
```
"Your ticket is already business class!"
```

2. .flightTime():
- Calculates and prints the flight duration based on departure and arrival times.
- If invalid time input (outside 1–24), returns "Invalid Time Input".

## Example Output:
```
Your ticket has been upgraded to business class!
Your travel time from Jakarta to Singapore is estimated to be 6 hours
Your ticket is already business class!
Your travel time from Singapore to Jakarta is estimated to be 4 hours
```

Check out the implementation in round_trip.js
