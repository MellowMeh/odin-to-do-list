import { removeInboxCards } from "./edit-task-pop-up";
import { generateInbox, selectedObjectDescription, selectedObjectDueDate, selectedObjectId, selectedObjectPriority, selectedObjectTitle } from "./generateMain";
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
    generateInbox();
 };

 export {
    markComplete
 }