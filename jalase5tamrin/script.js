"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const flightNumInput = document.getElementById("flightNum");
    const nameInput = document.getElementById("name");
    const airlineSelect = document.getElementById("airline");
    const messageBox = document.getElementById("message");
    const ticketList = document.getElementById("ticketList");
    const addBtn = document.getElementById("addBtn");
    const printBtn = document.getElementById("printBtn");
    const airlines = {
        iranAir: [
            { flightNum: "IR100", name: "Arash" },
            { flightNum: "IR101", name: "Sara" }
        ],
        mahanAir: [
            { flightNum: "MA200", name: "Mohammad" },
            { flightNum: "MA201", name: "Banafshe" }
        ],
        kishAir: [
            { flightNum: "KI300", name: "Reza" },
            { flightNum: "KI301", name: "Mahboobeh" }
        ]
    };

    function addPassenger(flightNum, name) {
        this.push({ flightNum, name });
    }
    function addTicket() {
        const flightNum = flightNumInput.value.trim();
        const name = nameInput.value.trim()
        const airlineKey = airlineSelect.value;
        if (!flightNum || !name) {
            messageBox.textContent = "fill the fields";
            messageBox.style.color = "red";
            // return;
        }

        const boundAdd = addPassenger.bind(airlines[airlineKey]);
        boundAdd(flightNum, name);
        flightNumInput.value = "";
        nameInput.value = "";
        messageBox.textContent = "the ticket added Successfully";
        messageBox.style.color = "green";
        setTimeout(()=> messageBox.textContent = "", 3000);
    }
    function printTickets() {
        ticketList.innerHTML = "";

        for (const airline in airlines) {
            const block = document.createElement("div");
            block.className = "airline-block";

            const title = document.createElement("h3");
            title.textContent = airline;
            block.appendChild(title);

            airlines[airline].forEach(ticket => {
                const entry = document.createElement("div");
                entry.className = "ticket-entry";
                entry.textContent = `flight=${ticket.flightNum} | name: ${ticket.name}`;
                block.appendChild(entry);
            });

            ticketList.appendChild(block);
        }
    }

    addBtn.addEventListener("click", addTicket);
    printBtn.addEventListener("click", printTickets);
});


