const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn add:fc [name]${logFontReset}`

module.exports = {
  prompt: async ({ prompter, args }) => {
    const answers = {}
    const { name } = args
    if (!name) throw new Error(errorMessage)
    answers.name = name

    const outputDirQuestion = {
      type: 'select',
      name: 'chooseOutPutDir',
      message: 'Please choose output directory.',
      choices: ['Layouts', 'Managements', 'Presentations']
    }
    const outputDirAnswer = await prompter.prompt(outputDirQuestion)
    const { chooseOutPutDir } = outputDirAnswer
    answers.chooseOutPutDir = chooseOutPutDir

    if (chooseOutPutDir !== 'Layouts') {
      const chooseComponentTypesQuestion = {
        type: 'select',
        name: 'chooseComponentTypes',
        message: 'Please choose component types.',
        choices: ['Function Component', 'Void Function Component']
      }
      const chooseComponentTypesAnswer = await prompter.prompt(chooseComponentTypesQuestion)
      const { chooseComponentTypes } = chooseComponentTypesAnswer
      answers.chooseComponentTypes = chooseComponentTypes

      const addPropsNumberQuestion = {
        type: 'input',
        name: 'addPropsNumber',
        message: 'Add props? (Please enter a number, 0 <= n, Empty === 0)\n',
        validate: (answer) => !isNaN(Number(answer))
      }
      const addPropsNumberAnswer = await prompter.prompt(addPropsNumberQuestion)
      const { addPropsNumber } = addPropsNumberAnswer
      answers.addPropsNumber = Number(addPropsNumber)

      if (answers.addPropsNumber !== 0) {
        answers.addPropsDetails = Array.from({ length: answers.addPropsNumber }, (_info, index) => {
          return {
            [`addPropsName${index + 1}`]: undefined,
            [`addPropsType${index + 1}`]: undefined
          }
        })

        const addPropsDetailQuestionTemp = (number) => {
          return [
            {
              type: 'input',
              name: `addPropsName${number}`,
              message: `Please add props${number} name.\n`,
              validate: (answer) => answer !== ''
            },
            {
              type: 'input',
              name: `addPropsType${number}`,
              message: `Please add props${number} type\n`,
              validate: (answer) => answer !== ''
            }
          ]
        }
        const addPropsDetailQuestion = Array.from({ length: answers.addPropsNumber }, (_info, index) => addPropsDetailQuestionTemp(index + 1)).flat()
        const addPropsDetailAnswer = await prompter.prompt(addPropsDetailQuestion)

        answers.addPropsDetails.forEach((info, index, arr) => {
          Object.keys(info).forEach((detailsKey) => {
            Object.keys(addPropsDetailAnswer).forEach((answersKey) => {
              if (answersKey === detailsKey) arr[index][detailsKey] = addPropsDetailAnswer[answersKey]
            })
          })
        })
      }

      const wrapperTagsQuestion = {
        type: 'input',
        name: 'wrapperTags',
        message: 'Please add wrapper tags.\n',
        validate: (answer) => answer !== ''
      }
      const wrapperTagsAnswer = await prompter.prompt(wrapperTagsQuestion)
      const { wrapperTags } = wrapperTagsAnswer
      answers.wrapperTags = wrapperTags

      const useHooksQuestion = {
        type: 'confirm',
        name: 'useHooks',
        message: 'Use custom hooks?\n'
      }
      const useHooksAnswer = await prompter.prompt(useHooksQuestion)
      const { useHooks } = useHooksAnswer
      answers.useHooks = useHooks

      if (useHooks) {
        const addHooksFnNameQuestion = {
          type: 'input',
          name: 'addHooksFnName',
          message: 'Please add hooks function name.\n🐶 (Do not need to input "use", "use***" will be output.)\n',
          validate: (answer) => answer !== ''
        }
        const addHooksFnNameAnswer = await prompter.prompt(addHooksFnNameQuestion)
        const { addHooksFnName } = addHooksFnNameAnswer
        answers.addHooksFnName = addHooksFnName

        const addHooksFnArgQuestion = {
          type: 'input',
          name: 'addHooksFnArg',
          message: 'Please add hooks function arg. (Empty OK.👌)\n'
        }
        const addHooksFnArgAnswer = await prompter.prompt(addHooksFnArgQuestion)
        const { addHooksFnArg } = addHooksFnArgAnswer
        answers.addHooksFnArg = addHooksFnArg

        const addHooksTypeAliasQuestion = {
          type: 'confirm',
          name: 'addHooksTypeAlias',
          message: 'Define a type alias for hooks functions return type annotations?\n'
        }
        const addHooksTypeAliasAnswer = await prompter.prompt(addHooksTypeAliasQuestion)
        const { addHooksTypeAlias } = addHooksTypeAliasAnswer
        answers.addHooksTypeAlias = addHooksTypeAlias

        if (addHooksTypeAlias) {
          const addHooksTypeNumberQuestion = {
            type: 'input',
            name: 'addHooksTypeNumber',
            message: 'Please input hooks types number.\n',
            validate: (answer) => !isNaN(Number(answer)) && answer !== '' && Number(answer) > 0
          }
          const addHooksTypeNumberAnswer = await prompter.prompt(addHooksTypeNumberQuestion)
          const { addHooksTypeNumber } = addHooksTypeNumberAnswer
          answers.addHooksTypeNumber = Number(addHooksTypeNumber)

          if (answers.addHooksTypeNumber !== 0) {
            answers.addHooksTypeDetails = Array.from({ length: answers.addHooksTypeNumber }, (_info, index) => {
              return {
                [`addHooksTypeKey${index + 1}`]: undefined,
                [`addHooksTypeDetail${index + 1}`]: undefined
              }
            })

            const addHooksTypeDetailQuestionTemp = (number) => {
              return [
                {
                  type: 'input',
                  name: `addHooksTypeKey${number}`,
                  message: `Please add hooks type${number} key.\n`,
                  validate: (answer) => answer !== ''
                },
                {
                  type: 'input',
                  name: `addHooksTypeDetail${number}`,
                  message: `Please add hooks type${number} types\n`,
                  validate: (answer) => answer !== ''
                }
              ]
            }
            const addHooksTypeDetailQuestion = Array.from({ length: answers.addHooksTypeNumber }, (_info, index) =>
              addHooksTypeDetailQuestionTemp(index + 1)
            ).flat()
            const addHooksTypeDetailAnswer = await prompter.prompt(addHooksTypeDetailQuestion)

            answers.addHooksTypeDetails.forEach((info, index, arr) => {
              Object.keys(info).forEach((detailsKey) => {
                Object.keys(addHooksTypeDetailAnswer).forEach((answersKey) => {
                  if (answersKey === detailsKey) arr[index][detailsKey] = addHooksTypeDetailAnswer[answersKey]
                })
              })
            })
          }
        }

        const addReactHooksQuestion = {
          type: 'MultiSelect',
          name: 'addReactHooks',
          message: 'If use react hooks, Please choose list below.\n🐶 (When do not use, Do not select anything.)',
          choices: ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef']
        }
        const addReactHooksAnswer = await prompter.prompt(addReactHooksQuestion)
        const { addReactHooks } = addReactHooksAnswer
        answers.addReactHooks = addReactHooks
      }
    }

    const StyleModuleQuestion = {
      type: 'confirm',
      name: 'useStyleModule',
      message: 'Use style module?\n'
    }
    const StyleModuleAnswer = await prompter.prompt(StyleModuleQuestion)
    const { useStyleModule } = StyleModuleAnswer
    answers.useStyleModule = useStyleModule

    const storybookQuestion = {
      type: 'confirm',
      name: 'useStorybook',
      message: 'Use storybook?\n'
    }
    const storybookAnswer = await prompter.prompt(storybookQuestion)
    const { useStorybook } = storybookAnswer
    answers.useStorybook = useStorybook

    return { ...answers }
  }
}
