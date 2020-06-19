import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`open todomvc react app`.page`http://todomvc.com/examples/react/#/`
test('open todomvc app', async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow()
  await t.expect(mainpage.header.innerText).contains('React')
})

test('create and verify first todo', async t => {
  await t.maximizeWindow()
  await t.typeText(mainpage.todoText, 'My Todo', { paste: true, replace: true })
  await t.pressKey('enter')
  await t.expect(mainpage.header.innerText).contains('React')
  await t.expect(mainpage.createdToDo.innerText).contains('My Todo')
})
