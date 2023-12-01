// public/js/newTicketData.js

$(document).ready(function () {
    var ticketCounter = 1001;

    $("#submitTicket").click(function () {
        var requestType = $("#requestType").val();
        var priority = $("#priority").val();
        var subject = $("#ticketSubject").val();
        var requester = $("#requester").val();

        $("# ticketsLayer table tbody").append(
            "<tr><td>" + ticketCounter + "</td><td>" + requestType + "</td><td>" + priority +
            "</td><td>" + subject + "</td><td>" + requester + "</td><td>Not Assigned</td></tr>"
        );
        ticketCounter++;
        $("#ticketForm")[0].reset();
        $("#createTicketOverlay").fadeOut();
    });

    