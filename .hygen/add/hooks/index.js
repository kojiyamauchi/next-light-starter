const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn add:hooks [name]${logFontReset}`

module.exports = {
  prompt: async ({ prompter, args }) => {
    const answers = {}
    const { name } = args
    if (!name) throw new Error(errorMessage)
    answers.name = name

    const hooksFnArgQuestion = {
      type: 'input',
      name: 'hooksFnArg',
      message: 'Please input hooks function arg. (Empty OK.👌)\n'
    }
    const hooksFnArgAnswer = await prompter.prompt(hooksFnArgQuestion)
    const { hooksFnArg } = hooksFnArgAnswer
    answers.hooksFnArg = hooksFnArg

    const hooksTypeAliasQuestion = {
      type: 'confirm',
      name: 'hooksTypeAlias',
      message: 'Define a type alias for hooks functions return type annotations?\n'
    }
    const hooksTypeAliasAnswer = await prompter.prompt(hooksTypeAliasQuestion)
    const { hooksTypeAlias } = hooksTypeAliasAnswer
    answers.hooksTypeAlias = hooksTypeAlias

    if (hooksTypeAlias) {
      const hooksTypeNumberQuestion = {
        type: 'input',
        name: 'hooksTypeNumber',
        message: 'Please input hooks types number.\n',
        validate: (answer) => !isNaN(Number(answer)) && answer !== '' && Number(answer) > 0
      }
      const hooksTypeNumberAnswer = await prompter.prompt(hooksTypeNumberQuestion)
      const { hooksTypeNumber } = hooksTypeNumberAnswer
      answers.hooksTypeNumber = Number(hooksTypeNumber)

      if (answers.hooksTypeNumber !== 0) {
        answers.hooksTypeDetails = Array.from({ length: answers.hooksTypeNumber }, (_info, index) => {
          return {
            [`hooksTypeKey${index + 1}`]: undefined,
            [`hooksTypeDetail${index + 1}`]: undefined
          }
        })

        const hooksTypeDetailQuestionTemp = (number) => {
          return [
            {
              type: 'input',
              name: `hooksTypeKey${number}`,
              message: `Please add hooks type${number} key.\n`,
              validate: (answer) => answer !== ''
            },
            {
              type: 'input',
              name: `hooksTypeDetail${number}`,
              message: `Please add hooks type${number} types\n`,
              validate: (answer) => answer !== ''
            }
          ]
        }
        const hooksTypeDetailQuestion = Array.from({ length: answers.hooksTypeNumber }, (_info, index) => hooksTypeDetailQuestionTemp(index + 1)).flat()
        const hooksTypeDetailAnswer = await prompter.prompt(hooksTypeDetailQuestion)

        answers.hooksTypeDetails.forEach((info, index, arr) => {
          Object.keys(info).forEach((detailsKey) => {
            Object.keys(hooksTypeDetailAnswer).forEach((answersKey) => {
              if (answersKey === detailsKey) arr[index][detailsKey] = hooksTypeDetailAnswer[answersKey]
            })
          })
        })
      }
    }

    const reactHooksQuestion = {
      type: 'MultiSelect',
      name: 'reactHooks',
      message: 'If use react hooks, Please choose list below.\n🐶 (When do not use, Do not select anything.)',
      choices: ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef']
    }
    const reactHooksAnswer = await prompter.prompt(reactHooksQuestion)
    const { reactHooks } = reactHooksAnswer
    answers.reactHooks = reactHooks

    return { ...answers }
  }
}
