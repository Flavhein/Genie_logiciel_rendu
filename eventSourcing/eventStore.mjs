export const eventStore = {
    eventList : [],
    addEvent(event) {
        this.eventList.push(event);
    },
    getEventList(){
        return this.eventList;
    },
    getEventsByAccountId(id){
        return this.eventList.filter(e => e.accountId === id);
    }
};



