const redux = require("redux");

const initialState = {
    contacts: [
    {
        name: "abcde",
        phone: "888-299-0983"
    },
    {
        name: "Jerry",
        phone: "802-453-2346"
    }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name)
            }
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

//action is errand boy
const addContact = contact => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    })
}
const removeContact = name => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        name
    })
}
console.log(initialState);
addContact({
        name: "ana",
        phone: "883-979-0983"
    });

removeContact("abcde")
