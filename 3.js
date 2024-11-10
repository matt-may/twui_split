/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / input-groups / Input with pill shape

Component summary: This component implements a modern, pill-shaped input field with an associated label, utilizing Tailwind's form plugin for enhanced styling. The input features a distinctive rounded-full border radius creating a capsule/pill appearance, along with a sophisticated state management system using ring utilities for focus states and shadows. This design pattern is particularly useful in contemporary user interfaces where softer, more approachable form elements are desired, commonly seen in search bars, newsletter signups, or any form where a less conventional, friendlier input aesthetic is appropriate.
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
    <div>
      <label htmlFor="name" className="ml-px block pl-4 text-sm/6 font-medium text-gray-900">
        Name
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / input-groups / Input with trailing icon

Component summary: This component is a form input field with a trailing question mark icon that demonstrates a common pattern for text inputs with decorative or informational icons. The input features a clean, modern design with a rounded border, subtle shadow, and focus state using Tailwind's ring utilities, while the trailing icon (QuestionMarkCircleIcon) is positioned absolutely within the input container and remains non-interactive. This pattern would be particularly useful for form fields that need additional context or help indicators, such as account numbers, social security numbers, or any input where users might need quick visual access to help or information.
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
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm/6 font-medium text-gray-900">
        Account number
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id="account-number"
          name="account-number"
          type="text"
          placeholder="000-00-0000"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / input-groups / Input with validation error

Component summary: This is an accessible email input component designed to display validation error states with clear visual feedback. The component combines a standard input field with error-specific styling (red borders, text, and icons) and proper ARIA attributes (aria-invalid, aria-describedby) to ensure both visual and screen-reader accessibility. It's particularly useful in forms where immediate validation feedback is needed, featuring a right-aligned exclamation icon, error message below the input, and focused styling that maintains the error state theme through the use of Tailwind's ring utilities.
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
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          defaultValue="adamwathan"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid="true"
          aria-describedby="email-error"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
        </div>
      </div>
      <p id="email-error" className="mt-2 text-sm text-red-600">
        Not a valid email address.
      </p>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / input-groups / Inputs with inset labels and shared borders

Component summary: This component implements a visually connected pair of form inputs with inset labels and shared borders, creating a cohesive input group effect. The design uses negative margin spacing (-space-y-px) and rounded corners only on the outer edges to make multiple inputs appear as a single unified control, while maintaining distinct focus states through z-index manipulation. It's particularly useful in dense forms where you want to group related inputs (like personal information or contact details) while maintaining a clean, modern appearance with floating labels and subtle interactive states managed through ring utilities and focus states.
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
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="name" className="block text-xs font-medium text-gray-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
        />
      </div>
      <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
          Job Title
        </label>
        <input
          id="job-title"
          name="job-title"
          type="text"
          placeholder="Head of Tomfoolery"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
        />
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / input-groups / Inputs with shared borders

Component summary: This component implements a sophisticated form input group design featuring seamlessly connected form fields with shared borders, commonly used for collecting payment and billing information. The component utilizes a two-fieldset structure - one for card details (number, expiration, CVC) and another for billing address (country, postal code) - where adjacent inputs appear visually connected through clever use of rounded corners and negative spacing (`-space-y-px`). The design employs Tailwind's ring utilities for borders and focus states, creating a cohesive and polished appearance while maintaining clear visual hierarchy and input grouping, making it particularly suitable for checkout flows and payment forms where related information needs to be collected in a visually organized manner.
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
    <div>
      <fieldset>
        <legend className="block text-sm/6 font-medium text-gray-900">Card Details</legend>
        <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
          <div>
            <label htmlFor="card-number" className="sr-only">
              Card number
            </label>
            <input
              id="card-number"
              name="card-number"
              type="text"
              placeholder="Card number"
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
          <div className="flex -space-x-px">
            <div className="w-1/2 min-w-0 flex-1">
              <label htmlFor="card-expiration-date" className="sr-only">
                Expiration date
              </label>
              <input
                id="card-expiration-date"
                name="card-expiration-date"
                type="text"
                placeholder="MM / YY"
                className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="min-w-0 flex-1">
              <label htmlFor="card-cvc" className="sr-only">
                CVC
              </label>
              <input
                id="card-cvc"
                name="card-cvc"
                type="text"
                placeholder="CVC"
                className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm/6 font-medium text-gray-900">Billing address</legend>
        <div className="mt-2 -space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal-code" className="sr-only">
              ZIP / Postal code
            </label>
            <input
              id="postal-code"
              name="postal-code"
              type="text"
              placeholder="ZIP / Postal code"
              autoComplete="postal-code"
              className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Cards

