class Room {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
    }
    get name () {
        return this._name;
    }
    get description () {
        return this._description;
    }
    set name (value) {
        this._name = value;
    }
    
    linkRooms (direction, room) {
        this._linkedRooms[direction] = room; 
    }
    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction]
        } else {
            alert ("You can't go that way!");
            return this;
        }
    }
    set name(value) {
        if (value.length < 4) {
          alert("Name is too short.");
          return;
        }
        this._name = value;
      }
    
      set description(value) {
        if (value.length < 4) {
          alert("description is too short.");
          return;
        }
        this._description = value;
      }
}

function displayRoomInfo (room) {
    document.getElementById("textarea").innerHTML = room.description;
    cosnt = userInput = docutment.getElementById("userinput");
    if (userInput) {
        unserInput.focus();
    }
}

function startGame () {
    currentRoom = room;
    displayRoomInfor(currentRooom);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = document.getElementById("userinput").value;
            const directions = ["north", "east", "west", "south"];
            if (directions.includes(command.toLoweCase())) {
                curentRoom = currentRoom.move(command);
                displayRoomInfo(currentRoom);
            } else {
                alert ("This is an invalid command!");
            }
            document.getElementById("userinput").value = "";
        }
    }) 
}


const Bathroom = new Room("Bathroom" , "")
const Bedroom = new Room("Bedroom" , "")
const Corridor = new Room("Corridor" , "")
const livingRoom = new Room("Living Room" , "")
const diningRoom = new Room("Dining Room" , "")
const Kitchen = new Room("Kitchen" , "")
const Basement = new Room("Basement" , "")
const Garden = new Room("Garden" , "")
const Stairs = new Room("Stairs" , "")
const masterBedroom = new Room("Master Bedroom" , "")
const enSuite = new Room("En Suite" , "")





