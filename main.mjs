/*

1. Skapa todos
2. Lista upp todos
3. Radera todos
4. Uppdatera todos
    - Markera som avklarad
    - Byta namn

*/

import readline from "readline-sync";

const todos = [
  {
    title: "Köpa mat",
    deadline: new Date("2025-10-20"),
    status: "oklar",
  },
  {
    title: "Lämna in rapport",
    deadline: new Date("2025-10-18"),
    status: "oklar",
  },
  {
    title: "Träna på gymmet",
    deadline: new Date("2025-10-17"),
    status: "oklar",
  },
  {
    title: "Ringa tandläkaren",
    deadline: new Date("2025-10-25"),
    status: "oklar",
  },
  {
    title: "Fixa med bil service",
    deadline: new Date("2025-11-01"),
    status: "oklar",
  },
  {
    title: "Planera semester",
    deadline: new Date("2025-12-15"),
    status: "oklar",
  },
  {
    title: "Betala räkningar",
    deadline: new Date("2025-10-30"),
    status: "oklar",
  },
  {
    title: "Städa lägenheten",
    deadline: new Date("2025-10-19"),
    status: "oklar",
  },
];

function showMenu() {
  console.log("Välkommen till todo applikationen!");
  console.log("Du har dessa val tillgängliga:");
  console.log("1. Skapa en ny todo");
  console.log("2. Visa alla todos");
  console.log("3. Radera en todo");
  console.log("4. Uppdatera en todo");
  console.log("5. Avsluta applikationen");
}

showMenu();

let keepRunning = true;
while (keepRunning) {
  const choiceString = readline.question("Vad vill du göra? ");
  const choice = Number.parseInt(choiceString);

  switch (choice) {
    case 1: {
      createTodo();
      break;
    }
    case 2: {
      listTodos();
      break;
    }
    case 3: {
      deleteTodo();
      break;
    }
    case 4: {
      updateToDo();
      break;
    }
    case 5: {
      keepRunning = false;
      break;
    }
    default:
      console.log("Det valet finns inte! Prova igen.");
  }

  console.log("");
}

console.log("Applikationen avslutas!");

function createTodo() {
  const title = readline.question("Vad vill du kalla todo:n för? ");
  const deadlineString = readline.question("När ska denna todo göras? (ÅÅÅÅ-MM-DD) ");

  // Omvandlar en sträng till ett riktigt datum objekt
  const deadlineTime = Date.parse(deadlineString);
  const deadline = new Date(deadlineTime);

  const todo = {
    title: title,
    deadline: deadline,
    status: "oklar",
  };

  todos.push(todo);

  console.log("En ny todo har skapats!");
}

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    console.log(" - (" + i + ") " + todo.title);
    console.log("    Deadline: " + formatDate(todo.deadline));
    console.log("    Status: " + todo.status);
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}`;
  //return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}

function deleteTodo() {
  const indexString = readline.question("Vilken index vill du radera? ");
  const index = Number.parseInt(indexString);

  const removedTodos = todos.splice(index, 1);
  const removedTodo = removedTodos[0];

  console.log("Todo '" + removedTodo.title + "' has raderats!");
  // todos.filter() man skulle även kunna använda filter
}

function updateToDo() {
  //vad vilken index vill vi uppdatera
  const indexString = readline.question("Vilken todo vill du uppdatera? (ange index): \n");
  const index = Number.parseInt(indexString);

  const todo = todos[index];

  console.log("1. Markera todos som påbörjad");
  console.log("2. Markera todos som avslutad");
  console.log("3. Byta namn/titel på todos");
  console.log("4. Ändra deadline på todos");
  console.log("5. Avbryt");

  const updateChoice = Number.parseInt(readline.question("\nVälj ett alternativ: "));

  switch (updateChoice) {
    case 1: {
      todo.status = "påbörjad";
      console.log("Status ändrad till påbörjad");
      break;
    }
    case 2: {
      todo.status = "avslutad";
      console.log("Status ändrad till avslutad");
      break;
    }
    case 3: {
      const newTitle = readline.question("\nAnge ett nytt namn: ");
      todo.title = newTitle;
      console.log(`\nTitle uppdaterad till: ${newTitle} `);
      break;
    }
    case 4: {
      const newDeadline = readline.question("\nAnge nytt datum (ÅÅÅÅ-MM-DD): ");
      const newDeadlineTime = Date.parse(newDeadline);
      todo.deadline = new Date(newDeadlineTime);
      console.log("Deadline Uppdaterad");
      break;
    }
    case 5: {
      showMenu();
      break;
    }
    default:
      console.log("Det valet finns inte! Prova igen.");
  }
}
