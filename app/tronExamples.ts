export default () => {
  console.tron.log('Your Friendly tron log message')
  console.tron.logImportant('I am important')
  console.tron.display({
    name: 'DISPLAY',
    value: {
      numbers: 1,
      strings: 'strings',
      booleans: true,
      arrays: [1, 2, 3],
      objects: {
        deeper: {
          deeper: {
            yay: '👾',
          },
        },
      },
      functionNames: function hello() {
        /* dummy function */
      },
    },
    preview: 'More control with display()',
    important: true,
    image: {
      uri:
        'https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4',
    },
  })
}
