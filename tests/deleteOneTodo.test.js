import { Selector } from 'testcafe'
import MainPage from '../pageobjects/allObjects'

const mainpage = new MainPage()

fixture`Create Multiple todo`.page`http://todomvc.com/examples/react/#/`

test(`Create Multiple todo and delete first one`, async t => {
  await t.eval(() => location.reload(true))
  await t.maximizeWindow().expect(mainpage.header.innerText).contains('React')
  let str = 'This todo will be deleted '

  for (let i = 0; i < 9; i++) {
    await t.typeText(mainpage.todoText, str + i, {
      paste: true,
      replace: true,
    })
    await t.pressKey('enter')
  }
  await t.expect(mainpage.count.innerText).contains('9 items left')
  var liCount = await mainpage.listTodo.count //get items count
  //console.log(liCount)

  for (let j = 1; j <= liCount / 2; j++) {
    await t
      .hover(mainpage.listTodo.nth(j))
      .click(mainpage.listTodo.nth(j))
      .click(mainpage.destroyBtn.nth(j))
  }
  await t.expect(mainpage.count.innerText).contains('5 items left')
})
