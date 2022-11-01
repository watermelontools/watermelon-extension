const paintTickets = (tickets) => {
  tickets?.forEach((ticket) => {
    if (ticket.key) {
      $("#mostRelevantJiraTicketHolder").append(`
      <div class="Box">
    <div class="Box-header d-flex flex-justify-between">
      <a href="${ticket.fields.priority.iconUrl.split("/images")[0]}/browse/${
        ticket?.key
      }">
        <h5 class="Box-title Truncate">
         ${ticket?.key}: ${ticket?.fields?.summary}
       </h5>
      </a>
      <span style="color: green">${ticket?.fields?.status?.name}</span>
    </div>
   </div>
    ${
      ticket?.renderedFields?.description
        ? `<div class="Box-body">${ticket?.renderedFields?.description}</div>`
        : ""
    }
    </div>
  `);
    }
  });
};
const addViewAlTicketssButton = (allJiraTickets) => {
  $("#mostRelevantJiraTicketHolder").append(`
    <div class="anim-fade-in">
      <button class="btn btn-primary btn-sm" id="viewAllPRs">View More Tickets</button>
    </div>
  `);
  $("#viewAllPRs").on("click", (event) => {
    paintTickets(allJiraTickets);
    $("#viewAllPRs").remove();
  });
};
const addMostRelevantJiraTicket = (jiraTickets) => {
  if (Array.isArray(jiraTickets) && jiraTickets.length) {
    let firstTicket = jiraTickets.shift();
    $("#mostRelevantJiraTicketHolder").append(`
    <h3>Most Relevant Jira Ticket</h3>
    `);
    paintTickets([firstTicket]);
    if (jiraTickets.length > 1) {
      addViewAlTicketssButton(jiraTickets);
    }
  }
};

export default addMostRelevantJiraTicket;

