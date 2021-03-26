const context = require.context('./', true, /\.md$/)

const modules = context.keys().reduce((modules, path) => {

  const name = path.slice(2, -3).replace(/\//, '-')
  const componentName = 'DOC-' + name

  modules.components[componentName] = context(path).default
  modules.path.push(name)
  return modules
}, { components: {}, path: [] })

export default modules