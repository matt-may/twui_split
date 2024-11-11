/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Card with header

Component summary: This is a minimalist card component featuring a two-section layout with a distinct header and body area, separated by a subtle gray divider. The component utilizes Tailwind's utility classes to create a clean, elevated appearance through rounded corners and a shadow effect, while implementing responsive padding that adjusts between mobile and desktop viewports (note the sm: breakpoint modifiers). It's particularly useful for displaying structured content in administrative interfaces, dashboard widgets, or any context where information needs to be visually compartmentalized with a clear hierarchical structure.
*/
export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Well, edge-to-edge on mobile

Component summary: This component implements a responsive "well" or content container that spans edge-to-edge on mobile devices while displaying as a rounded card with padding on larger screens. The component utilizes Tailwind's responsive prefixes (sm:) to transform its appearance across breakpoints, featuring a light gray background (bg-gray-50) and different padding configurations for mobile (px-4 py-5) versus desktop (sm:p-6) views. This pattern is particularly useful for creating content sections that maximize mobile screen real estate while maintaining a contained, card-like appearance on desktop displays, commonly used for forms, content panels, or information containers in responsive web applications.
*/
export default function Example() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Well on gray

Component summary: This is a minimal Well component designed to create a subtle, contained area on a gray background with rounded corners. The component uses a double-div pattern where the outer container provides the visual boundary (with `rounded-lg` and `bg-gray-200`) while the inner div handles padding responsively - switching from basic padding on mobile to a more spacious layout on larger screens (`sm:p-6`). This pattern is particularly useful when you need to highlight or separate content within a page, such as for form sections, informational callouts, or grouped content that needs visual distinction from its surroundings.
*/
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-200">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / cards / Well

Component summary: The Well component is a minimalist container element that creates a subtle, inset card-like layout using a light gray background and rounded corners. It implements a simple but effective visual hierarchy through padding that adapts between mobile (px-4 py-5) and desktop (p-6) viewports, making it ideal for housing secondary or supplementary content that needs to be visually distinct from the main page background. This pattern is particularly useful for highlighting form sections, information panels, or grouped content that needs a subtle visual separation without the elevated appearance of a traditional card.
*/
export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-50">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / containers / Constrained to breakpoint with padded content

