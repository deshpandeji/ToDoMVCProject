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
    await t.hover(mainpage.createdToDo)
    await t.click(mainpage.checkBox.nth(i)) //click each link
  }
  await t.click(mainpage.selectAll)
  await t.expect(mainpage.count.innerText).contains('4 items left')
  await t.takeScreenshot({ path: './screenshots/SelectAll.png' })
  await t.click(mainpage.selectActive)
  await t.expect(mainpage.count.innerText).contains('4 items left')
  await t.takeScreenshot({ path: './screenshots/selectActive.png' })
  await t.click(mainpage.selectCompleted)
  await t.expect(mainpage.count.innerText).contains('4 items left')
  await t.takeScreenshot({ path: './screenshots/selectCompleted.png' })
})
