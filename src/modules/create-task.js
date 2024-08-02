function taskCreator(title, description, dueDate, priority, project, section, id) {
    const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project,
        section: section,
        id: id
    }

    return {...task}
};

export {taskCreator};