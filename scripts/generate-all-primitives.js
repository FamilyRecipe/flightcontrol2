const { execSync } = require('child_process')

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

console.log('Generating all 25 UI primitives...\n')

primitives.forEach((name, index) => {
  console.log(`[${index + 1}/25] Generating ${name}...`)
  try {
    execSync(`echo "${name}" | pnpm plop component`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    })
  } catch (error) {
    console.error(`Error generating ${name}:`, error.message)
  }
})

console.log('\n✅ All primitives generated!')

