/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / toggles / With right label

Component summary: This is a modern toggle switch component with an accompanying right-aligned label, built using Headless UI's Switch and Field components. The toggle features a smooth sliding animation using transform transitions, with clear visual states (gray for off, indigo for on) and accessibility features including focus rings and ARIA support. This component would be particularly useful for binary settings or preferences in forms, such as enabling/disabling features or switching between pricing plans, as demonstrated by the "Annual billing" use case with its supplementary cost-saving information.
*/
'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
      <Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-gray-900">Annual billing</span>{' '}
        <span className="text-gray-500">(Save 10%)</span>
      </Label>
    </Field>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / Simple

Component summary: This is a minimalist card heading component designed for displaying section or content titles in application interfaces. It features a clean, bordered container with consistent padding and a semibold title, making it particularly suitable for heading sections like dashboards, lists, or content panels. The component follows a responsive design pattern with different horizontal padding for mobile (`px-4`) and larger screens (`sm:px-6`), while maintaining a light background and subtle bottom border for visual separation.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / With action

Component summary: This is a versatile card heading component that combines a section title with an action button, commonly used for dashboard sections or content management interfaces. The component features a clean, horizontally-aligned layout with a semibold heading ("Job Postings") on the left and a prominent indigo-colored action button ("Create new job") on the right, all contained within a white background card with a subtle bottom border. The implementation includes responsive flex-wrap behavior for smaller screens and comprehensive interactive states for the button (hover, focus-visible), making it particularly suitable for admin interfaces, listing pages, or anywhere that combines content headers with primary actions.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
        </div>
        <div className="ml-4 mt-2 shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / With avatar and actions

Component summary: This is a card heading component that combines a user profile display with action buttons, designed for application interfaces where user information and quick contact actions need to be prominently featured. The component features a horizontal layout with a circular avatar image, user details (name and username) on the left, and two action buttons (Phone and Email) with icons on the right, all wrapped in a clean white background with a subtle bottom border. This pattern would be particularly useful in contact management systems, user directories, or dashboard interfaces where quick access to communication options is important, while the responsive design (`sm:flex-nowrap`) ensures proper layout across different screen sizes.
*/
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-gray-900">Tom Cook</h3>
              <p className="text-sm text-gray-500">
                <a href="#">@tom_cook</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PhoneIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <EnvelopeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / With avatar, meta, and dropdown

Component summary: This is a card heading component that displays user information with a social media-like layout, featuring a user avatar, name, timestamp, and an interactive dropdown menu. The component uses a horizontal flex layout combining a circular avatar image, metadata (username and timestamp) in the middle, and a three-dot menu button that reveals a dropdown with actions like "Add to favorites," "Embed," and "Report content." This pattern is particularly useful for content cards, social media posts, or comment headers where you need to display user information alongside contextual actions, making it a versatile choice for user-generated content interfaces or activity feeds.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">
            <a href="#" className="hover:underline">
              Chelsea Hagon
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              December 9 at 11:43 AM
            </a>
          </p>
        </div>
        <div className="flex shrink-0 self-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <StarIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                    <span>Add to favorites</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <CodeBracketIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                    <span>Embed</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <FlagIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                    <span>Report content</span>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / With description and action

Component summary: This is a versatile card heading component designed for dashboard or admin interfaces, featuring a two-column layout with descriptive content on the left and an action button on the right. The component combines a title ("Job Postings"), supporting descriptive text, and a prominent "Create new job" button with indigo styling and hover/focus states, making it ideal for section headers that require both contextual information and primary actions. The responsive design uses Tailwind's flex-wrap utilities and SM breakpoint adjustments to maintain an organized layout on both mobile and desktop views, while the consistent padding and border styling help it integrate seamlessly into larger page layouts.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
          </p>
        </div>
        <div className="ml-4 mt-4 shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / card-headings / With description

Component summary: This is a simple yet versatile card heading component designed for section headers that require both a title and supporting description text. The component features a clean, bordered layout with a white background, containing a semibold heading followed by smaller, gray descriptive text underneath. It's particularly useful for introducing content sections in administrative interfaces, dashboard panels, or content management systems where a brief explanation of the section's purpose is beneficial for user context.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <p className="mt-1 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
      </p>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / Card with avatar and stats

