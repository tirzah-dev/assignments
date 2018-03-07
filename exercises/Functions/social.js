var bookClubbers = 
    {
            clubberName: "Juliana",
            age: 34,
            nationalOrigin: "Brazil",
            books:[
                { 
                bookName:"Remembrant",
                yrPub: 2014,
                genre: ["fiction", "Young Adult", "suspense"],
                categories: 
                    {
                        toRead: false,
                        reading: false,
                        read: true
                    }
                },
                { 
                bookName:"Rising Strong",
                yrPub: 2015,
                genre: ["Self-Help", "Research"],
                categories:
                    {
                        toRead: false,
                        reading: false,
                        read: true
                    }
                },
                { 
                bookName:"I am Malala",
                yrPub: 2014,
                genre: ["Politics", "Biography", "International Best Seller"],
                categories:
                    {
                        toRead: false,
                        reading: false,
                        read: true
                    }
                }
                ],
                //method
                attendance: function(){
                    console.log("Eu sou " + this.clubberName + " e eu adoro livros.");
                }, 
                    // var monthsInAttendance = [];
                    // var monthName = getMonth();
                    // if (attendance === true){
                    //     monthsInAttendance.push(getMonth());
                    // }
                    // return monthsInAttendance;
    };
// console.log(bookClubbers.attendance);
bookClubbers.attendance();