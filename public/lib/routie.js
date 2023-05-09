import { chatPage } from '../../js/generateChat.js'
import { homePage } from '../../js/generateHome.js'

// Define the routes
routie({
    '': function() {
        // Load the home page content
        document.getElementById('app').innerHTML = homePage.generate();
    },
    'chat': function() {
        // Load the chat page content
        document.getElementById('app').innerHTML = chatPage.generate();
    },
    'contact': function() {
        // Load the contact page content
    }
});
