module.exports = function (plop) {
  const primitives = [
    'Button',
    'Input',
    'Textarea',
    'Select',
    'Checkbox',
    'Radio',
    'Switch',
    'Card',
    'Modal',
    'Drawer',
    'Tooltip',
    'Popover',
    'DropdownMenu',
    'Tabs',
    'Accordion',
    'Badge',
    'Avatar',
    'Progress',
    'Spinner',
    'Alert',
    'Toast',
    'Breadcrumbs',
    'Pagination',
    'Table',
    'CodeBlock',
  ]

  plop.setGenerator('component', {
    description: 'Generate a UI primitive component',
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'Select component to generate:',
        choices: primitives,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/ui/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/ui/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'modify',
        path: 'components/ui/index.ts',
        pattern: /(\/\/ Components will be added here)/,
        template: "export * from './{{kebabCase name}}'\n$1",
      },
    ],
  })
}

