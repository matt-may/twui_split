/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / button-groups / Basic

Component summary: This component implements a basic segmented button group control with three connected buttons ("Years," "Months," "Days") styled with a clean, modern appearance using Tailwind CSS. The buttons are visually joined together using negative margins (-ml-px) and selective border radius (rounded-l-md for the first button and rounded-r-md for the last), creating a unified control group with a subtle shadow and ring border treatment. This type of button group is particularly useful for toggling between related options or views in an application interface, such as time period selectors, filter controls, or navigation segments where only one option should be active at a time.
*/
export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Years
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Months
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Days
      </button>
    </span>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / button-groups / Icon only

Component summary: This is an icon-only button group component featuring two connected navigation buttons with chevron icons for "Previous" and "Next" actions. The component uses a clean, minimal design with rounded corners on the outer edges, subtle borders using ring utilities, and includes hover/focus states for better interactivity. It's particularly useful for pagination controls, slideshow navigation, or any interface where bidirectional navigation needs to be presented in a compact, icon-only format while maintaining accessibility through hidden screen reader text.
*/
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </span>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / button-groups / With checkbox and dropdown

Component summary: This is a composite button group component that combines a checkbox and dropdown select element in a unified, inline interface. The component features a checkbox on the left side contained within a rounded border, seamlessly connected to a dropdown menu on the right, all styled with a consistent gray border and white background. This pattern is particularly useful for bulk action interfaces, such as email clients or document management systems, where users need to both select items (via checkbox) and choose an action to perform on them (via dropdown) in a space-efficient and visually cohesive way.

