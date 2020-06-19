import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`Create and Select a todo`.page`http://todomvc.com/examples/react/#/`

test('create multiple todo', async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow()

  let str = 'My Radom Todo Item '

  for (let i = 0; i < 9; i++) {
    await t.typeText(mainpage.todoText, str + i, {
      paste: true,
      replace: true,
    })
    await t.pressKey('enter')
  }
  await t.expect(mainpage.count.innerText).contains('9 items left')
  const navCount = await mainpage.checkBox.count //get items count
  for (let i = 0; i < navCount; i += 2) {
    await t
    .hover(mainpage.createdToDo)
    .click(mainpage.checkBox.nth(i))
     //click each link
     // I have get count of navCount after each delete
     // 
  }
  await t.expect(mainpage.count.innerText).contains('4 items left')
})
