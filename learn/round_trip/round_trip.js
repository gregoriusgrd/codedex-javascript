// Write code below 💖

const departTripTicket = {
    name:'Greg',
    from: 'Jakarta',
    to: 'Singapore',
    businessClass: false,
    leaveTime: 6,
    arriveTime: 12,
    upgrade (){
      if (this.businessClass === true) {
        return 'Your ticket is already business class!';
      } else {
        return 'Your ticket has been upgraded to business class!';
      }
    },
  
    flightTime(){
      if (this.leaveTime < 1 || this.leaveTime > 24 || this.arriveTime < 1 || this.arriveTime > 24){
        return 'Invalid Time Input'
      }
      let calculateFlightTime = `Your travel time from ${this.from} to ${this.to} is estimated to be ${this.arriveTime - this.leaveTime} hours`;
      return calculateFlightTime;
    }
  }
  
  const returnTripTicket = {
    name:'Greg',
    from: 'Singapore',
    to: 'Jakarta',
    businessClass: true,
    leaveTime: 4,
    arriveTime: 8,
    upgrade (){
      if (this.businessClass === true) {
        return 'Your ticket is already business class!';
      } else {
        return 'Your ticket has been upgraded to business class!';
      }
    },
    
    flightTime(){
      if (this.leaveTime < 1 || this.leaveTime > 24 || this.arriveTime < 1 || this.arriveTime > 24){
        return 'Invalid Time Input'
      }
      let calculateFlightTime = `Your travel time from ${this.from} to ${this.to} is estimated to be ${this.arriveTime - this.leaveTime} hours`;
      return calculateFlightTime;
    }
  }
  
  console.log(departTripTicket.upgrade())
  console.log(departTripTicket.flightTime())
  console.log(returnTripTicket.upgrade())
  console.log(returnTripTicket.flightTime())