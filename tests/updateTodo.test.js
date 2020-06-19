import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`update a todomvc`.page`http://todomvc.com/examples/react/#/`

test('create, edit and update a todo', async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow()
  await t.typeText(mainpage.todoText, 'My Todo', { paste: true, replace: true })
  await t.pressKey('enter')
  await t.expect(mainpage.header.innerText).contains('React')
  await t.expect(mainpage.createdToDo.innerText).contains('My Todo')
  await t.hover(mainpage.createdToDo)
  await t.doubleClick(mainpage.createdToDo)
  await t.selectText(mainpage.editText)
  await t.typeText(mainpage.editText, 'My Todo Updated', {
    paste: true,
    replace: true,
  })
  await t.pressKey('enter')
  await t.expect(mainpage.createdToDo.innerText).contains('My Todo Updated')
})
