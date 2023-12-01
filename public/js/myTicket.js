$(document).ready(function () {
    // Additional admin ticket data
    var adminTicketsData = [
      { ticketNumber: "A0001", subject: "Server Maintenance", priority: "High", requester: "admin" },
      { ticketNumber: "A0002", subject: "Security Patch Update", priority: "Critical", requester: "admin" },
    ];

    // Function to check if the requester is an admin
    function isRequesterAdmin(requester) {
      return requester.toLowerCase() === "admin";
    }

    // Function to populate admin tickets
    function populateAdminTickets() {
      var myTicketsBody = $("#myTicketsBody");

      adminTicketsData.forEach(function (ticket) {
        // Check if the requester is an admin
        if (isRequesterAdmin(ticket.requester)) {
          myTicketsBody.append(
            "<tr><td>" + ticket.ticketNumber + "</td><td>" + ticket.subject +
            "</td><td>" + ticket.priority + "</td></tr>"
          );
        }
      });
    }

    // Call the function to populate admin tickets
    populateAdminTickets();
  });