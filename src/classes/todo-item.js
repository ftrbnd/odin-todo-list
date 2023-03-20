export default class TodoItem {
    constructor(id, title, description = '', dueDate =  new Date(), priority = 1) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? dueDate : new Date();
        this.priority = priority ? priority : 1;
    }
}