Component summary: This component is a responsive page heading card that combines user profile information with key statistics in a visually organized layout. It features a two-section design: an upper section containing a user's avatar, name, role, and profile link, and a lower stats section that displays numerical metrics (like vacation days) in a grid that adapts from a stacked layout on mobile to a three-column layout on larger screens. The component uses Tailwind's responsive utilities (sm: prefixes) to create a mobile-first design that elegantly transitions from a centered, stacked layout on small screens to a more horizontal, space-efficient layout on larger displays, making it particularly suitable for dashboard headers or profile overview sections in administrative interfaces.
*/
const user = {
  name: 'Rebecca Nicholas',
  role: 'Product Designer',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 id="profile-overview-title" className="sr-only">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="shrink-0">
              <img alt="" src={user.imageUrl} className="mx-auto h-20 w-20 rounded-full" />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
              <p className="text-sm font-medium text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View profile
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
            <span className="text-gray-900">{stat.value}</span> <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With actions and breadcrumbs on dark

Component summary: This is a responsive page heading component designed for dark-themed interfaces, featuring a breadcrumb navigation system and action buttons. The component intelligently switches between a simple "Back" button on mobile devices and a full breadcrumb trail on larger screens (using sm: breakpoint), while maintaining a clean hierarchy with the page title "Back End Developer" and two action buttons ("Edit" and "Publish"). The design implements a sophisticated layout pattern where the heading and buttons stack vertically on mobile but align horizontally on medium-sized screens and above, making it particularly suitable for admin interfaces or content management systems where context and actions need to be readily available.
*/
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <a href="#" className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
            <ChevronLeftIcon aria-hidden="true" className="-ml-1 mr-1 h-5 w-5 shrink-0 text-gray-500" />
            Back
          </a>
        </nav>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-200">
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-500" />
                <a href="#" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">
                  Engineering
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-500" />
                <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">
                  Back End Developer
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
        <div className="mt-4 flex shrink-0 md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With actions and breadcrumbs

Component summary: This is a responsive page header component that combines breadcrumb navigation with action buttons, designed for application interfaces. On mobile devices, it displays a simple "Back" link, while on larger screens it shows a full breadcrumb trail, followed by a page title and action buttons ("Edit" and "Publish"). The component demonstrates sophisticated responsive design patterns, using Tailwind's `sm:` and `md:` breakpoint modifiers to adjust the layout and visibility of elements across different screen sizes, making it particularly suitable for admin interfaces or content management systems where hierarchical navigation and quick actions are needed.
*/
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon aria-hidden="true" className="-ml-1 mr-1 h-5 w-5 shrink-0 text-gray-400" />
            Back
          </a>
        </nav>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Engineering
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Back End Developer
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
        <div className="mt-4 flex shrink-0 md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With actions on dark

Component summary: This is a dark-themed page header component designed for administrative or dashboard interfaces, featuring a main heading with action buttons aligned to the right. The component uses a responsive layout that stacks vertically on mobile and aligns horizontally on medium-sized screens and up, utilizing Tailwind's `md:flex` utilities for the layout transformation. It includes two action buttons ("Edit" and "Publish") with distinct styling - a subtle white/transparent button and a more prominent indigo-colored primary action button - making it particularly suitable for content management interfaces or wherever page-level actions need to be prominently displayed alongside a title.
*/
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Publish
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With actions

Component summary: This is a responsive page heading component that combines a main title with action buttons in a flexible layout. The component uses Tailwind's responsive utilities to stack elements vertically on mobile and align them horizontally on medium-sized screens and up (md:flex), featuring a prominent heading ("Back End Developer") alongside "Edit" and "Publish" action buttons. The design implements a common pattern for administrative interfaces or content management systems where users need both visual hierarchy through the heading and quick access to primary actions, with the primary "Publish" button styled in indigo and a secondary "Edit" button with a more subtle, outlined appearance.
*/
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Publish
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With avatar and actions

Component summary: This is a responsive page heading component designed for application interfaces that display user profiles or candidate information with associated actions. The component features a horizontal layout with a circular avatar image on the left, user details (name and application information) in the center, and action buttons ("Disqualify" and "Advance to offer") on the right, using Tailwind's responsive modifiers to adapt from a stacked mobile layout to an aligned horizontal layout on larger screens. The implementation includes thoughtful details like a subtle inner shadow on the avatar image and carefully managed spacing to maintain visual balance, making it particularly suitable for applicant tracking systems, user management interfaces, or any context where user profile information needs to be displayed with primary actions.
*/
export default function Example() {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="shrink-0">
          <div className="relative">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              className="h-16 w-16 rounded-full"
            />
            <span aria-hidden="true" className="absolute inset-0 rounded-full shadow-inner" />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
          <p className="text-sm font-medium text-gray-500">
            Applied for{' '}
            <a href="#" className="text-gray-900">
              Front End Developer
            </a>{' '}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Disqualify
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Advance to offer
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With banner image

Component summary: This is a sophisticated page header component featuring a user profile layout with a banner image and profile photo design commonly seen in professional networking or employee directory interfaces. The component implements a responsive layout that includes a full-width banner image, an overlapping circular profile avatar with a white ring border, and action buttons (Message and Call) that adapt their positioning based on screen size. The design notably uses negative margins (-mt-12, -mt-16) to create an overlapping effect between the banner and profile image, while employing a responsive grid system that adjusts the header's layout and content visibility across different breakpoints (sm, md, lg) for optimal viewing on various devices.
*/
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export default function Example() {
  return (
    <div>
      <div>
        <img alt="" src={profile.backgroundImage} className="h-32 w-full object-cover lg:h-48" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img alt="" src={profile.avatar} className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With filters and action

Component summary: This is a responsive page heading component designed for financial or administrative interfaces that combines a title, time-period filters, and an action button in a single horizontal layout. The component features a "Cashflow" heading, three time-period filter options ("Last 7 days", "Last 30 days", "All-time") that responsively stack on mobile devices, and a prominent "New invoice" action button with an icon. The implementation uses Tailwind's responsive breakpoints (sm/lg) to handle layout changes, with the filters moving below the heading on mobile while maintaining a clean horizontal arrangement on larger screens, making it particularly suitable for dashboard headers or financial reporting interfaces.
*/
import { PlusSmallIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base/7 font-semibold text-gray-900">Cashflow</h1>
        <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
          <a href="#" className="text-indigo-600">
            Last 7 days
          </a>
          <a href="#" className="text-gray-700">
            Last 30 days
          </a>
          <a href="#" className="text-gray-700">
            All-time
          </a>
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusSmallIcon aria-hidden="true" className="-ml-1.5 h-5 w-5" />
          New invoice
        </a>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With logo, meta and actions

Component summary: This component is a responsive page header designed for displaying invoice details with company branding and action buttons. It features a clean layout with a company logo, invoice metadata (number and company name), and a set of action buttons (Copy URL, Edit, Send) that intelligently transform into a mobile-friendly dropdown menu on smaller screens using @headlessui/react's Menu component. The component employs sophisticated responsive design patterns with different button visibility for mobile/desktop (sm:hidden/sm:block) and includes visual polish like hover states, focus rings, and a subtle shadow on the primary action button, making it particularly suitable for business applications, admin interfaces, or document management systems.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-between gap-x-8 lg:mx-0">
        <div className="flex items-center gap-x-6">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
            className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
          />
          <h1>
            <div className="text-sm/6 text-gray-500">
              Invoice <span className="text-gray-700">#00011</span>
            </div>
            <div className="mt-1 text-base font-semibold text-gray-900">Tuple, Inc</div>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <button type="button" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
            Copy URL
          </button>
          <a href="#" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
            Edit
          </a>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </a>

          <Menu as="div" className="relative sm:hidden">
            <MenuButton className="-m-3 block p-3">
              <span className="sr-only">More</span>
              <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <button
                  type="button"
                  className="block w-full px-3 py-1 text-left text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                >
                  Copy URL
                </button>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                >
                  Edit
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With meta, actions, and breadcrumbs on dark

Component summary: This is a sophisticated page header component designed for a dark-themed application interface, specifically tailored for displaying job posting details with interactive controls. The component features a hierarchical layout with breadcrumb navigation at the top, a prominent title ("Back End Developer"), and key metadata displayed as icon-text pairs (job type, location, salary, and deadline), followed by a row of action buttons. What makes this component particularly well-structured is its responsive design pattern - on mobile devices, the secondary actions ("Edit" and "View") collapse into a dropdown menu while maintaining the primary "Publish" action, all while preserving the component's dark theme styling and interactive hover states.
*/
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-500" />
                <a href="#" className="ml-4 text-sm font-medium text-gray-300 hover:text-white">
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-2 text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute left-0 z-10 -ml-1 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With meta, actions, and breadcrumbs

Component summary: This is a comprehensive page heading component designed for job listing or content management interfaces, featuring a hierarchical breadcrumb navigation, detailed metadata display, and action buttons. The component combines a main title ("Back End Developer") with contextual information like job type, location, salary, and deadline, all organized using HeroIcons and a responsive flex layout that adapts between mobile and desktop views. The action buttons section includes "Edit," "View," and "Publish" options that collapse into a mobile-friendly dropdown menu using Headless UI's Menu component, demonstrating a responsive design pattern that maintains functionality across different screen sizes.
*/
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Jobs
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                <a href="#" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Engineering
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-2 text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            View
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With meta and actions on dark

Component summary: This is a responsive page heading component designed for displaying job posting details with action buttons on a dark background. The component features a two-column layout that includes a primary content area with a job title, key metadata (employment type, location, salary, and deadline) displayed with icons, and a secondary area containing action buttons (Edit, View, Publish). The component implements a responsive design pattern where the action buttons collapse into a dropdown menu on mobile screens using Headless UI's Menu component, while maintaining full button visibility on larger screens.

The use of flex utilities, responsive breakpoints (sm: and lg:), and the thoughtful organization of metadata items makes this component particularly suitable for administrative interfaces or job posting platforms where both information display and action accessibility are crucial. The dark theme implementation, combined with hover states and semantic HTML, provides both aesthetic appeal and good usability.
*/
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-500" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute left-0 z-10 -ml-1 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / page-headings / With meta and actions

Component summary: This is a responsive page heading component designed for displaying job listing details with associated metadata and action buttons. The component features a two-column layout at larger screens that includes a primary heading ("Back End Developer") with four metadata items (employment type, location, salary, and deadline) using icons from Heroicons, alongside a collection of action buttons (Edit, View, and Publish). At mobile breakpoints, it intelligently collapses the secondary actions into a "More" dropdown menu using Headless UI's Menu component, while maintaining a clean and organized interface.

The component demonstrates sophisticated responsive design patterns, with `sm:` and `lg:` breakpoint utilities controlling the layout flow, and makes effective use of Tailwind's spacing, typography, and color utilities to create a polished, professional appearance. This would be particularly useful in administrative interfaces or job posting platforms where users need to quickly access key information and perform common actions on a record or listing.
*/
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            Edit
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            View
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
            Publish
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / Simple

Component summary: This is a minimalist section heading component designed for clear content organization in application interfaces. It features a simple heading with a subtle bottom border, making it ideal for separating different sections of content while maintaining a clean, professional appearance. This component would be particularly useful in dashboard layouts, list views, or any interface where you need lightweight visual hierarchy without heavy styling.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With action

Component summary: This is a responsive section header component that combines a heading with an action button, commonly used at the top of content sections or dashboard panels. The component features a clean layout that stacks vertically on mobile and transforms into a horizontally aligned, space-between arrangement on larger screens (sm: breakpoint and above), with a subtle bottom border for visual separation. It's particularly well-suited for administrative interfaces or content management systems where users need to both view a section title and take primary actions, such as the provided example of managing job postings with a "Create new job" button.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create new job
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With actions and tabs

Component summary: This is a responsive section heading component that combines a title, action buttons, and a tabbed navigation system. The component features a "Candidates" heading with "Share" and "Create" action buttons aligned to the right, followed by a horizontal tab navigation that transforms into a dropdown select menu on mobile devices. It's particularly well-suited for admin interfaces or application dashboards where content needs to be organized into different categories while maintaining quick access to primary actions.

The component demonstrates thoughtful responsive design patterns, using `md:` breakpoints for the header layout and `sm:` breakpoints for the tabs, with a mobile-first approach that switches between a select dropdown (small screens) and horizontal tabs (larger screens). The implementation includes interactive states for tabs with bottom borders and color transitions, making it both functionally robust and visually polished.
*/
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
  { name: 'Applied', href: '#', current: false },
  { name: 'Phone Screening', href: '#', current: false },
  { name: 'Interview', href: '#', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Hired', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h3 className="text-base font-semibold text-gray-900">Candidates</h3>
        <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Share
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            defaultValue={tabs.find((tab) => tab.current).name}
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With actions

Component summary: This is a responsive section header component that combines a title with action buttons, designed for administrative or dashboard interfaces. The component features a "Job Postings" heading alongside two action buttons ("Share" and "Create") that stack vertically on mobile and align horizontally on larger screens using Tailwind's responsive `sm:` breakpoint utilities. The design follows a common pattern for UI sections that require both identification and primary actions, with the primary "Create" button styled in indigo with hover and focus states, while the secondary "Share" button uses a more subtle white background with a border ring.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Share
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With badge and dropdown

Component summary: This is a section heading component that combines a title, subtitle, status badge, and an actions dropdown menu in a responsive layout. The component uses a two-column structure that adapts between mobile and desktop views, featuring a job title ("Full-Stack Developer") with team information, alongside a green "Open" status badge and a three-dot menu trigger that reveals additional actions (Edit, Duplicate, Archive). The implementation leverages Headless UI's Menu components for accessibility-friendly dropdown functionality, with smooth transitions and hover states, making it particularly suitable for application headers where you need to display key information with quick access to related actions.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-base font-semibold text-gray-900">
            Full-Stack Developer
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">Checkout and Payments Team</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Open
          </span>
          <Menu as="div" className="relative ml-3 inline-block text-left">
            <div>
              <MenuButton className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <span>Edit</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <span>Duplicate</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    className="flex w-full justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    <span>Archive</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With description

Component summary: This is a simple yet effective section heading component that combines a header with a descriptive text block, designed for introducing content sections in a web application. The component features a semibold heading ("Job Postings") followed by a lighter-weight descriptive paragraph, all contained within a bottom-bordered container that provides visual separation from subsequent content. This pattern is particularly useful for dashboard sections, content introductions, or feature explanations where you need to provide both a title and supporting context while maintaining a clean, professional appearance.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
        Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With inline tabs

Component summary: This component implements a section heading with inline tab navigation, commonly used for content filtering or view switching in application interfaces. The design features a main heading ("Issues") alongside horizontally aligned tabs that use a bottom border and color changes to indicate the active state, with the tabs responsively adjusting from a stacked layout on mobile to an inline arrangement on larger screens (sm: breakpoint and above). The component employs a clean, minimal aesthetic with subtle hover states and active indicators, making it particularly suitable for dashboard interfaces, content management systems, or any application where content needs to be organized into distinct, switchable categories.
*/
const tabs = [
  { name: 'Open', href: '#', current: true },
  { name: 'Closed', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="border-b border-gray-200">
      <div className="sm:flex sm:items-baseline">
        <h3 className="text-base font-semibold text-gray-900">Issues</h3>
        <div className="mt-4 sm:ml-10 sm:mt-0">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With input group

Component summary: This is a responsive section heading component that combines a title with an advanced search input group, designed for filtering and sorting content like job postings. The component features a two-part layout with a heading ("Job Postings") on the left and a search functionality on the right that includes a search input with an icon prefix and a sort button with dropdown functionality. Notable for its responsive design, it includes separate search inputs for mobile and desktop views (`sm:hidden` and `sm:block`), and uses Tailwind's form styling plugin for consistent input styling across devices.

The component would be particularly useful in data-heavy administrative interfaces or listing pages where users need to both search through content and sort results, combining these controls efficiently in the header area without sacrificing usability on any device size.
*/
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:ml-4 sm:mt-0">
        <label htmlFor="mobile-search-candidate" className="sr-only">
          Search
        </label>
        <label htmlFor="desktop-search-candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative grow focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="mobile-search-candidate"
              name="mobile-search-candidate"
              type="text"
              placeholder="Search"
              className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
            />
            <input
              id="desktop-search-candidate"
              name="desktop-search-candidate"
              type="text"
              placeholder="Search candidates"
              className="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm/6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
            Sort
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With label

Component summary: This is a simple yet refined section heading component that combines a primary heading with a supplementary label in a flex layout. The component uses a horizontal flex container with baseline alignment to display a main heading ("Job Postings") alongside a secondary descriptive label ("in Engineering"), separated by subtle spacing and distinguished through different text sizes and colors. It's particularly useful for organizing content sections in administrative interfaces or dashboard layouts where context-specific headings need additional categorization or scope information, such as filtering views or hierarchical navigation structures.
*/
export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
        <h3 className="ml-2 mt-2 text-base font-semibold text-gray-900">Job Postings</h3>
        <p className="ml-2 mt-1 truncate text-sm text-gray-500">in Engineering</p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / headings / section-headings / With tabs

Component summary: This is a responsive section heading component with integrated tabbed navigation, specifically designed for workflow or process tracking (like a hiring pipeline in this example). The component features a sophisticated mobile-first design that transforms between a dropdown select menu on small screens and a horizontal tab bar on larger screens, with tabs visually connected to content via a bottom border. The implementation includes thoughtful UI details like hover states, active tab indicators using indigo coloring, and proper ARIA attributes for accessibility, making it particularly suitable for multi-step processes or content organization in administrative interfaces.

Would you like me to elaborate on any particular aspect of this component?
*/
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
  { name: 'Applied', href: '#', current: false },
  { name: 'Phone Screening', href: '#', current: false },
  { name: 'Interview', href: '#', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Hired', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold text-gray-900">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            defaultValue={tabs.find((tab) => tab.current).name}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Basic card

Component summary: This is a minimal, reusable card component that provides a clean container layout with rounded corners, white background, and subtle shadow effects for visual depth. The component employs a simple but effective structure with responsive padding (different for mobile and desktop via the sm: breakpoint) and overflow protection, making it ideal for displaying contained content blocks like summaries, statistics, or form sections in dashboard interfaces or content-heavy applications.
*/
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card, edge-to-edge on mobile

Component summary: This is a responsive card component designed to provide edge-to-edge content display on mobile devices while maintaining rounded corners and padding on larger screens (sm breakpoint and above). The component uses a shadow effect and white background for visual depth, with an overflow-hidden property to ensure content stays contained within the card's boundaries. It's particularly useful for presenting content blocks in mobile-first layouts where you want content to stretch fully across smaller screens but appear more contained and card-like on desktop views.
*/
export default function Example() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card with footer

Component summary: This is a clean, structured card component featuring a main content area and a distinct footer section, separated by a subtle gray divider. The component uses a combination of rounded corners, shadow effects, and white background to create a floating card appearance, while employing responsive padding that adjusts between mobile (`px-4 py-5`) and desktop (`sm:p-6`) viewports. This pattern is particularly useful for displaying contained content that requires a clear separation between primary content and supplementary footer information, making it ideal for things like product cards, notification panels, or summary blocks in dashboard interfaces.
*/
export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card with gray body

Component summary: This is a clean, minimalist card component featuring a two-section layout with a white header and a contrasting gray body section. The component utilizes a rounded-lg border, subtle shadow, and carefully crafted padding that adapts between mobile and desktop viewports (with sm: breakpoint modifiers). This pattern is particularly useful for displaying content that needs visual hierarchy and separation, such as dashboard widgets, form sections, or content previews where the header contains metadata or titles and the body contains the main content.
*/
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card with gray footer

Component summary: This is a clean, structured card component featuring a main content area and a distinct footer section with a subtle gray background. The component uses a classic two-section layout pattern with rounded corners, subtle shadow, and overflow protection, making it ideal for displaying contained content with supporting actions or metadata in the footer area. The responsive padding adjustments (`sm:` breakpoint modifiers) ensure the component maintains proper spacing across different screen sizes, making it particularly useful for dashboard interfaces, content previews, or information panels where visual hierarchy between main content and footer information needs to be maintained.
*/
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card with header and footer

Component summary: This component implements a structured card layout with distinct header, body, and footer sections, each separated by subtle gray dividers and wrapped in a rounded white container with a shadow effect. The card uses responsive padding that adjusts between mobile and desktop viewports (switching at the 'sm' breakpoint), with deliberately smaller vertical padding in the footer section for better visual hierarchy. This pattern is particularly useful for displaying grouped content that needs clear sectioning, such as pricing cards, user profiles, or content previews where the header might contain a title, the body the main content, and the footer actions or secondary information.
*/
export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}