const events = {
    name: 'Wedding party',
    guesList: ['aliBinTalib', 'omarFaruq', 'abuBakr'],
    printGuestList() {
        console.log("NO to this Kafir's", this.name)
        
        this.guesList.forEach(function (guest) {
            console.log('Welcome Mr.' + guest + " to this " + this.name) 
        })
    },
}
events.printGuestList();
