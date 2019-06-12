// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function
function generateTrashTalk(option) {
  const task = {
    工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    創業家: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // return error notice if option is empty
  if (!option) {
    return '請選擇你想要對誰說幹話'
  }
  // find the tasks for specific target
  const tasksOfTarget = task[option]

  // translate target
  switch (option) {
    case 'engineer':
      option = '工程師'
      break;
    case 'designer':
      option = '設計師'
      break;
    case 'entrepreneur':
      option = '創業家'
  }

  // randomly choose one task and one phrase then show full sentence
  let sentence = `身為一個${option}，${sample(tasksOfTarget)}，${sample(phrase)}吧!`

  // return full sentence
  return sentence
}
// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk