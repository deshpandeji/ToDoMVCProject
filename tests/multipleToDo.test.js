import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`Create Multiple todo`.page`http://todomvc.com/examples/react/#/`
test('Create Mutiple Todo using loop', async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow()
  await t.expect(mainpage.header.innerText).contains('React')
})

test('create and verify first todo', async t => {
  await t.maximizeWindow()
  let str = 'My Todo Item '

  for (let i = 0; i < 9; i++) {
    await t.typeText(mainpage.todoText, str + i, {
      paste: true,
      replace: true,
    })
    await t.pressKey('enter')
    await t.wait(1000)
  }
})
