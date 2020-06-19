import { Selector, t } from 'testcafe'

class MainPage {
  constructor() {
    this.header = Selector('h3')
    this.todoText = Selector('.new-todo')
    this.createdToDo = Selector('.todo-list')
    this.toggleAll = Selector('.toggle-all + label')
    this.checkBox = Selector('.toggle')
    this.selectAll = Selector('a').withText('All')
    this.selectActive = Selector('a').withText('Active')
    this.selectCompleted = Selector('a').withText('Completed')
    this.toDoCount = Selector('.todo-count')
    this.destroyBtn = Selector('.destroy')
    this.count = Selector('.todo-count')
    this.editText = Selector('.edit')
    this.listTodo = Selector('.toggle + label')
  }
}

export default MainPage
