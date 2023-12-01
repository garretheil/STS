// public/js/script.js

$(document).ready(function () {
    // Counter to keep track of the ticket number
    var ticketCounter = 1;

    var sampleOwners = ["John Doe", "Jane Smith", "Mike Lowery", "Alice Johnson"];

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var username = $('#usernameField').val();
        var password = $('#passwordField').val();

        if (username === 'admin@sts.org' && password === 'password123.') {
            window.location.href = '/newTicket';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    $("#submitTicket").click(function () {
        // Increment the ticket number and format it with leading zeros
        var ticketNumber = pad(ticketCounter++, 3);

        // Get ticket details
        var requestType = $('#requestType').val();
        var ticketSubject = $('#ticketSubject').val();
        var ticketPriority = $('#ticketPriority').val();
        var ticketRequester = $('#ticketRequester').val();
        var ticketDetails = $('#ticketDetails').val();

        // Get a random owner from the sample list
        var randomOwner = sampleOwners[Math.floor(Math.random() * sampleOwners.length)];

        // Create a new row for the ticket
        var newRow = `<tr>
                        <td>${ticketNumber}</td>
                        <td>${requestType}</td>
                        <td>${ticketPriority}</td>
                        <td>${ticketSubject}</td>
                        <td>${ticketRequester}</td>
                        <td>${randomOwner}</td>
                      </tr>`;

        // Append the new row to the table
        $("#ticketsLayer table tbody").append(newRow);

        // Close the overlay
        $("#createTicketOverlay").fadeOut();
        $("body").css("overflow", "auto");
        $("#topLayer, #ticketsLayer, footer").css("filter", "none");

        // Clear input fields
        $('#requestType, #ticketSubject, #ticketPriority, #ticketRequester, #ticketDetails').val('');
    });

    $("#createTicketView").click(function () {
        $("#createTicketOverlay").fadeIn();
        $("body").css("overflow", "hidden");
        $("#topLayer, #ticketsLayer, footer").css("filter", "blur(5px)");
    });

    $("#cancelTicket").click(function () {
        $("#createTicketOverlay").fadeOut();
        $("body").css("overflow", "auto");
        $("#topLayer, #ticketsLayer, footer").css("filter", "none");
    });

    $("#userTicketsView").click(function () {
        $("#myTicketsOverlay").fadeIn();
        $("body").css("overflow", "hidden");
        $("#topLayer, #ticketsLayer, footer").css("filter", "blur(5px)");

        // Close overlay when the close button is clicked
        $('#closeOverlay').on('click', function () {
            $("#myTicketsOverlay").fadeOut();
            $("body").css("overflow", "auto");
            $("#topLayer, #ticketsLayer, footer").css("filter", "none");
        });
    });

    // Function to pad numbers with leading zeros
    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    // ... (rest of the code)
});
