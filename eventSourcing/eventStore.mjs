export const eventStore = {
    eventList : [],
    addEvent(event) {
        this.eventList.push(event);
        //console.log(this.eventList);
    },
    getEventList(){
        return this.eventList;
    },
    //getNiemeEvent(id,n){
    //    return this.eventList.filter(e => e.id === id)
    //    .sort((a, b) => new Date(a.date) - new Date(b.date))[n - 1] ?? null;
    //}
    getEventsById(id){
        return this.eventList.filter(e => e.accountId === id);
    }
};



