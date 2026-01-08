export const eventStore = {
    eventList : [],
    addEvent(event) {
        this.eventList.push(event);
        //console.log(this.eventList);
    },
    getEventList(){
        return this.eventList;
    },
    getEventsByAccountId(id){
        return this.eventList.filter(e => e.accountId === id);
    }
};