Component summary: This is a responsive container component that provides consistent horizontal padding and maximum width constraints across different viewport sizes. It uses Tailwind's container utility along with progressively increasing padding values at different breakpoints (4 units on mobile, 6 units at small screens, and 8 units at large screens), creating a clean and adaptable content wrapper that prevents content from becoming too wide on larger screens while maintaining proper spacing on mobile devices. This pattern is particularly useful as a top-level layout component for maintaining consistent content width and spacing throughout an application, especially in main content areas, article layouts, or general page containers.
*/
export default function Example() {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / containers / Constrained with padded content

Component summary: This is a fundamental container component that implements a responsive, centered layout with maximum width constraints and dynamic horizontal padding. The component uses Tailwind's `max-w-7xl` class to create a reasonable content width boundary (1280px), while employing responsive padding that increases at different breakpoints (16px on mobile, 24px on small screens, and 32px on large screens). This pattern is commonly used as a top-level wrapper to maintain consistent content width and spacing across an application, preventing content from becoming too wide on large screens while ensuring appropriate margins on smaller devices.
*/
export default function Example() {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / containers / Full-width on mobile, constrained to breakpoint with padded content above mobile

Component summary: This component implements a responsive container layout pattern that adapts its width constraints based on viewport size. At mobile screen sizes, the container spans the full width of the viewport, while at larger breakpoints (sm and lg), it applies horizontal padding of 1.5rem (24px) and 2rem (32px) respectively, creating a contained width with consistent margins. This is a fundamental layout component commonly used as a top-level wrapper to maintain consistent content width and spacing across an application's various sections and pages.
*/
export default function Example() {
  return <div className="container mx-auto sm:px-6 lg:px-8">{/* Content goes here */}</div>
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / containers / Full-width on mobile, constrained with padded content above

Component summary: This is a fundamental responsive container component that implements a common mobile-first layout pattern. It uses Tailwind's max-width utility (`max-w-7xl`) to create a constrained width container on larger screens while allowing full-width content on mobile, with progressive horizontal padding (`px-6` and `px-8`) added at small and large breakpoints respectively. This component is particularly useful as a main content wrapper in modern web applications where you want content to be edge-to-edge on mobile devices but contained within a reasonable maximum width with breathing room on larger screens.
*/
export default function Example() {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Content goes here */}</div>
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / containers / Narrow constrained with padded content

Component summary: This component implements a nested container layout pattern with responsive horizontal padding and constrained maximum widths. It uses a two-layer approach where the outer container (`max-w-7xl`) provides a site-wide maximum width with responsive padding that increases at different breakpoints, while the inner container (`max-w-3xl`) further constrains the content width for improved readability. This pattern is particularly useful for content-heavy pages like blog posts, articles, or form layouts where you want to maintain comfortable reading widths while ensuring consistent spacing across different screen sizes.
*/
export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With button

Component summary: This component implements a horizontal divider (separator) with a centered button overlay, creating a visually appealing way to break up content while maintaining interactive functionality. The divider consists of a full-width border line with a floating button that features a plus icon and customizable text, styled with a white background, rounded corners, and a subtle shadow/ring treatment. This pattern is particularly useful in interfaces where you want to separate content sections while providing an action point, such as "Add More Items" or "Show More" functionality, commonly seen in form builders, content management systems, or list interfaces where users can add new elements.
*/
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon aria-hidden="true" className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" />
          Button text
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With icon

Component summary: This is a stylized divider component that features a centered icon (specifically a plus symbol) overlaid on a horizontal line. The component uses clever positioning with a full-width border and absolute positioning to create a clean divider line, while the icon is elevated above it using a white background and relative positioning to create a visually appealing break in the line. This pattern is particularly useful for separating content sections while adding visual interest, commonly seen in interfaces where you want to indicate the ability to add new content or when you need to create clear visual breaks with more emphasis than a simple horizontal line.
*/
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
        </span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With label on left

Component summary: This is a minimal yet elegant divider component that combines a horizontal line with a left-aligned label. The component uses absolute positioning to create a full-width border line while floating a text label ("Continue") above it with a white background, creating a clean break in content sections. This pattern is particularly useful for separating form sections, content groups, or workflow steps where you want to maintain visual hierarchy while providing context through the label text.
*/
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-2 text-sm text-gray-500">Continue</span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With label

Component summary: This is a horizontal divider component with a centered text label, commonly used to separate content sections while providing context through its "Continue" label. The component achieves its design using a clever combination of absolute positioning for the line (border-t) and relative positioning for the text label, with the label appearing to "break" the line by using a white background that overlays the divider. This pattern is particularly useful in forms, multi-step workflows, or content sections where you want to create visual separation while maintaining contextual clarity through the labeled break.
*/
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">Continue</span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With title and button

Component summary: This is a decorative divider component that combines a horizontal line with a title and action button, creating a visually balanced section separator. The component uses clever positioning with a full-width border line placed absolutely in the background, while the title ("Projects") and a circular button with a plus icon float above it on a white background. This pattern is particularly useful for separating content sections in administrative interfaces or dashboards where you want to both divide content and provide quick access to related actions, such as adding new items to a list or section.
*/
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-base font-semibold text-gray-900">Projects</span>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon aria-hidden="true" className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With title on left

Component summary: This is a clean divider component that places a title aligned to the left with a horizontal line extending across the remaining width. The component uses clever positioning techniques, with an absolute-positioned border line underneath and a relative-positioned title that appears to "break" the line by utilizing a white background, creating a professional sectioning element. This pattern is particularly useful for separating content sections in dashboards, settings pages, or any interface where you need to visually divide content while maintaining a clear hierarchical structure through labeled sections.
*/
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-3 text-base font-semibold text-gray-900">Projects</span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With title

Component summary: This is a styled horizontal divider component with a centered title text overlay, commonly used to separate content sections while maintaining visual hierarchy. The component creates a full-width border line and positions a text label ("Projects") on top of it using absolute positioning, with the text getting a white background to create a clean "floating" effect over the divider line. This pattern is particularly useful in dashboard layouts, content listings, or any interface where you need to create clear visual separation between sections while adding meaningful context through the title text.
*/
export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-semibold text-gray-900">Projects</span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / dividers / With toolbar

Component summary: This component implements a centered toolbar divider that combines a horizontal line with an integrated button group. The design features a row of four icon buttons (edit, attach, annotate, and delete) that float over a horizontal dividing line, creating a visually appealing break in content while maintaining functional utility. This pattern is particularly useful in applications where you need to separate content sections while providing quick access to common actions, such as in document editors, email interfaces, or content management systems where content manipulation tools should be readily accessible but not dominate the interface.

The implementation uses sophisticated positioning techniques with `relative` and `absolute` elements to achieve the floating toolbar effect, while maintaining accessibility through proper `sr-only` labels and `aria` attributes for screen readers.
*/
import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </span>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Card with dividers, full-width on mobile

Component summary: This component implements a clean, modern list container design that transforms between mobile and desktop views using Tailwind's responsive utilities. It features a white background card with subtle shadow and rounded corners (visible only on desktop screens), while individual list items are separated by thin gray dividers and contain consistent padding that adjusts based on screen size. This pattern is particularly useful for displaying collections of data like user lists, notification feeds, or content previews where each item needs clear visual separation and consistent spacing, especially in responsive layouts that need to adapt between mobile and desktop presentations.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Card with dividers

Component summary: This is a clean, minimal list container component that renders items in a card-like layout with subtle dividers between each entry. The component uses a white background, rounded corners, and a shadow effect to create a floating card appearance, while automatically adding horizontal dividing lines between list items using Tailwind's `divide-y` utility class. This pattern is particularly useful for displaying structured content like user lists, settings options, or any sequential data that benefits from clear visual separation, while maintaining a modern, contained aesthetic.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Flat card with dividers

Component summary: This is a minimalist list container component that creates a clean, flat card layout with individual items separated by horizontal dividers. The component uses a rounded border, subtle gray boundaries, and consistent padding to create a organized container for list items, making it particularly useful for displaying structured content like settings panels, user lists, or content feeds where visual separation between items is important. The implementation follows a common pattern of mapping through an array of items while maintaining accessibility through the proper use of semantic list elements (`<ul>` and `<li>`).
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Separate cards, full-width on mobile

Component summary: This component implements a responsive list container that displays items as separate cards with consistent spacing and styling. The cards feature a clean design with white backgrounds and subtle shadows, displaying as full-width blocks on mobile devices while adopting rounded corners at larger breakpoints (sm: and above). It's particularly useful for presenting lists of content items like feed entries, notifications, or user cards where each item needs visual separation and a clear container structure, while maintaining a mobile-first responsive approach.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Separate cards

Component summary: This component implements a vertically-stacked list container where each list item is styled as a distinct, separated card with consistent spacing and subtle elevation. The component utilizes Tailwind's `space-y-3` utility for uniform vertical gaps between cards, while each card features rounded corners, white background, padding, and a subtle shadow effect - making it ideal for displaying collections of content where visual separation and hierarchy are important. This pattern is particularly useful for presenting lists of items that need clear visual distinction, such as user profiles, product listings, or settings panels in admin interfaces.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Simple with dividers, full-width on mobile

Component summary: This is a minimal list container component that creates a vertically divided layout, featuring individual list items separated by subtle gray dividers. The component applies full-width padding on mobile devices (px-4) while removing horizontal padding on larger screens (sm:px-0), making it particularly useful for responsive listing layouts like feeds, settings menus, or content summaries. The use of divide-y utility classes creates visual separation between items without requiring explicit borders on each element, demonstrating an efficient approach to creating structured list layouts.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / list-containers / Simple with dividers

Component summary: This is a minimalist list container component that creates a clean, vertically divided list layout using Tailwind's divide utilities. The component renders list items with subtle gray dividing lines between them (via `divide-y divide-gray-200`), providing visual separation while maintaining a lightweight, modern aesthetic. This pattern is particularly useful for displaying uniform collections of data like feed items, settings options, or user lists where clear visual separation between items enhances readability and content hierarchy.
*/
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Aligned to bottom

Component summary: This is a Media Object component that demonstrates a bottom-aligned layout pattern using Flexbox, featuring an icon/image placeholder on the left and content (heading + text) on the right. The component uses Tailwind's `self-end` utility class to align the media element to the bottom of the container, while the `shrink-0` class prevents the SVG placeholder from shrinking when space is constrained. This pattern is particularly useful for creating consistent media-with-text layouts where you want the visual element aligned with the bottom of the accompanying content, commonly used in comment interfaces, user profiles, or article previews.
*/
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0 self-end">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Aligned to center

Component summary: This is a center-aligned media object component that implements a classic two-column layout pattern with a left-side placeholder image and right-side content. The component uses Flexbox (`flex`) to create a horizontal layout where a square SVG placeholder image (16x16 with a crosshatch pattern) is vertically centered relative to the accompanying text content using `self-center`, while the text section includes a bold heading and descriptive paragraph. This pattern is particularly useful for creating list items, article previews, or comment interfaces where you need to display an image or icon alongside related text content with proper vertical alignment.
*/
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0 self-center">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Basic responsive

Component summary: This is a responsive media object component that implements a classic two-column layout pattern, featuring an image/icon alongside text content with built-in breakpoint adaptations. The component switches from a stacked layout on mobile devices to a horizontal flex layout on larger screens (sm: breakpoint and above), making it ideal for displaying content previews, notification items, or list entries with accompanying visual elements. The left column contains a placeholder SVG graphic that maintains a fixed size (h-16 w-16), while the right column includes a bold heading and descriptive text, demonstrating a common pattern for presenting media with associated content in a clean, responsive manner.
*/
export default function Example() {
  return (
    <div className="sm:flex">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Basic

Component summary: This is a basic media object component that implements a classic horizontal layout pattern with an image/icon element on the left and content (heading + text) on the right. The component uses Tailwind's flex utilities to create a horizontal arrangement, with a non-scaling SVG placeholder serving as the media element and a content block containing a bold heading and descriptive paragraph. This pattern is particularly useful for list items, comment threads, article previews, or any interface element that needs to pair visual media with related text content in a consistent, aligned format.
*/
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Media on right

Component summary: This is a media object component that implements a horizontal layout with text content on the left and an image placeholder on the right, using Flexbox for alignment. The component follows a classic media object pattern but with reversed positioning, featuring a heading, descriptive text, and a non-scaling SVG placeholder graphic that maintains its aspect ratio and border styling. This pattern is particularly useful for content-heavy interfaces like news feeds, comment threads, or product listings where you need to consistently align text content with accompanying media while maintaining a clean, organized layout.
*/
export default function Example() {
  return (
    <div className="flex">
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
      <div className="ml-4 shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Nested

Component summary: This component implements a nested media object pattern, featuring a parent media object with two child media objects arranged vertically beneath it. The structure uses Flexbox layouts consistently, with each media object combining a non-scaling placeholder SVG image (with shrink-0 to prevent compression) on the left and content (heading + paragraph) on the right. This pattern is particularly useful for displaying threaded comments, nested responses, or hierarchical content structures where visual relationships between parent and child elements need to be clearly represented.
*/
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>

        <div className="mt-6 flex">
          <div className="mr-4 shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
            >
              <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold">Lorem ipsum</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
              quidem ipsam quia iusto.
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="mr-4 shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
            >
              <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold">Lorem ipsum</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
              quidem ipsam quia iusto.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Stretched to fit

Component summary: This is a media object layout component that implements a flexible, horizontally-aligned content structure with a placeholder image/icon on the left and text content on the right. The component uses Flexbox (`flex`) with a non-shrinking (`shrink-0`) SVG placeholder graphic that maintains its width while stretching vertically to match the content height, paired with a text section containing a bold heading and descriptive paragraph. This pattern is particularly useful for list items, comment threads, or article previews where you need a consistent visual element alongside varying lengths of text content while maintaining proper vertical alignment.
*/
export default function Example() {
  return (
    <div className="flex">
      <div className="mr-4 shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-full w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / layout / media-objects / Wide responsive

Component summary: This is a responsive media object component that implements a common layout pattern featuring a side-by-side arrangement of an image placeholder and text content. The component uses Tailwind's responsive prefixes (sm:) to transform from a stacked layout on mobile devices to a horizontal layout on larger screens, with the image maintaining a fixed width of 32 units (w-32) on desktop while spanning full width on mobile. It's particularly useful for content-heavy interfaces like blog posts, user profiles, or comment sections where you need to consistently display an image alongside descriptive text with reliable responsive behavior.
*/
export default function Example() {
  return (
    <div className="sm:flex">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32"
        >
          <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / lists / feeds / Simple with icons

Component summary: This is a vertical timeline component that visualizes a sequence of events with connected icons, particularly well-suited for displaying application or hiring process status updates. The component uses a sophisticated layout combining absolute positioning for the connecting line between events and flexbox for horizontal alignment of icons, content, and timestamps. Each timeline entry features a colored icon (using HeroIcons) with a white ring border, descriptive text with linked targets, and right-aligned dates, making it ideal for tracking progression through multi-step processes or showing activity histories in a clean, professional format.
*/
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                    )}
                  >
                    <event.icon aria-hidden="true" className="h-5 w-5 text-white" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / lists / feeds / With comments

Component summary: This is an advanced feed/comments component that combines an activity timeline with an interactive comment form. The component features a vertically-oriented timeline showing various types of activities (comments, edits, payments) with a connected line between events, followed by a sophisticated comment input section that includes mood selection functionality using Headless UI's Listbox component and file attachment capabilities. It's particularly useful for applications needing to display a history of user interactions while allowing new comments with rich interaction options, making it ideal for project management tools, document collaboration systems, or social platforms where tracking activity history and enabling user engagement is important.
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
import { CheckCircleIcon } from '@heroicons/react/24/solid'
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

const activity = [
  { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]
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
    <>
      <ul role="list" className="space-y-6">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-0 top-0 flex w-6 justify-center',
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            {activityItem.type === 'commented' ? (
              <>
                <img
                  alt=""
                  src={activityItem.person.imageUrl}
                  className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-xs/5 text-gray-500">
                      <span className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                    </div>
                    <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm/6 text-gray-500">{activityItem.comment}</p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  {activityItem.type === 'paid' ? (
                    <CheckCircleIcon aria-hidden="true" className="h-6 w-6 text-indigo-600" />
                  ) : (
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                  )}
                </div>
                <p className="flex-auto py-0.5 text-xs/5 text-gray-500">
                  <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type} the
                  invoice.
                </p>
                <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                  {activityItem.date}
                </time>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* New comment form */}
      <div className="mt-6 flex gap-x-3">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-6 w-6 flex-none rounded-full bg-gray-50"
        />
        <form action="#" className="relative flex-auto">
          <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={2}
              placeholder="Add your comment..."
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              defaultValue={''}
            />
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
                      className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
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
            <button
              type="submit"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / lists / feeds / With multiple item types

Component summary: This component implements a versatile activity feed that supports multiple types of entries (comments, assignments, and tags) with a vertical timeline layout. The feed uses a consistent left-aligned structure where each activity type has its own distinctive icon and layout pattern, connected by a vertical line (created using a background color strip) to show chronological progression. The component stands out for its conditional rendering approach, using type-based switches to display different UI patterns for each activity type - comments show user avatars with message bubbles, assignments display user circle icons, and tag activities include colored dot indicators with pill-shaped tag labels, making it ideal for applications that need to display diverse types of user activities or system events in a chronological timeline format.
*/
import { Fragment } from 'react'
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'fill-red-500' },
      { name: 'Accessibility', href: '#', color: 'fill-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span aria-hidden="true" className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'comment' ? (
                  <>
                    <div className="relative">
                      <img
                        alt=""
                        src={activityItem.imageUrl}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                      />

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'assignment' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <UserCircleIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        <a href={activityItem.person.href} className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a>{' '}
                        assigned{' '}
                        <a href={activityItem.assigned.href} className="font-medium text-gray-900">
                          {activityItem.assigned.name}
                        </a>{' '}
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <TagIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm/8 text-gray-500">
                        <span className="mr-0.5">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>{' '}
                          added tags
                        </span>{' '}
                        <span className="mr-0.5">
                          {activityItem.tags.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
                              >
                                <svg
                                  viewBox="0 0 6 6"
                                  aria-hidden="true"
                                  className={classNames(tag.color, 'h-1.5 w-1.5')}
                                >
                                  <circle r={3} cx={3} cy={3} />
                                </svg>
                                {tag.name}
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / lists / grid-lists / Actions with shared borders

Component summary: This component implements a responsive grid-based list of action items with shared borders and consistent styling, primarily designed for administrative or dashboard interfaces. Each action item features a colored icon, title, description, and hover effects, arranged in a 2-column grid on larger screens that collapses to a single column on mobile, with sophisticated border radius handling at corners. The component utilizes a smart pattern for making the entire panel clickable while maintaining accessibility, and includes visual feedback through hover states and focus rings, making it particularly suitable for navigation menus or feature dashboards in enterprise applications.
*/
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'Request time off',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Benefits',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Payroll',
    href: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Submit an expense',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Training',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white',
              )}
            >
              <action.icon aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
              quo et molestiae.
            </p>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  )
}