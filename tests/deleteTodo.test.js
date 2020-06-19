import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`Create Multiple todo`.page`http://todomvc.com/examples/react/#/`
test('create and delete first todo', async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow()
  await t.expect(mainpage.header.innerText).contains('React')
  await t.typeText(mainpage.todoText, 'This todo will be deleted', {
    paste: true,
    replace: true,
  })
  await t.pressKey('enter')

  await t.wait(1000)
  await t
    .expect(mainpage.createdToDo.innerText)
    .contains('This todo will be deleted')
  await t.expect(mainpage.count.innerText).contains('1 item left')
  await t.wait(1000)
  await t.hover(mainpage.createdToDo)
  await t.wait(1000)
  await t.expect(mainpage.destroyBtn).ok()
  await t.click(mainpage.destroyBtn)
})
