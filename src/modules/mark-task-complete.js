import { removeInboxCards } from "./edit-task-pop-up";
import { currentFolder, generateCompleted, generateInbox, generatePriority, generateToday, generateUpcoming, selectedObjectDescription, selectedObjectDueDate, selectedObjectId, selectedObjectPriority, selectedObjectTitle } from "./generateMain";
import { updateTasks } from "./update-tasks";


let markComplete = () => {
    let userInput = {
        title: selectedObjectTitle,
        description: selectedObjectDescription,
        dueDate: selectedObjectDueDate,
        priority: selectedObjectPriority,
        id: selectedObjectId,
        project: 'complete'
    }
    updateTasks(userInput);
    removeInboxCards();
    if (currentFolder === 'inbox') {
        generateInbox();
       } else if (currentFolder === 'today') {
        generateToday();
       } else if (currentFolder === 'upcoming') {
        generateUpcoming();
       } else if (currentFolder === 'priority') {
        generatePriority();
       } else if (currentFolder === 'completed') {
        generateCompleted();
       }
 };

 export {
    markComplete
 }