Component summary: This is a stylized radio group component implemented as selectable cards, designed for choosing between different mailing list options. The component uses Headless UI's RadioGroup and Radio components, combining them with Tailwind CSS to create interactive, card-style radio inputs that display mailing list information (title, description, and user count) in a responsive grid layout that adapts from single-column on mobile to three columns on larger screens. The implementation features sophisticated interactive states including focus and selection indicators, with a checkmark icon that appears when a card is selected, making it particularly useful for scenarios where users need to make a single selection from multiple detailed options in a visually appealing way.
*/
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        {mailingLists.map((mailingList) => (
          <Radio
            key={mailingList.id}
            value={mailingList}
            aria-label={mailingList.title}
            aria-description={`${mailingList.description} to ${mailingList.users}`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">{mailingList.title}</span>
                <span className="mt-1 flex items-center text-sm text-gray-500">{mailingList.description}</span>
                <span className="mt-6 text-sm font-medium text-gray-900">{mailingList.users}</span>
              </span>
            </span>
            <CheckCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Color picker

Component summary: This component implements a visually appealing color picker using radio buttons styled as circular color swatches, built with Headless UI's RadioGroup component and Tailwind CSS. The component presents five color options (Pink, Purple, Blue, Green, Yellow) as interactive circular buttons with a clean, modern design that includes focus states, selection rings, and proper accessibility attributes. It's particularly useful in interfaces where users need to select a color preference, such as theme customization, label creation, or category assignment, while maintaining a minimal and intuitive user experience.

The component demonstrates smart use of state management with React's useState hook, proper ARIA labeling, and dynamic styling through Tailwind's utility classes combined with data attributes for interactive states.
*/
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const options = [
  { name: 'Pink', color: 'text-pink-500' },
  { name: 'Purple', color: 'text-purple-500' },
  { name: 'Blue', color: 'text-blue-500' },
  { name: 'Green', color: 'text-green-500' },
  { name: 'Yellow', color: 'text-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(options[1])

  return (
    <fieldset>
      <legend className="block text-sm/6 font-semibold text-gray-900">Choose a label color</legend>
      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-6 flex items-center space-x-3">
        {options.map((option) => (
          <Radio
            key={option.name}
            value={option}
            aria-label={option.name}
            className={classNames(
              option.color,
              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
            )}
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-current"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / List with description

Component summary: This is a radio group component designed for selecting between different service plans or configurations, with each option featuring a title and detailed description. The component uses a clean vertical layout where each radio option is accompanied by two levels of text - a bold plan name and a lighter-colored description below it, making it ideal for scenarios where users need to choose between detailed technical specifications or service tiers. The implementation leverages Tailwind's form plugin for styling radio inputs and includes proper accessibility attributes like aria-describedby to connect the radio inputs with their respective descriptions.
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
const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={`${plan.id}-description`}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>
              <p id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / List with descriptions in panel

Component summary: This is a sophisticated radio group component designed for privacy settings selection, featuring a vertically stacked panel layout where each option includes both a title and descriptive text. The component utilizes Headless UI's RadioGroup and Radio components, combined with Tailwind CSS for styling, to create an accessible and visually polished interface where options have distinct states (default, checked, focused) with smooth rounded corners and indigo accent colors. This pattern would be particularly useful in settings panels, configuration wizards, or any form interface where users need to make a single selection from multiple options that require detailed explanations to make an informed choice.
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
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(settings[0])

  return (
    <fieldset aria-label="Privacy setting">
      <RadioGroup value={selected} onChange={setSelected} className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <Radio
            key={setting.name}
            value={setting}
            aria-label={setting.name}
            aria-description={setting.description}
            className={classNames(
              settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
              settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
              'group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50',
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="ml-3 flex flex-col">
              <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                {setting.name}
              </span>
              <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                {setting.description}
              </span>
            </span>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / List with inline description

Component summary: This component implements a custom radio group for selecting hosting or infrastructure plans, featuring an accessible and visually structured layout with inline descriptions. Each radio option includes a heading-style label and a detailed description arranged horizontally, using Tailwind's flexbox utilities for alignment and spacing. The component is particularly useful in configuration or checkout flows where users need to choose between different service tiers or plans, with the description providing immediate context for each option directly inline with the selection control.
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
const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default function Example() {
  return (
    <fieldset aria-label="Plan">
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                defaultChecked={plan.id === 'small'}
                id={plan.id}
                name="plan"
                type="radio"
                aria-describedby={`${plan.id}-description`}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label htmlFor={plan.id} className="font-medium text-gray-900">
                {plan.name}
              </label>{' '}
              <span id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / List with radio on right

Component summary: This component implements a vertically stacked radio group designed for account selection, specifically styled for financial transfer interfaces. The component features a list of banking/credit accounts where each option displays an account name and masked account number, with radio buttons positioned on the right side of each row, making it particularly suitable for mobile-friendly financial applications or payment flows. The implementation uses semantic HTML with `fieldset` and proper ARIA attributes for accessibility, while leveraging Tailwind's form plugin for consistent styling of radio inputs and including subtle visual separators between options using `divide-y` utility classes.
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
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Transfer Funds</legend>
      <p className="mt-1 text-sm/6 text-gray-600">Transfer your balance to your bank account.</p>
      <div className="mt-2.5 divide-y divide-gray-200">
        {accounts.map((account, accountIdx) => (
          <div key={accountIdx} className="relative flex items-start pb-4 pt-3.5">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={`account-${account.id}`} className="font-medium text-gray-900">
                {account.name}
              </label>
              <p id={`account-${account.id}-description`} className="text-gray-500">
                {account.description}
              </p>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={account.id === 'checking'}
                id={`account-${account.id}`}
                name="account"
                type="radio"
                aria-describedby={`account-${account.id}-description`}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Simple inline list

Component summary: This is a clean, responsive radio group component designed for selecting notification preferences, implementing a horizontal inline layout on larger screens and stacking vertically on mobile. The component uses a fieldset/legend structure for proper form accessibility and renders a list of radio inputs with labels, where each option (email, SMS, or push notification) is styled with consistent spacing and Tailwind's form plugin styles. It's particularly useful in settings panels, onboarding flows, or preference forms where users need to make a single selection from a small set of straightforward options.
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
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-600">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Simple list with radio on right

Component summary: This component implements a vertical radio group for selecting side dishes, featuring a clean and minimal list-style layout with radio buttons aligned to the right of each option. The design uses borders and dividers to create distinct separation between options, while maintaining a consistent vertical rhythm through padding and spacing classes. It's particularly useful in food ordering interfaces, configuration forms, or any scenario where users need to make a single selection from a list of options while maintaining a clear visual hierarchy and ample touch targets.

The component leverages Tailwind's form plugin for styled radio inputs and implements accessible form practices with proper fieldset/legend structure and label associations. Each option is part of a flex container that ensures proper alignment between the label text and radio input, making it both visually appealing and touch-friendly on mobile devices.
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
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Select a side</legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={`side-${side.id}`} className="select-none font-medium text-gray-900">
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                defaultChecked={side.id === null}
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Simple list

Component summary: This component implements a clean and accessible radio group for notification preferences, featuring a vertical list of notification method options (email, SMS, and push notifications). The component uses a semantic fieldset/legend structure with clear typography hierarchy and spacing, while leveraging Tailwind's form plugin for consistent radio button styling in indigo accent colors. It's particularly useful in settings or onboarding flows where users need to select their preferred communication channel, with email being pre-selected as the default option.
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
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-gray-900">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-600">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Simple table

Component summary: This component is a sophisticated radio group implementation designed for displaying pricing plan options, built using Headless UI's RadioGroup component and Tailwind CSS. It presents three pricing tiers (Startup, Business, and Enterprise) in a vertically stacked layout that transforms into a three-column grid on larger screens, with each option featuring a plan name, monthly/yearly pricing, and usage limits. The component includes thoughtful interactive states with indigo-themed highlighting for the selected plan, accessibility features through ARIA labels, and a clean visual hierarchy that makes it particularly suitable for pricing pages or subscription flow interfaces.
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
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  { name: 'Startup', priceMonthly: '$29', priceYearly: '$290', limit: 'Up to 5 active job postings' },
  { name: 'Business', priceMonthly: '$99', priceYearly: '$990', limit: 'Up to 25 active job postings' },
  { name: 'Enterprise', priceMonthly: '$249', priceYearly: '$2490', limit: 'Unlimited active job postings' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <fieldset aria-label="Pricing plans">
      <RadioGroup value={selected} onChange={setSelected} className="relative -space-y-px rounded-md bg-white">
        {plans.map((plan, planIdx) => (
          <Radio
            key={plan.name}
            value={plan}
            aria-label={plan.name}
            aria-description={`${plan.priceMonthly} per month, ${plan.priceYearly} per year, ${plan.limit}`}
            className={classNames(
              planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
              planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
              'group relative flex cursor-pointer flex-col border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50 md:grid md:grid-cols-3 md:pl-4 md:pr-6',
            )}
          >
            <span className="flex items-center text-sm">
              <span
                aria-hidden="true"
                className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 font-medium text-gray-900 group-data-[checked]:text-indigo-900">{plan.name}</span>
            </span>
            <span className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
              <span className="font-medium text-gray-900 group-data-[checked]:text-indigo-900">
                {plan.priceMonthly} / mo
              </span>{' '}
              <span className="text-gray-500 group-data-[checked]:text-indigo-700">({plan.priceYearly} / yr)</span>
            </span>
            <span className="ml-6 pl-1 text-sm text-gray-500 group-data-[checked]:text-indigo-700 md:ml-0 md:pl-0 md:text-right">
              {plan.limit}
            </span>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Small cards

Component summary: This is a responsive radio group component designed for selecting memory/RAM configurations, implemented using Headless UI's RadioGroup and styled with Tailwind CSS. The component displays options as small, interactive cards in a 3-column grid on mobile (expanding to 6 columns on larger screens) with sophisticated state handling that includes hover effects, focus states, and disabled states for out-of-stock options. It's particularly useful for product configuration interfaces where users need to make a single selection from multiple options, featuring a clean design with clear visual feedback through color changes (indigo for selected state) and accessibility support through proper ARIA labels and focus management.
*/
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mem, setMem] = useState(memoryOptions[2])

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-gray-900">RAM</div>
        <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">
          See performance specs
        </a>
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {memoryOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            disabled={!option.inStock}
            className={classNames(
              option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
              'flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset',
            )}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / radio-groups / Stacked cards

Component summary: This is a stylized radio group component implemented as stacked cards, specifically designed for displaying and selecting service plans or pricing tiers. The component uses Headless UI's RadioGroup and Radio components to create selectable cards that display detailed plan information (name, RAM, CPUs, disk space, and price) in a responsive layout that adapts between mobile and desktop views. Each card features sophisticated interactive states including focus and selection indicators, with accessibility considerations built-in through proper ARIA labels and descriptions, making it particularly suitable for subscription plan selection interfaces or resource configuration forms.
*/
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <fieldset aria-label="Server size">
      <RadioGroup value={selected} onChange={setSelected} className="space-y-4">
        {plans.map((plan) => (
          <Radio
            key={plan.name}
            value={plan}
            aria-label={plan.name}
            aria-description={`${plan.ram}, ${plan.cpus}, ${plan.disk}, ${plan.price} per month`}
            className="group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600 sm:flex sm:justify-between"
          >
            <span className="flex items-center">
              <span className="flex flex-col text-sm">
                <span className="font-medium text-gray-900">{plan.name}</span>
                <span className="text-gray-500">
                  <span className="block sm:inline">
                    {plan.ram} / {plan.cpus}
                  </span>{' '}
                  <span aria-hidden="true" className="hidden sm:mx-1 sm:inline">
                    &middot;
                  </span>{' '}
                  <span className="block sm:inline">{plan.disk}</span>
                </span>
              </span>
            </span>
            <span className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
              <span className="font-medium text-gray-900">{plan.price}</span>
              <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Branded with supported text

Component summary: This is a sophisticated select menu component that combines a branded button with a dropdown list, specifically designed for status or publishing state selection. The component features a split-button interface where the main section displays the current selection with an icon and label, while a separate dropdown trigger button allows users to change the selection. The dropdown options include both titles and supporting descriptive text, with visual feedback through hover/focus states and checkmark indicators, making it particularly useful for scenarios where users need additional context about each option (like content publishing workflows or status management interfaces).

The component utilizes Headless UI's Listbox components for accessibility and interaction handling, while implementing a polished visual design through Tailwind CSS classes that includes subtle animations, shadows, and a cohesive indigo-based color scheme. The use of transition effects, careful spacing, and hierarchical typography makes this component both functionally robust and visually refined.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const publishingOptions = [
  { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { title: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

export default function Example() {
  const [selected, setSelected] = useState(publishingOptions[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="sr-only">Change published status</Label>
      <div className="relative">
        <div className="inline-flex divide-x divide-indigo-700 rounded-md shadow-sm">
          <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white shadow-sm">
            <CheckIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            <p className="text-sm font-semibold">{selected.title}</p>
          </div>
          <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-white" />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default select-none p-4 text-sm text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal group-data-[selected]:font-semibold">{option.title}</p>
                  <span className="text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-2 text-gray-500 group-data-[focus]:text-indigo-200">{option.description}</p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Custom with avatar

Component summary: This is a sophisticated select menu component built with Headless UI that features user avatars alongside names, creating a rich user selection interface. The component combines a button trigger that displays the currently selected user (with their avatar) and a dropdown panel that presents a scrollable list of users, each with their avatar, name, and a checkmark indicator for the selected item. It's particularly useful in application interfaces where user assignment or selection is needed with visual identification, such as task assignment systems, user delegation interfaces, or team member selection workflows.

The component leverages Headless UI's Listbox components for accessibility and state management, while using Tailwind CSS for styling, including hover states, focus rings, and smooth transitions. The implementation includes thoughtful details like truncation for long names, responsive sizing, and clear visual feedback for interaction states, making it both functional and polished.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6">
          <span className="flex items-center">
            <img alt="" src={selected.avatar} className="h-5 w-5 shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <img alt="" src={person.avatar} className="h-5 w-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Custom with check on left

Component summary: This is a custom select menu component built using Headless UI's Listbox primitives, featuring a distinctive left-aligned checkmark indicator for the selected option. The component implements a sophisticated dropdown interface with a button trigger showing the current selection and an expandable options list, styled with Tailwind CSS for a polished, modern appearance. It's particularly useful in forms or interfaces where you need a more customized selection experience than native select elements provide, with visual feedback through checkmarks, hover states, and focus indicators, making it ideal for user assignments or similar selection scenarios where visual clarity of the selected item is important.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

              <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Custom with status indicator

Component summary: This is a sophisticated select menu component that displays a list of people with their online/offline status indicated by colored dots (green for online, gray for offline). The component uses Headless UI's Listbox components for accessibility and combines them with Tailwind CSS for styling, featuring a clean button interface that expands into a scrollable dropdown with interactive hover and focus states. It's particularly useful in applications that need to show user availability status alongside names, such as team collaboration tools, chat applications, or task assignment interfaces where knowing someone's online status is important for decision-making.

The component demonstrates advanced interaction patterns with smooth transitions, clear visual feedback (including a checkmark for the selected item), and proper ARIA labels for accessibility. Notable features include a maximum height with overflow scrolling, focus rings for keyboard navigation, and a responsive design that works well across different screen sizes.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper', online: true },
  { id: 2, name: 'Arlene Mccoy', online: false },
  { id: 3, name: 'Devon Webb', online: false },
  { id: 4, name: 'Tom Cook', online: true },
  { id: 5, name: 'Tanya Fox', online: false },
  { id: 6, name: 'Hellen Schmidt', online: true },
  { id: 7, name: 'Caroline Schultz', online: true },
  { id: 8, name: 'Mason Heaney', online: false },
  { id: 9, name: 'Claudie Smitham', online: true },
  { id: 10, name: 'Emil Schaefer', online: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
          <span className="flex items-center">
            <span
              aria-label={selected.online ? 'Online' : 'Offline'}
              className={classNames(
                selected.online ? 'bg-green-400' : 'bg-gray-200',
                'inline-block h-2 w-2 shrink-0 rounded-full',
              )}
            />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span
                  aria-hidden="true"
                  className={classNames(
                    person.online ? 'bg-green-400' : 'bg-gray-200',
                    'inline-block h-2 w-2 shrink-0 rounded-full',
                  )}
                />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                  <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Simple custom

Component summary: This is a custom select menu component built using Headless UI's Listbox components, offering a polished and accessible dropdown interface for user selection. The component features a clean design with a labeled button that displays the currently selected item, and when clicked, reveals a scrollable list of options with visual feedback including hover states, focus indicators, and a checkmark for the selected item. It's particularly useful in forms or interfaces where you need a more sophisticated alternative to the native HTML select element, especially when you want to maintain consistent styling across different browsers while ensuring accessibility through ARIA attributes and keyboard navigation.

The component implements several thoughtful UI patterns including truncation for long text, a chevron indicator for the dropdown state, and smooth transitions for opening/closing animations, making it ideal for situations where you need a professional-looking selection interface that handles a moderate amount of options elegantly.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / Simple native

Component summary: This is a clean, native HTML select menu component styled with Tailwind CSS, featuring a minimalist design with modern form control aesthetics. The component includes a labeled dropdown for location selection, enhanced with thoughtful styling details like rounded corners, border rings, and focus states using Tailwind's ring utilities. It's particularly useful for straightforward form interfaces where you need a simple, accessible country/location selector that maintains a consistent design language with other form elements while leveraging the browser's native select functionality for optimal compatibility and performance.
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
    <div>
      <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
        Location
      </label>
      <select
        id="location"
        name="location"
        defaultValue="Canada"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / select-menus / With secondary text

Component summary: This is an enhanced select menu component built with Headless UI that displays both primary (name) and secondary (username) text for each option. The component features a clean, modern design with a button-style trigger that displays the selected value, and a dropdown panel that appears with a smooth transition effect, showing a scrollable list of user options with check marks indicating the current selection. It's particularly useful in user assignment interfaces or anywhere you need to display multi-field selection options, such as in admin panels, user management systems, or task assignment forms where showing additional context (like usernames) alongside primary information helps users make more informed selections.
*/
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Wade Cooper', username: '@wadecooper' },
  { name: 'Arlene Mccoy', username: '@arlenemccoy' },
  { name: 'Devon Webb', username: '@devonwebb' },
  { name: 'Tom Cook', username: '@tomcook' },
  { name: 'Tanya Fox', username: '@tanyafox' },
  { name: 'Hellen Schmidt', username: '@hellenschmidt' },
  { name: 'Caroline Schultz', username: '@carolineschultz' },
  { name: 'Mason Heaney', username: '@masonheaney' },
  { name: 'Claudie Smitham', username: '@claudiesmitham' },
  { name: 'Emil Schaefer', username: '@emilschaefer' },
]

export default function Example() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6">
          <span className="inline-flex w-full truncate">
            <span className="truncate">{selected.name}</span>
            <span className="ml-2 truncate text-gray-500">{selected.username}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.username}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex">
                <span className="truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>
                <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                  {person.username}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / sign-in-forms / Simple card

Component summary: This is a comprehensive sign-in form component featuring a clean, card-based design with both traditional email/password authentication and social login options (Google and GitHub). The component utilizes a centered, single-column layout with responsive breakpoints (sm, lg) and implements modern form styling using Tailwind's form plugin, including focused states, hover effects, and consistent spacing patterns. It's particularly useful for applications requiring a professional authentication interface, featuring thoughtful UX elements like a "Remember me" checkbox, "Forgot password" link, and a clear visual separation between traditional and social login options through a centered divider.
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
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm/6 text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm/6">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm/6 font-medium">
                  <span className="bg-white px-6 text-gray-900">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm/6 font-semibold">Google</span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-[#24292F]">
                    <path
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm/6 font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / sign-in-forms / Simple no labels

Component summary: This is a minimalist, responsive sign-in form component that emphasizes clean design through the use of placeholder text instead of traditional form labels. The component features a vertically stacked layout with connected input fields (email and password) that share borders and rounded corners, creating a cohesive input group effect using shadow and ring utilities. It includes essential authentication elements like a company logo, remember-me checkbox, forgot password link, and a call-to-action for new users, all centered within a full-height container using Tailwind's flex utilities and responsive spacing classes.

The component's structure makes it particularly suitable for applications where space efficiency and visual simplicity are priorities, while still maintaining all necessary functionality of a modern authentication form. The careful attention to interactive states (hover, focus) and accessibility features (sr-only labels, required fields) makes it both user-friendly and production-ready.
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
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  autoComplete="email"
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm/6 text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm/6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14-day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / sign-in-forms / Simple on dark

Component summary: This is a modern, dark-themed sign-in form component designed for a sophisticated user authentication interface. The component features a centered, single-column layout with a company logo, email and password inputs styled with subtle white/transparent backgrounds (bg-white/5), and indigo accent colors for interactive elements. The component implements responsive design patterns with specific breakpoints for small devices (sm:) and includes thoughtful UX details like a "Forgot password" link, form validation attributes, and a call-to-action for new users to start a free trial.

This component would be particularly useful for applications requiring a professional, modern authentication interface that needs to maintain strong visual hierarchy and accessibility in dark mode, such as developer tools, admin dashboards, or SaaS platforms.
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
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / sign-in-forms / Simple

Component summary: This is a clean and modern sign-in form component implemented with Tailwind CSS and React, featuring a centered, single-column layout with responsive design considerations (particularly for small and larger screens via sm: breakpoint utilities). The component includes a company logo, email and password input fields with proper form validation attributes, a "Forgot password?" link, and a prominent sign-in button, all styled with a consistent indigo color scheme and carefully crafted spacing using Tailwind's utility classes. It's particularly useful for applications requiring a straightforward authentication interface, with the added benefit of being fully responsive and incorporating accessibility features like proper labeling and focus states, making it an ideal choice for both web and mobile-friendly applications.
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
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / sign-in-forms / Split screen

Component summary: This is a sophisticated split-screen sign-in form component that combines a functional authentication interface with an aesthetic full-height image background. The component uses a two-column layout where the left side contains a comprehensive sign-in form with email/password fields, social authentication options (Google and GitHub), and various helper links, while the right side displays a full-height image that's hidden on mobile and revealed on larger screens (lg: breakpoint and above). The design implements modern UI patterns including responsive behavior, well-structured form controls with proper labeling and validation attributes, and a clean visual hierarchy enhanced by Tailwind's utility classes for spacing, typography, and interactive states.

This component would be particularly useful for applications requiring an elevated authentication experience, especially those targeting professional or creative audiences where visual impact is important alongside functionality. The split-screen approach effectively balances form functionality with visual engagement, making it ideal for SaaS platforms, creative tools, or professional services websites.
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
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-10 w-auto"
              />
              <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm/6 text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Start a 14 day free trial
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-3 block text-sm/6 text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm/6">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm/6 font-medium">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm/6 font-semibold">Google</span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-[#24292F]">
                      <path
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm/6 font-semibold">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / textareas / Simple

Component summary: This is a minimal, clean textarea form component implementing Tailwind's forms plugin styling, featuring a labeled text input area with modern styling conventions. The component combines a semantic label element with a textarea field that includes responsive padding, border styling using ring utilities, and an indigo-colored focus state. It's particularly useful for collecting longer-form text input in forms where simple, accessible textarea functionality is needed, such as comment sections, feedback forms, or message composition interfaces.
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
    <div>
      <label htmlFor="comment" className="block text-sm/6 font-medium text-gray-900">
        Add your comment
      </label>
      <div className="mt-2">
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          defaultValue={''}
        />
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / textareas / With avatar and actions

Component summary: This is a sophisticated comment/textarea component that combines a text input area with rich interactive elements, including an avatar, file attachment button, mood selector, and post button. The component features a modern design with a listbox-based mood selector that displays various emotional states through colored icons, making it particularly suitable for social media platforms, commenting systems, or any application requiring expressive user input. The layout is thoughtfully structured with a flex-based design that positions the avatar to the left and the main input area to the right, while the bottom toolbar provides easy access to attachments and mood selection, along with a prominent "Post" button for submission.
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
'use client'

import { useState } from 'react'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(moods[5])

  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Add your comment..."
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              defaultValue={''}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div aria-hidden="true" className="py-2">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flex items-center">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">Your mood</Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <FaceSmileIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
                            <span className="sr-only">Add your mood</span>
                          </span>
                        ) : (
                          <span>
                            <span
                              className={classNames(
                                selected.bgColor,
                                'flex h-8 w-8 items-center justify-center rounded-full',
                              )}
                            >
                              <selected.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-white" />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div
                              className={classNames(
                                mood.bgColor,
                                'flex h-8 w-8 items-center justify-center rounded-full',
                              )}
                            >
                              <mood.icon
                                aria-hidden="true"
                                className={classNames(mood.iconColor, 'h-5 w-5 shrink-0')}
                              />
                            </div>
                            <span className="ml-3 block truncate font-medium">{mood.name}</span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / textareas / With preview button

Component summary: This component is a sophisticated textarea implementation featuring a tabbed interface that toggles between "Write" and "Preview" modes, commonly used for comment or content creation forms with markdown/preview functionality. It utilizes @headlessui/react's TabGroup components for the tabbed interface and includes a toolbar with quick-action buttons (link, code, mention) that are conditionally displayed only in the writing mode. The component follows a modern design pattern with a clean, minimalist aesthetic, featuring a responsive textarea, hover states, and a prominent "Post" button, making it ideal for blog platforms, comment systems, or any content management interface where users need to preview their formatted text before submission.
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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <form action="#">
      <TabGroup>
        <TabList className="group flex items-center">
          <Tab className="rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[selected]:bg-gray-100 data-[selected]:text-gray-900 data-[selected]:hover:bg-gray-200">
            Write
          </Tab>
          <Tab className="ml-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[selected]:bg-gray-100 data-[selected]:text-gray-900 data-[selected]:hover:bg-gray-200">
            Preview
          </Tab>

          {/* These buttons are here simply as examples and don't actually do anything. */}
          <div className="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex">
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Insert link</span>
                <LinkIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Insert code</span>
                <CodeBracketIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Mention someone</span>
                <AtSymbolIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </TabList>
        <TabPanels className="mt-2">
          <TabPanel className="-m-0.5 rounded-lg p-0.5">
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <div>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                placeholder="Add your comment..."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                defaultValue={''}
              />
            </div>
          </TabPanel>
          <TabPanel className="-m-0.5 rounded-lg p-0.5">
            <div className="border-b">
              <div className="mx-px mt-px px-3 pb-12 pt-2 text-sm text-gray-800">Preview content will render here.</div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </form>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / textareas / With title and pill actions

Component summary: This is a sophisticated textarea form component that combines a title input and description textarea with interactive action pills for assigning users, adding labels, and setting due dates. The component uses Headless UI's Listbox components to create dropdown selectors styled as pill buttons, with smooth transitions and hover states, making it ideal for task creation or note-taking interfaces in project management applications. The layout features a clean design with a main input area bordered by a toolbar containing the action pills and a footer section with file attachment and submit options, all carefully styled using Tailwind's utility classes for consistent spacing and visual hierarchy.
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
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Wade Cooper',
    value: 'wade-cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More items...
]
const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]
const dueDates = [
  { name: 'No due date', value: null },
  { name: 'Today', value: 'today' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [assigned, setAssigned] = useState(assignees[0])
  const [labelled, setLabelled] = useState(labels[0])
  const [dated, setDated] = useState(dueDates[0])

  return (
    <form action="#" className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Write a description..."
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
          defaultValue={''}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <Listbox as="div" value={assigned} onChange={setAssigned} className="shrink-0">
            <Label className="sr-only">Assign</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                {assigned.value === null ? (
                  <UserCircleIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-300 sm:-ml-1" />
                ) : (
                  <img alt="" src={assigned.avatar} className="h-5 w-5 shrink-0 rounded-full" />
                )}

                <span
                  className={classNames(
                    assigned.value === null ? '' : 'text-gray-900',
                    'hidden truncate sm:ml-2 sm:block',
                  )}
                >
                  {assigned.value === null ? 'Assign' : assigned.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {assignees.map((assignee) => (
                  <ListboxOption
                    key={assignee.value}
                    value={assignee}
                    className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      {assignee.avatar ? (
                        <img alt="" src={assignee.avatar} className="h-5 w-5 shrink-0 rounded-full" />
                      ) : (
                        <UserCircleIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                      )}

                      <span className="ml-3 block truncate font-medium">{assignee.name}</span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          <Listbox as="div" value={labelled} onChange={setLabelled} className="shrink-0">
            <Label className="sr-only">Add a label</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <TagIcon
                  aria-hidden="true"
                  className={classNames(
                    labelled.value === null ? 'text-gray-300' : 'text-gray-500',
                    'h-5 w-5 shrink-0 sm:-ml-1',
                  )}
                />
                <span
                  className={classNames(
                    labelled.value === null ? '' : 'text-gray-900',
                    'hidden truncate sm:ml-2 sm:block',
                  )}
                >
                  {labelled.value === null ? 'Label' : labelled.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {labels.map((label) => (
                  <ListboxOption
                    key={label.value}
                    value={label}
                    className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium">{label.name}</span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          <Listbox as="div" value={dated} onChange={setDated} className="shrink-0">
            <Label className="sr-only">Add a due date</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <CalendarIcon
                  aria-hidden="true"
                  className={classNames(
                    dated.value === null ? 'text-gray-300' : 'text-gray-500',
                    'h-5 w-5 shrink-0 sm:-ml-1',
                  )}
                />
                <span
                  className={classNames(
                    dated.value === null ? '' : 'text-gray-900',
                    'hidden truncate sm:ml-2 sm:block',
                  )}
                >
                  {dated.value === null ? 'Due date' : dated.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {dueDates.map((dueDate) => (
                  <ListboxOption
                    key={dueDate.value}
                    value={dueDate}
                    className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium">{dueDate.name}</span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon aria-hidden="true" className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
            </button>
          </div>
          <div className="shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / textareas / With underline and actions

Component summary: This is a sophisticated comment/textarea component that combines a clean underlined textarea with rich interaction features, including a mood selector and file attachment option. The component features a user avatar, an expandable textarea with a subtle bottom border focus state, and a bottom toolbar containing both a file attachment button and an innovative mood selector implemented using Headless UI's Listbox component. It's particularly well-suited for social media applications, commenting systems, or any interface where users need to input text while expressing emotional context through mood selection.

The mood selector is especially noteworthy, offering a dropdown menu with colorful mood icons and smooth transitions, while the component maintains a professional appearance with its indigo-themed submit button and clean layout structure. The component's attention to accessibility (with proper aria labels and screen reader support) and interactive states makes it suitable for production-ready applications.
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
'use client'

import { useState } from 'react'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(moods[5])

  return (
    <div className="flex items-start space-x-4">
      <div className="shrink-0">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#">
          <div className="border-b border-gray-200 focus-within:border-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Add your comment..."
              className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm/6"
              defaultValue={''}
            />
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon aria-hidden="true" className="h-6 w-6" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flow-root">
                <Listbox value={selected} onChange={setSelected}>
                  <Label className="sr-only">Your mood</Label>
                  <div className="relative">
                    <ListboxButton className="relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <span className="flex items-center justify-center">
                        {selected.value === null ? (
                          <span>
                            <FaceSmileIconOutline aria-hidden="true" className="h-6 w-6 shrink-0" />
                            <span className="sr-only">Add your mood</span>
                          </span>
                        ) : (
                          <span>
                            <span
                              className={classNames(
                                selected.bgColor,
                                'flex h-8 w-8 items-center justify-center rounded-full',
                              )}
                            >
                              <selected.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-white" />
                            </span>
                            <span className="sr-only">{selected.name}</span>
                          </span>
                        )}
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      {moods.map((mood) => (
                        <ListboxOption
                          key={mood.value}
                          value={mood}
                          className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div
                              className={classNames(
                                mood.bgColor,
                                'flex h-8 w-8 items-center justify-center rounded-full',
                              )}
                            >
                              <mood.icon
                                aria-hidden="true"
                                className={classNames(mood.iconColor, 'h-5 w-5 shrink-0')}
                              />
                            </div>
                            <span className="ml-3 block truncate font-medium">{mood.name}</span>
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / toggles / Short toggle

Component summary: This is a compact toggle switch component built using Headless UI's Switch component and Tailwind CSS, featuring a modern, iOS-style design with a sliding animation. The component implements an accessible toggle control that transitions between two states using a sliding circular knob, with visual feedback through color changes (gray when off, indigo when on) and smooth position transitions. It's particularly useful in settings panels, preference forms, or any interface where users need to make binary choices, and includes proper accessibility features like focus states and screen reader support through `sr-only` labels.
*/
'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
    </Switch>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / toggles / Simple toggle

Component summary: This is a modern, accessible toggle switch component built using @headlessui/react and Tailwind CSS, implementing a binary on/off control pattern. The component features a sliding animation effect with a white circular knob that moves horizontally within a rounded track, transitioning from gray (off) to indigo (on) states, while maintaining proper accessibility through ARIA attributes and keyboard focus states. This type of toggle would be particularly useful for boolean settings in user preferences, feature flags, or any interface where users need to quickly switch between two mutually exclusive states with clear visual feedback.
*/
'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
    </Switch>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / toggles / Toggle with icon

Component summary: This is a sophisticated toggle switch component built using @headlessui/react that includes animated icon transitions between an "X" (off) and checkmark (on) state. The component features a sliding circular button within a rounded pill-shaped container that changes from gray to indigo when activated, with smooth transitions for both the background color and the sliding motion. This type of toggle would be particularly useful in settings panels, configuration forms, or any interface where users need clear visual feedback for binary choices, with the added icons providing enhanced visual confirmation of the current state.

The component demonstrates advanced UI patterns including accessibility features (sr-only labels), focus states with ring indicators, and complex transition animations using Tailwind's group-data attributes and opacity transitions. It's a great example of combining functional interactivity with polished micro-interactions.
*/
'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
    >
      <span className="sr-only">Use setting</span>
      <span className="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
        >
          <svg fill="none" viewBox="0 0 12 12" className="h-3 w-3 text-gray-400">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
        >
          <svg fill="currentColor" viewBox="0 0 12 12" className="h-3 w-3 text-indigo-600">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / forms / toggles / With left label and description

Component summary: This is a styled toggle switch component with an aligned left-side label and descriptive text, built using Headless UI's Switch component and Tailwind CSS. The component features a clean layout with a "Field" wrapper that uses flex positioning to place the label/description on the left and the interactive toggle switch on the right, making it ideal for settings panels, preference forms, or feature toggles in administrative interfaces. The toggle itself includes smooth transitions, focus states, and accessibility features through the use of Headless UI primitives, while maintaining a modern design with an indigo accent color when activated.
*/
'use client'

import { useState } from 'react'
import { Description, Field, Label, Switch } from '@headlessui/react'

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center justify-between">
      <span className="flex grow flex-col">
        <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
          Available to hire
        </Label>
        <Description as="span" className="text-sm text-gray-500">
          Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
        </Description>
      </span>
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
    </Field>
  )
}




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