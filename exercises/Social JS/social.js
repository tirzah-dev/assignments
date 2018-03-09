var bookClubbers = 
    {
            clubberName: "Juliana",
            age: 34,
            nationalOrigin: "Brazil",
            host: true,
            books:[
                { 
                bookName:"Remembrant",
                yrPub: 2014,
                genre: ["fiction", "Young Adult", "suspense"],
                categories: 
                    {
                        toRead: false,
                        reading: false,
                        read: true,
                        rating: 3
                    }
                },
                { 
                bookName:"Rising Strong",
                yrPub: 2015,
                genre: ["Self-Help", "Research"],
                categories:
                    {
                        toRead: true,
                        reading: false,
                        read: false,
                        rating: "none"
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
                        read: true,
                        rating: 5
                    }
                }
            ],
            attendance: function(){
                if (this.host === true){
                    console.log("Eu sou " + this.clubberName + " bem vinda a minha casa. Você leu o livro?");
                }else{
                    console.log("Eu sou " + this.clubberName + ". Obrigada por hospedar o 'Book Club' deste mês.")
                }
            }
    };

bookClubbers.friends = ["Rebekah", "Fernanda", "Luciana", "Ali"];
bookClubbers.gender = "female";
bookClubbers.friends.push("Heather", "Bianca");

console.log(bookClubbers);
// bookClubbers.attendance();


// var monthsInAttendance = [];
            // var monthName = getMonth();
            // if (attendance === true){
            //     monthsInAttendance.push(getMonth());
            // }
            // return monthsInAttendance;