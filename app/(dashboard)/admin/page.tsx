'use client'

import { useState } from 'react'
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerClose,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Progress,
  Spinner,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Toast,
  Breadcrumbs,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  CodeBlock,
} from '@/components/ui'

const categories = [
  {
    title: 'Forms',
    components: ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch'],
  },
  {
    title: 'Feedback',
    components: ['Alert', 'Toast', 'Spinner', 'Progress'],
  },
  {
    title: 'Navigation',
    components: ['Tabs', 'Accordion', 'Breadcrumbs', 'Pagination', 'DropdownMenu'],
  },
  {
    title: 'Overlays',
    components: ['Modal', 'Drawer', 'Tooltip', 'Popover'],
  },
  {
    title: 'Data Display',
    components: ['Card', 'Badge', 'Avatar', 'Table', 'CodeBlock'],
  },
]

export default function AdminPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-foreground">Component Library</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Browse and interact with all 25 UI primitives
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.title} className="space-y-2">
          <h2 className="text-sm font-semibold text-foreground">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.components.map((componentName) => (
              <Card key={componentName}>
                <CardHeader>
                  <CardTitle>{componentName}</CardTitle>
                </CardHeader>
                <CardContent>
                  {componentName === 'Button' && (
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  )}
                  {componentName === 'Input' && <Input placeholder="Enter text..." />}
                  {componentName === 'Textarea' && (
                    <Textarea placeholder="Enter multiline text..." />
                  )}
                  {componentName === 'Select' && (
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Option 1</SelectItem>
                        <SelectItem value="2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                  {componentName === 'Checkbox' && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="check" />
                      <label htmlFor="check">Checkbox label</label>
                    </div>
                  )}
                  {componentName === 'Radio' && (
                    <RadioGroup defaultValue="1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id="r1" />
                        <label htmlFor="r1">Option 1</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="r2" />
                        <label htmlFor="r2">Option 2</label>
                      </div>
                    </RadioGroup>
                  )}
                  {componentName === 'Switch' && (
                    <div className="flex items-center space-x-2">
                      <Switch id="switch" />
                      <label htmlFor="switch">Toggle switch</label>
                    </div>
                  )}
                  {componentName === 'Alert' && (
                    <Alert variant="default">
                      <AlertIcon.info className="h-4 w-4" />
                      <AlertTitle>Alert Title</AlertTitle>
                      <AlertDescription>This is an alert message.</AlertDescription>
                    </Alert>
                  )}
                  {componentName === 'Toast' && (
                    <Button onClick={() => setToastVisible(true)}>Show Toast</Button>
                  )}
                  {componentName === 'Spinner' && (
                    <div className="flex gap-4">
                      <Spinner size="sm" />
                      <Spinner size="md" />
                      <Spinner size="lg" />
                    </div>
                  )}
                  {componentName === 'Progress' && <Progress value={60} />}
                  {componentName === 'Tabs' && (
                    <Tabs defaultValue="tab1">
                      <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content 1</TabsContent>
                      <TabsContent value="tab2">Content 2</TabsContent>
                    </Tabs>
                  )}
                  {componentName === 'Accordion' && (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>Content for item 1</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                  {componentName === 'Breadcrumbs' && (
                    <Breadcrumbs
                      items={[
                        { label: 'Home', href: '/' },
                        { label: 'Dashboard', href: '/dashboard' },
                        { label: 'Admin' },
                      ]}
                    />
                  )}
                  {componentName === 'Pagination' && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={5}
                      onPageChange={setCurrentPage}
                    />
                  )}
                  {componentName === 'DropdownMenu' && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Item 1</DropdownMenuItem>
                        <DropdownMenuItem>Item 2</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                  {componentName === 'Modal' && (
                    <Modal>
                      <ModalTrigger asChild>
                        <Button>Open Modal</Button>
                      </ModalTrigger>
                      <ModalContent>
                        <ModalHeader>
                          <ModalTitle>Modal Title</ModalTitle>
                          <ModalDescription>Modal description</ModalDescription>
                        </ModalHeader>
                        <ModalFooter>
                          <Button>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {componentName === 'Drawer' && (
                    <>
                      <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} side="right">
                        <DrawerHeader>
                          <DrawerTitle>Drawer Title</DrawerTitle>
                          <DrawerClose />
                        </DrawerHeader>
                        <DrawerContent>Drawer content</DrawerContent>
                      </Drawer>
                    </>
                  )}
                  {componentName === 'Tooltip' && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button>Hover me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Tooltip content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {componentName === 'Popover' && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button>Open Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent>Popover content</PopoverContent>
                    </Popover>
                  )}
                  {componentName === 'Badge' && (
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="success">Success</Badge>
                    </div>
                  )}
                  {componentName === 'Avatar' && (
                    <div className="flex gap-2">
                      <Avatar>
                        <AvatarImage src="" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                  {componentName === 'Table' && (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Item 1</TableCell>
                          <TableCell>Active</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
                  {componentName === 'CodeBlock' && (
                    <CodeBlock language="typescript" code="const example = 'code'" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {toastVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <Toast variant="default" onClose={() => setToastVisible(false)}>
            <div>Toast notification</div>
          </Toast>
        </div>
      )}
    </div>
  )
}