The implementation uses Tailwind's form plugin for styling form elements and employs careful border radius management (`rounded-l-md` and `rounded-r-md`) to create a unified appearance between the two interactive elements. The component also includes proper accessibility features with screen reader labels (`sr-only`) and focus states for both the checkbox and dropdown elements.
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
export default function Example() {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <span className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2">
        <label htmlFor="select-all" className="sr-only">
          Select all
        </label>
        <input
          id="select-all"
          name="select-all"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </span>
      <label htmlFor="message-type" className="sr-only">
        Select message type
      </label>
      <select
        id="message-type"
        name="message-type"
        className="-ml-px block w-full rounded-l-none rounded-r-md border-0 bg-white py-1.5 pl-3 pr-9 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      >
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
    </span>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / button-groups / With dropdown

Component summary: This component implements a split button group with a primary action button and an accompanying dropdown menu, built using Headless UI's Menu components and Tailwind CSS. The main button ("Save changes") is paired with a dropdown trigger featuring a chevron icon, which reveals a floating menu of additional related actions - making it an excellent pattern for presenting a primary action alongside secondary options. The component includes thoughtful interactive states with hover and focus styles, smooth transitions for the dropdown menu, and a clean visual hierarchy using shadows and borders, making it particularly useful in toolbars, forms, or any interface where you need to provide multiple related actions while emphasizing a primary option.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const items = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]

export default function Example() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Save changes
      </button>
      <Menu as="div" className="relative -ml-px block">
        <MenuButton className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {items.map((item) => (
              <MenuItem key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / button-groups / With stat

Component summary: This is a split button group component that combines a primary action button ("Bookmark") with an associated stat counter ("12k") in a unified, joined design. The component uses Tailwind's isolation and negative margin utilities to create a seamless horizontal button group where the left button features an icon from the Heroicons library, while the right button displays a numerical stat. This pattern is particularly useful for social media-style interactions where you want to show both an action button and its associated metric (like bookmarks count, likes, or shares) in a cohesive, space-efficient manner.
*/
import { BookmarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <BookmarkIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        12k
      </button>
    </span>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Buttons with leading icon

Component summary: This component demonstrates a set of button variants that combine text labels with leading icons using HeroIcons, specifically showcasing three different size options (small, medium, and large) with consistent styling. Each button features the same indigo color scheme, rounded corners, and hover/focus states, while utilizing Tailwind's flex layout system to properly align the icon and text with specified gaps. This pattern is particularly useful in applications where visual hierarchy and clear action indicators are needed, such as in form submissions, confirmation dialogs, or any interface where icon-enhanced buttons can improve usability and visual appeal.
*/
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Buttons with trailing icon

Component summary: This component presents a set of three button variants that combine text with a trailing CheckCircle icon, each scaled to different sizes while maintaining consistent styling. The buttons feature a modern design with an indigo color scheme, rounded corners, and interactive states (hover and focus-visible), while utilizing Tailwind's gap utilities to maintain proper spacing between the text and icon. This pattern is particularly useful in interfaces where visual confirmation or action completion needs to be indicated, such as form submissions, configuration saves, or any action where success feedback is beneficial through the trailing checkmark icon.
*/
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <CheckCircleIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" />
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Circular buttons

Component summary: This component presents a set of circular action buttons implemented with consistent styling but varying sizes through different padding values (p-1, p-1.5, and p-2). The buttons feature a clean, modern design with an indigo background, white icon, hover states, and focus indicators, making them perfect for primary actions like "add" or "create" functionality in applications. The component demonstrates a common UI pattern for floating action buttons (FABs) or icon-only controls, typically used in interfaces where space efficiency and visual hierarchy are important.
*/
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Primary buttons on dark

Component summary: This component presents a collection of primary button variants optimized for dark backgrounds, featuring different sizes and padding configurations while maintaining a consistent indigo color scheme. Each button is styled with Tailwind's utility classes to create a modern, interactive design with rounded corners, subtle shadows, and clear hover/focus states. The component demonstrates a systematic approach to button scaling, ranging from extra small (text-xs) to regular sizes (text-sm), making it particularly useful when building interfaces that require hierarchical button importance or size consistency across different contexts in a dark-themed application.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-indigo-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Primary buttons

Component summary: This component showcases a collection of primary button variants with consistent styling but different size options, implemented using Tailwind CSS. The buttons feature an indigo-600 background color, white text, subtle shadow effects, and interactive states (hover and focus) with all buttons sharing the same design language while varying in padding and text size to create a hierarchical scale from extra small to large. This component would be particularly useful when implementing a design system that requires consistent primary action buttons across different contexts, such as in forms, headers, or call-to-action sections where visual hierarchy through size variation is important.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Rounded primary buttons

Component summary: This component presents a set of rounded primary buttons in five different sizes, all maintaining a consistent indigo color scheme and pill-shaped (rounded-full) design. The buttons feature a sophisticated interactive state system with hover effects (lighter indigo), subtle shadows, and focus-visible outlines for accessibility, while progressively scaling from extra small (px-2.5 py-1) to large (px-4 py-2.5) sizes. This collection would be particularly useful in applications requiring a cohesive button hierarchy while maintaining a modern, friendly appearance - perfect for primary actions across different contexts where the rounded aesthetic matches the design system.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Rounded secondary buttons

Component summary: This component showcases a collection of secondary button styles with fully rounded corners (pill-shaped) in various sizes, implemented using Tailwind CSS. The buttons feature a consistent white background, gray border ring, and subtle shadow design pattern, with each variant differing in padding and text size - ranging from extra small (xs) to standard text sizes - making them suitable for different space constraints and visual hierarchies. These secondary buttons would be particularly useful in interfaces where you need softer, less prominent call-to-actions that still maintain high visibility and clickability, such as filter controls, secondary actions in forms, or auxiliary navigation options.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Secondary buttons on dark

Component summary: This component showcases a collection of secondary button styles specifically designed for dark backgrounds, featuring semi-transparent white backgrounds (bg-white/10) with hover states that increase opacity (bg-white/20). The implementation presents five size variations of the same button design, ranging from extra small to large, each maintaining consistent styling while adjusting padding, border radius, and text size proportionally. These buttons would be particularly useful in dark-themed interfaces where you need subtle, ghost-like buttons that maintain visibility without competing visually with primary actions.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Secondary buttons

Component summary: This component showcases a set of secondary button variants that follow a subtle, minimalist design pattern with white backgrounds, gray borders (implemented via ring utilities), and hover states. The buttons are presented in five different size variations, ranging from extra small (px-2 py-1) to large (px-3.5 py-2.5), while maintaining consistent styling features like rounded corners, subtle shadows, and inset rings. These secondary buttons would be particularly useful in interfaces where you need less prominent call-to-action elements that still maintain a clear clickable appearance, such as in form controls, dialog actions, or secondary navigation options.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / buttons / Soft buttons

Component summary: This component showcases a collection of "soft" styled buttons implemented with a subtle, low-contrast design using Tailwind CSS classes. The buttons feature a light indigo background (bg-indigo-50), indigo text, gentle shadows, and hover states, creating a softer, more subdued alternative to traditional solid-colored buttons. The implementation includes five size variants ranging from extra small to large, each maintaining consistent styling while adjusting padding, font size, and border radius proportionally - making them suitable for different UI contexts where a gentler visual hierarchy is desired.
*/
export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Button text
      </button>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / dropdowns / Simple

Component summary: This is a simple dropdown menu component built using Headless UI's Menu components and styled with Tailwind CSS. The component features a button trigger with a chevron icon that reveals a floating menu panel containing navigation links and actions, complete with hover states and smooth transitions for opening/closing animations. It's particularly useful for secondary navigation, user account menus, or action menus where you need a clean, accessible dropdown interface that follows common UI patterns while maintaining a minimal footprint in the layout.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / dropdowns / With dividers

Component summary: This is a polished dropdown menu component built with Headless UI and Tailwind CSS, featuring visually separated menu sections using subtle dividers. The component implements an "Options" button that triggers a floating menu panel with multiple grouped actions (like Edit, Archive, Share, Delete), where each group is visually separated by a light gray divider, enhancing visual hierarchy and organization. It includes smooth enter/leave transitions, focus states for accessibility, and a clean visual design with shadows and rounded corners, making it particularly useful for application interfaces that need to present multiple related but distinct groups of actions in a compact, organized manner.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / dropdowns / With icons

Component summary: This is a sophisticated dropdown menu component built using Headless UI's Menu components and enhanced with Hero Icons, featuring grouped menu items separated by dividers and accompanied by descriptive icons. The component implements a clean, hierarchical menu structure with four distinct sections containing related actions (edit/duplicate, archive/move, share/favorites, and delete), each menu item displaying an icon and label with hover/focus states for improved interaction feedback. This pattern is particularly useful for providing contextual actions or commands in applications where you need to organize multiple related options in a space-efficient manner, commonly seen in document management interfaces, content manipulation tools, or administrative panels.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Edit
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <ArchiveBoxIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Archive
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <UserPlusIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Share
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <HeartIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500" />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <TrashIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500" />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / dropdowns / With minimal menu icon

Component summary: This is a minimal, vertically-oriented dropdown menu component built using Headless UI's Menu components and styled with Tailwind CSS. The component features a subtle three-dot menu trigger button (using the EllipsisVerticalIcon) that reveals a floating panel with menu items, complete with smooth entrance/exit transitions and focus states. It's particularly useful for secondary navigation, settings menus, or action menus where space is limited and a clean, minimal interface is desired - commonly seen in application headers, card actions, or table row actions.

The implementation includes accessibility features (screen reader support), keyboard navigation, and interactive states (hover, focus) with a carefully crafted visual hierarchy using shadows, borders, and transitions for a polished user experience.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / dropdowns / With simple header

Component summary: This is a dropdown menu component built using Headless UI's Menu components, featuring a simple header section that displays user information. The component implements a three-section dropdown with smooth transitions and hover states, including a user info header, a main navigation section with common account-related links, and a separated sign-out button at the bottom. It's particularly useful for user account navigation menus or application settings dropdowns where you need to combine user context information with navigation options, following a clean and organized hierarchical structure with visual separators between logical groups of actions.
*/
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="px-4 py-3">
          <p className="text-sm">Signed in as</p>
          <p className="truncate text-sm font-medium text-gray-900">tom@example.com</p>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              License
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With accent border

Component summary: This is a warning/alert component featuring a left accent border design pattern, commonly used to display important messages or notifications in web applications. The component combines a yellow color scheme with an exclamation triangle icon and message text, structured using a flex layout with the icon positioned to the left of the content. It's particularly useful for drawing attention to account-related notifications or system warnings while maintaining a clean, non-intrusive design through its subtle yellow background and border accent, with the added functionality of an embedded action link for user response.
*/
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You have no credits left.{' '}
            <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
              Upgrade your account to add more credits.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With actions

Component summary: This is an interactive success alert component featuring a green color scheme with actionable buttons. The component combines a CheckCircleIcon, descriptive text content, and two action buttons ("View status" and "Dismiss"), all wrapped in a rounded container with consistent padding and spacing. It's particularly useful for confirming successful operations like form submissions or completed orders, where you want to provide users with both confirmation feedback and follow-up actions in an aesthetically pleasing and accessible manner.
*/
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Order completed</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                View status
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With description

Component summary: This is a warning/attention alert component featuring a warm yellow color scheme and a structured layout with an exclamation triangle icon and descriptive text. The component uses a flex-based layout to position the warning icon alongside a content section containing both a header ("Attention needed") and descriptive message body. It's particularly useful for displaying non-critical warnings, important notices, or attention-requiring messages in applications where you want to alert users without causing alarm or interrupting their workflow.
*/
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
              totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With dismiss button

Component summary: This is a success alert component featuring a dismissible notification design with a green color scheme for positive feedback. The component combines a check circle icon, success message text, and a dismiss button in a flexbox layout, making it ideal for confirming successful actions like file uploads or form submissions. The implementation includes accessible elements (with aria attributes and screen reader text) and interactive states for the dismiss button (hover and focus styles), making it both visually appealing and accessibility-compliant.
*/
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With link on right

Component summary: This is an informational alert component with a clean, modern design that features a left-aligned icon, primary message text, and a right-aligned "Details" link that becomes especially prominent on larger screens. The component uses a blue color scheme with subtle backgrounds and accessible text colors, making it ideal for displaying system notifications, updates, or important information that requires optional user action. The responsive layout smartly adapts from a stacked arrangement on mobile devices to a horizontal spread on medium screens (md breakpoint), utilizing Flexbox for optimal spacing and alignment.
*/
import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <InformationCircleIcon aria-hidden="true" className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / alerts / With list

Component summary: This is an error alert component that displays validation or submission errors with a structured list format, combining a warning icon with detailed error messages. The component uses a red color scheme with varying shades (red-50 background, red-400 icon, red-800/700 text) to establish a clear error context, while the layout employs a flex container with a left-aligned icon and a bulleted list of specific error messages. This pattern is particularly useful for form validation feedback, submission errors, or any scenario where you need to communicate multiple related error messages to users in a clear, organized manner.
*/
import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>Your password must be at least 8 characters</li>
              <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / Simple

Component summary: This is a Simple Empty State component designed to provide user feedback when no projects or content are available in an application. The component features a centered layout with a folder icon SVG, descriptive text explaining the empty state, and a prominent "New Project" call-to-action button styled in indigo with a plus icon. It's particularly useful in dashboard interfaces, project management systems, or content management areas where users need clear guidance on how to begin adding content when none exists yet.
*/
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="text-center">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
      >
        <path
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          New Project
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / With dashed border

Component summary: This is an empty state button component designed as a call-to-action for creating a new database, featuring a distinctive dashed border layout with hover and focus states. The component combines a centered SVG database icon with descriptive text, using a large clickable surface area (full-width block) and visual feedback through border color changes on hover and a focus ring. This pattern is particularly useful in dashboard interfaces or admin panels where you want to provide an intuitive and visually appealing way to initiate database creation or similar resource-creation workflows.
*/
export default function Example() {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
      >
        <path
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="mt-2 block text-sm font-semibold text-gray-900">Create a new database</span>
    </button>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / With recommendations grid

Component summary: This component is an advanced empty state UI pattern specifically designed for team member management, combining an invitation form with recommended user suggestions. The component features a clean layout with three main sections: an illustrated header with descriptive text, an email input form with role selection, and a grid of recommended team members displayed as interactive cards with profile images and role information. It's particularly useful for onboarding flows or team management interfaces where you want to provide users with both manual input options and quick-add suggestions, while maintaining a welcoming and helpful empty state that guides users through the member addition process.

The implementation showcases sophisticated interactive elements including a combined input/select field with focus states, and responsive design that adapts from a single column to a two-column grid on larger screens. The recommended users section uses rounded profile cards with hover and focus states, making the component both functional and visually engaging.
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
import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-400"
          >
            <path
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-2 text-base font-semibold text-gray-900">Add team members</h2>
          <p className="mt-1 text-sm text-gray-500">You haven’t added any team members to your project yet.</p>
        </div>
        <form action="#" className="mt-6 sm:flex sm:items-center">
          <label htmlFor="emails" className="sr-only">
            Email addresses
          </label>
          <div className="grid grid-cols-1 sm:flex-auto">
            <input
              id="emails"
              name="emails"
              type="text"
              placeholder="Enter an email"
              className="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
            />
            <div
              aria-hidden="true"
              className="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600"
            />
            <div className="col-start-2 row-start-1 flex items-center">
              <span aria-hidden="true" className="h-4 w-px flex-none bg-gray-200" />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              >
                <option>Can edit</option>
                <option>Can view</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:shrink-0">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send invite
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">Recommended team members</h3>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                  <span className="block shrink-0">
                    <img alt="" src={person.imageUrl} className="h-10 w-10 rounded-full" />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">{person.name}</span>
                    <span className="block truncate text-sm font-medium text-gray-500">{person.role}</span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center">
                  <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / With recommendations

Component summary: This component is an empty state interface specifically designed for team member management, combining an invitation form with recommended team members. The component features a clean, centered layout with an illustrative icon, explanatory text, an email input form for sending invites, and a list of previously added team members displayed with their profile images, names, and roles. It's particularly useful in collaborative applications or project management tools where users need an intuitive way to build their team, especially when starting from scratch, while leveraging existing connections through the recommendations section to streamline the invitation process.

The design follows a clear visual hierarchy using Tailwind's utility classes for spacing, typography, and interactive elements, with careful attention to hover states and focus rings for accessibility. The component's structure makes it both informative and actionable, combining empty state messaging with immediate solutions for users to take action.
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
import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-lg">
      <div>
        <div className="text-center">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-400"
          >
            <path
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-2 text-base font-semibold text-gray-900">Add team members</h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t added any team members to your project yet. As the owner of this project, you can manage team
            member permissions.
          </p>
        </div>
        <form action="#" className="mt-6 flex">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter an email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
          <button
            type="submit"
            className="ml-4 shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send invite
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">Team members previously added to projects</h3>
        <ul role="list" className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {people.map((person, personIdx) => (
            <li key={personIdx} className="flex items-center justify-between space-x-3 py-4">
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <div className="shrink-0">
                  <img alt="" src={person.imageUrl} className="h-10 w-10 rounded-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="truncate text-sm font-medium text-gray-500">{person.role}</p>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 text-sm/6 font-semibold text-gray-900"
                >
                  <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  Invite <span className="sr-only">{person.name}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / With starting points

Component summary: This is an empty state component that presents a grid of project templates as starting points for new users, featuring a visually engaging layout with colorful icons and descriptive text. The component uses a responsive grid layout (1 column on mobile, 2 columns on larger screens) to display various project types (List, Calendar, Gallery, etc.), each with a distinct colored background, icon from Heroicons, title, and witty description. The implementation includes hover states, focus states, and accessibility considerations through proper ARIA attributes, making it both functional and user-friendly for onboarding scenarios or empty project dashboards.
*/
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline'

const items = [
  {
    title: 'Create a List',
    description: 'Another to-do system you’ll try but eventually give up on.',
    icon: Bars4Icon,
    background: 'bg-pink-500',
  },
  {
    title: 'Create a Calendar',
    description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
    icon: CalendarIcon,
    background: 'bg-yellow-500',
  },
  {
    title: 'Create a Gallery',
    description: 'Great for mood boards and inspiration.',
    icon: PhotoIcon,
    background: 'bg-green-500',
  },
  {
    title: 'Create a Board',
    description: 'Track tasks in different stages of your project.',
    icon: ViewColumnsIcon,
    background: 'bg-blue-500',
  },
  {
    title: 'Create a Spreadsheet',
    description: 'Lots of numbers and things — good for nerds.',
    icon: TableCellsIcon,
    background: 'bg-indigo-500',
  },
  {
    title: 'Create a Timeline',
    description: 'Get a birds-eye-view of your procrastination.',
    icon: ClockIcon,
    background: 'bg-purple-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">Projects</h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a project yet. Get started by selecting a template or start from an empty project.
      </p>
      <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  'flex h-16 w-16 shrink-0 items-center justify-center rounded-lg',
                )}
              >
                <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / feedback / empty-states / With templates

Component summary: This is an empty state component that displays a project template selection interface, designed to help users initiate their first project. The component features a list of pre-defined templates, each with an associated colored icon, name, and description, presented in a clean, bordered layout with hover interactions and directional chevron indicators. It's particularly useful for onboarding flows or project creation interfaces where you want to guide users through their initial setup by offering them template-based starting points, while also including a fallback option to start from scratch via a linked text element at the bottom.

The component employs several thoughtful design patterns including:
- Consistent spacing and typography hierarchies
- Interactive elements with group hover states
- Accessible list structure with proper ARIA attributes
- Flexible icon system using HeroIcons
- Clear visual hierarchy with semibold headings and muted descriptive text
*/
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CalendarIcon, CommandLineIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

const items = [
  {
    name: 'Marketing Campaign',
    description: 'I think the kids call these memes these days.',
    href: '#',
    iconColor: 'bg-pink-500',
    icon: MegaphoneIcon,
  },
  {
    name: 'Engineering Project',
    description: 'Something really expensive that will ultimately get cancelled.',
    href: '#',
    iconColor: 'bg-purple-500',
    icon: CommandLineIcon,
  },
  {
    name: 'Event',
    description: 'Like a conference all about you that no one will care about.',
    href: '#',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-lg">
      <h2 className="text-base font-semibold text-gray-900">Create your first project</h2>
      <p className="mt-1 text-sm text-gray-500">Get started by selecting a template or start from an empty project.</p>
      <ul role="list" className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="group relative flex items-start space-x-3 py-4">
              <div className="shrink-0">
                <span
                  className={classNames(item.iconColor, 'inline-flex h-10 w-10 items-center justify-center rounded-lg')}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="shrink-0 self-center">
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Or start from an empty project
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / action-panels / Simple well

Component summary: The Simple Well component is a minimalist action panel designed for presenting a single call-to-action within a subtle gray container. It follows a clear hierarchical structure with a bold heading, explanatory text, and a prominent button, making it ideal for prompting users to take specific actions like upgrading services or contacting sales teams. The component uses a sophisticated yet understated design pattern with proper spacing, subtle shadows, and hover states, making it particularly effective for business-oriented interfaces where you need to highlight important actions without being visually overwhelming.
*/
export default function Example() {
  return (
    <div className="bg-gray-50 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Need more bandwidth?</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Contact sales
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / action-panels / Simple

Component summary: This is a clean, single-purpose action panel component designed for form-related actions or settings management. It features a hierarchical structure with a heading, descriptive text, and a prominent action button, all wrapped in a white container with subtle shadow and rounded corners on larger screens. The component would be particularly useful for subscription management interfaces, settings panels, or any scenario where you need to present a single, focused call-to-action with supporting context in a visually contained area.
*/
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Manage subscription</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
            nam.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Change plan
          </button>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / action-panels / With button at top right

Component summary: This is an action panel component designed for subscription management or similar administrative controls, featuring a clean two-column layout with descriptive content on the left and a prominent action button on the right. The component uses Tailwind's responsive design patterns (`sm:` prefixes) to stack the content vertically on mobile devices while maintaining a horizontal layout on larger screens. It's particularly useful for settings pages, subscription management interfaces, or any scenario where you need to present a user with information alongside a primary action button in a visually balanced and accessible way.
*/
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Manage subscription</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
                repudiandae nam.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / action-panels / With button on right

Component summary: This is a responsive action panel component designed for subscription management or similar administrative actions, featuring a clean layout with a heading, descriptive text, and a prominent action button aligned to the right. The component uses a card-like structure with a white background and subtle shadow, transitioning from a stacked layout on mobile to a horizontal split layout on larger screens (sm breakpoint and above) where the text and button are aligned in a row with space between them. This pattern would be particularly useful for settings pages, subscription management interfaces, or any scenario where you need to present a clear call-to-action alongside explanatory text in a contained, well-organized panel.
*/
export default function Example() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Manage subscription</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
              repudiandae nam.
            </p>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}