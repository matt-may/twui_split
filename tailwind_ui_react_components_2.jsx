/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / description-lists / Narrow with hidden labels

Component summary: This component is a compact, card-style description list designed to display transaction or payment summary information with hidden accessibility labels. The component features a clean layout combining amounts, status badges, and user details with iconography from HeroIcons, making it particularly suitable for financial interfaces, invoices, or receipt summaries. The structure employs a flex-based layout with sophisticated visual hierarchy using varying text sizes, colors, and spacing, while maintaining accessibility through hidden labels (`sr-only` class) and semantic HTML with `dl`, `dt`, and `dd` elements.

The design pattern showcases a professional way to present structured data with clear visual separation through borders, padding, and a subtle shadow effect, while the inclusion of responsive classes (`lg:`) suggests adaptability to different screen sizes.
*/
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm/6 font-semibold text-gray-900">Amount</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900">$10,560.00</dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Paid
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 font-medium text-gray-900">Alex Curren</dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 text-gray-500">
              <time dateTime="2023-01-31">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
            </dt>
            <dd className="text-sm/6 text-gray-500">Paid with MasterCard</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Download receipt <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / description-lists / Two-column

Component summary: This is a responsive two-column description list component designed to display detailed applicant information in a structured, form-like layout. The component uses a grid system that adapts from single-column on mobile to two columns on larger screens (using `sm:grid-cols-2`), with some fields spanning both columns (via `sm:col-span-2`), and includes an attachments section featuring downloadable files with file size indicators and interactive download links. It's particularly useful for displaying comprehensive profile information, job applications, or any detailed record view where information needs to be organized in labeled pairs with a clear visual hierarchy and responsive layout.
*/
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">Margot Foster</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">Backend Developer</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">margotfoster@example.com</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">$120,000</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / stats / Simple in cards

Component summary: This component implements a clean, card-based statistics display that shows key metrics in a responsive grid layout. It uses a simple yet effective design pattern where each stat is presented in its own shadowed card with a descriptive label (dt) and corresponding value (dd), transforming from a single column on mobile to a three-column grid on larger screens (sm:grid-cols-3). The component is particularly useful for dashboards, analytics pages, or any interface where you need to prominently display important numerical data points with clear visual separation and hierarchy.
*/
const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / stats / Simple on dark

Component summary: This is a dark-themed statistics display grid component designed to showcase key metrics or KPIs in a modern, dashboard-style layout. The component renders a responsive grid of statistics that adapts from a single column on mobile to four columns on larger screens (using `sm:grid-cols-2 lg:grid-cols-4`), with each stat featuring a metric name, value, and optional unit displayed with clear visual hierarchy through typography and spacing. It's particularly well-suited for displaying deployment statistics, server metrics, or any set of numerical data that needs to be prominently displayed against a dark background (bg-gray-900), with subtle separators created using a white/5 opacity grid gap.
*/
const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
]

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / stats / With brand icon

Component summary: This is a sophisticated stats display component that presents key metrics in a responsive grid layout, each accompanied by a brand icon and change indicators. Each stat card features a distinctive design with an icon in an indigo background, the metric's value, and a color-coded percentage change indicator (green for increases, red for decreases), along with a "View all" action link at the bottom. The component implements a responsive grid system that adapts from single column on mobile to three columns on larger screens (using sm:grid-cols-2 and lg:grid-cols-3), making it particularly suitable for dashboards or analytics interfaces where you need to display multiple KPIs with their trend indicators.
*/
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon aria-hidden="true" className="h-5 w-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDownIcon aria-hidden="true" className="h-5 w-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / stats / With shared borders

Component summary: This is a responsive statistics display component that presents key metrics with shared borders and visual indicators for changes. The component uses a grid layout that adapts from a single column on mobile (with horizontal dividers) to three columns on medium screens (with vertical dividers), each metric showing a current value, previous value, and a percentage change indicator with color-coded arrows (green for increases, red for decreases). It's particularly useful for dashboards or analytics interfaces where you need to show comparative metrics over time, with the clean, professional design enhanced by subtle shadows, rounded corners, and clear visual hierarchy through typography and spacing.

The component demonstrates excellent use of responsive design patterns and semantic markup (using `<dl>`, `<dt>`, `<dd>` for definition lists) while incorporating interactive elements like status indicators that clearly communicate metric changes through both color and iconography.
*/
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-green-500"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-red-500"
                  />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / data-display / stats / With trending

Component summary: This is a responsive statistics display component that presents financial metrics with trending indicators. The component organizes four key business metrics (revenue, invoices, and expenses) in a grid layout that adapts from 1 column on mobile to 4 columns on larger screens, with each stat showing a label, current value, and a percentage change indicator that's color-coded (rose for negative, gray for positive changes). The design pattern follows a common dashboard/analytics approach where each metric is contained in its own card-like section with consistent padding and spacing, making it ideal for financial dashboards, admin panels, or any interface requiring clear visualization of KPI trends.
*/
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
        >
          <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
              'text-xs font-medium',
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Avatar group stacked bottom to top

Component summary: This component demonstrates a stacked avatar group display pattern where circular user avatars partially overlap from left to right, creating a layered effect using negative margin spacing (-space-x-1 or -space-x-2). The component showcases three size variations (small 6x6, medium 8x8, and large 10x10 pixels) of the same avatar stack pattern, each with consistent white ring borders and rounded-full styling for the perfect circular shape. This UI pattern is commonly used to represent group members, collaborators, or participants in a space-efficient way, making it ideal for project headers, chat interfaces, or anywhere multiple user representations need to be displayed compactly.
*/
export default function Example() {
  return (
    <>
      <div className="flex -space-x-1 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
      </div>

      <div className="flex -space-x-2 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
      </div>

      <div className="flex -space-x-2 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Avatar group stacked top to bottom

Component summary: This component demonstrates a stacked avatar group implementation that displays multiple user profile images in an overlapping arrangement, with each image slightly overlapping the previous one using negative margin spacing (-space-x-1 or -space-x-2). The component showcases three size variations (h-6/w-6, h-8/w-8, and h-10/w-10) of the same avatar group pattern, each featuring circular images with white ring borders and carefully managed z-index values to create a consistent stacking order. This pattern is commonly used in collaborative interfaces, team displays, or anywhere multiple user avatars need to be shown in a space-efficient and visually appealing way.
*/
export default function Example() {
  return (
    <>
      <div className="isolate flex -space-x-1 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
      </div>

      <div className="isolate flex -space-x-2 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-white"
        />
      </div>

      <div className="isolate flex -space-x-2 overflow-hidden">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
        />
      </div>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Circular avatars with bottom notification

Component summary: This component showcases a set of circular avatar images with status indicators positioned at the bottom-right corner. The implementation features six different sizes of avatars (ranging from h-6 to h-16) with accompanying notification dots that scale proportionally, each wrapped in a relative container that enables precise positioning of the status indicator using absolute positioning. The status indicators use different background colors (gray, red, and green) with a white ring border, making this component particularly useful for user interfaces that need to display both user avatars and their current status, such as in chat applications, team collaboration tools, or user presence indicators.
*/
export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-6 w-6 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-8 w-8 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-10 w-10 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-12 w-12 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-14 w-14 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-16 w-16 rounded-full"
        />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Circular avatars with placeholder icon

Component summary: This component implements a set of circular avatar placeholders in five different sizes (ranging from h-6/w-6 to h-14/w-14), each featuring a consistent user silhouette SVG icon. The avatars use a subtle gray background (bg-gray-100) with a lighter gray icon (text-gray-300), making them perfect as default placeholders when actual user images are unavailable. This pattern is particularly useful in user interfaces where profile pictures are displayed, such as user lists, comments sections, or navigation menus, providing a clean and professional fallback that maintains visual consistency across the application.
*/
export default function Example() {
  return (
    <>
      <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full text-gray-300">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full text-gray-300">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full text-gray-300">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full text-gray-300">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full text-gray-300">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Circular avatars with placeholder initials

Component summary: This component showcases a series of circular avatar placeholders that display initials when no image is available, implemented in five different sizes ranging from extra small (h-6/w-6) to extra large (h-14/w-14). Each avatar is created using a gray background (`bg-gray-500`) with centered white text initials, utilizing Tailwind's flexbox utilities (`inline-flex`, `items-center`, `justify-center`) for perfect centering. This pattern is particularly useful in user interfaces where profile pictures are needed but may not always be available, such as in user lists, comment sections, or messaging interfaces, with the different sizes allowing for hierarchical importance or varying layout requirements.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
        <span className="text-xs font-medium text-white">TW</span>
      </span>

      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
        <span className="text-sm font-medium text-white">TW</span>
      </span>

      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
        <span className="font-medium text-white">TW</span>
      </span>

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
        <span className="text-lg font-medium text-white">TW</span>
      </span>

      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-500">
        <span className="text-xl font-medium text-white">TW</span>
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Circular avatars with top notification

Component summary: This component showcases a series of circular avatar images with status indicator dots positioned at the top-right corner, implementing various sizes and states. The avatars are structured using a relative positioning container with an absolutely positioned notification dot, decorated with a white ring border for visual separation, and come in different sizes (from 24px to 64px) with proportionally scaled status indicators in gray, red, or green. This pattern is particularly useful in user interfaces where you need to display user avatars along with their current status (like online/offline/busy) such as in chat applications, team collaboration tools, or social platforms.
*/
export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-6 w-6 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-1.5 w-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-8 w-8 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-10 w-10 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-12 w-12 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-3 w-3 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-14 w-14 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-16 w-16 rounded-full"
        />
        <span className="absolute right-0 top-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Circular avatars

Component summary: This component showcases a series of circular avatar images implemented using Tailwind CSS's utility classes, displaying them in ascending sizes from 24px (h-6) to 56px (h-14). The avatars feature perfectly rounded corners using the `rounded-full` class and maintain consistent square aspect ratios, making them ideal for user profiles, comment sections, or team member displays. The implementation uses the `inline-block` display property to allow the avatars to flow naturally in a horizontal layout while maintaining proper spacing and alignment.
*/
export default function Example() {
  return (
    <>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-6 w-6 rounded-full"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-8 w-8 rounded-full"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-10 w-10 rounded-full"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-12 w-12 rounded-full"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-14 w-14 rounded-full"
      />
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Rounded avatars with bottom notification

Component summary: This component showcases a collection of rounded avatar images with status indicators positioned at the bottom-right corner. The implementation features six different sizes of avatars (ranging from h-6/w-6 to h-16/w-16) with absolutely positioned circular notification badges that use different colors (gray, red, and green) to indicate various states. The component employs sophisticated positioning techniques using Tailwind's translate utilities to perfectly align the status indicators, while the white border around each indicator creates a clean, overlapping effect that works well on any background.

This pattern is particularly useful in user interfaces that need to display user avatars with online/offline status, notification states, or activity indicators, making it ideal for chat applications, user lists, or team member displays. The scalable nature of the component, with its various predefined sizes, makes it highly reusable across different contexts while maintaining consistent styling and positioning.
*/
export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-6 w-6 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-1.5 w-1.5 rounded-full bg-gray-300" />
        </span>
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-8 w-8 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-2 w-2 rounded-full bg-red-400" />
        </span>
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-10 w-10 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-2.5 w-2.5 rounded-full bg-gray-300" />
        </span>
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-12 w-12 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-3 w-3 rounded-full bg-green-400" />
        </span>
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-14 w-14 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-3.5 w-3.5 rounded-full bg-gray-300" />
        </span>
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-16 w-16 rounded-md"
        />
        <span className="absolute bottom-0 right-0 block translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-white">
          <span className="block h-4 w-4 rounded-full bg-gray-300" />
        </span>
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Rounded avatars with top notification

Component summary: This component presents a versatile avatar system with status indicators, displaying user profile images in various sizes (from 24px to 64px) with a notification dot positioned at the top-right corner. The implementation uses absolute positioning to overlay small circular indicators (in gray, red, or green) on top of rounded-square profile images, with each indicator featuring a white ring border for visual separation. This pattern is particularly useful in messaging interfaces, social platforms, or team collaboration tools where you need to show user presence status or notification states alongside profile pictures.
*/
export default function Example() {
  return (
    <>
      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-6 w-6 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-8 w-8 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-10 w-10 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-12 w-12 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-3 w-3 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gray-300 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-14 w-14 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-3.5 w-3.5 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white" />
      </span>

      <span className="relative inline-block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-16 w-16 rounded-md"
        />
        <span className="absolute right-0 top-0 block h-4 w-4 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-green-400 ring-2 ring-white" />
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / Rounded avatars

Component summary: This component showcases a series of rounded avatar images displayed in ascending sizes (from 24px to 56px), using Tailwind's sizing utilities (h-6 through h-14). It implements a consistent, inline-block layout pattern with rounded corners (rounded-md) and uses the facearea parameter in the image URL to ensure proper face centering, making it ideal for user profile displays, comment sections, or team member listings where multiple avatar size options are needed. The component is particularly useful when building UI elements that require a standardized yet flexible approach to displaying user profile images across different contexts within an application.
*/
export default function Example() {
  return (
    <>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-6 w-6 rounded-md"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-8 w-8 rounded-md"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-10 w-10 rounded-md"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-12 w-12 rounded-md"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block h-14 w-14 rounded-md"
      />
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / avatars / With text

Component summary: This component implements a clickable avatar with accompanying text, commonly used for user profile displays or navigation elements in web applications. The design combines a circular profile image with two levels of text (name and action prompt) in a horizontal layout, utilizing Tailwind's group hover functionality to create subtle interactive color transitions when users hover over the element. The component's structure makes it particularly suitable for header navigation, user menus, or comment/post author attributions where you want to provide both visual and textual user identification with clear interactive feedback.
*/
export default function Example() {
  return (
    <a href="#" className="group block shrink-0">
      <div className="flex items-center">
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block h-9 w-9 rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
        </div>
      </div>
    </a>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Flat pill with dot

Component summary: This component presents a collection of pill-shaped badges with leading dot indicators, available in various color schemes (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge combines a small circular SVG dot with text, using a consistent design pattern of light background colors paired with darker text and dot colors, making them ideal for status indicators, categories, or labels in user interfaces. The badges are built using Tailwind's inline-flex layout and rounded-full utility classes to create a compact, visually appealing element that maintains consistent spacing and alignment between the dot and text.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Flat pill

Component summary: This Flat Pill component is a collection of simple, lightweight badge elements implemented using Tailwind CSS, featuring a consistent rounded-full design pattern with different color variations (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge maintains a cohesive visual style with subtle pastel backgrounds (using *-100 color classes) paired with darker text (*-700/*-800 classes) of the same color family, making them ideal for status indicators, tags, or categorical labels in applications. The component uses an inline-flex layout with carefully balanced padding (px-2 py-1) and small text (text-xs) to create compact, pill-shaped badges that can be easily integrated into any UI context.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Flat with dot

Component summary: This component presents a collection of flat, pill-shaped badges with small leading dot indicators in various color schemes (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge combines a small SVG circle icon with text, using a consistent design pattern of subtle background colors (100 shade) paired with darker text (700/800 shade) and matching dot colors (400/500 shade), all wrapped in a rounded container with consistent padding and text sizing. This type of badge component is particularly useful for status indicators, category labels, or tags in applications where visual distinction between different states or categories is needed while maintaining a cohesive and minimal design language.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Flat with remove button

Component summary: This component implements a collection of removable badge elements, each featuring a flat design with different color variants (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge consists of text content paired with a small "remove" button that includes an 'X' icon SVG and hover states for improved interactivity. The component is particularly useful for interfaces that need to display removable tags, filters, or selected items, such as in search interfaces, filtering systems, or tag management features.

The implementation uses Tailwind's utility classes to create consistent spacing, rounded corners, and a cohesive color scheme across all variants, while maintaining accessibility with screen reader support through "sr-only" labels. The badges feature subtle hover effects on their remove buttons, providing clear interactive feedback to users.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-red-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-red-700/50 group-hover:stroke-red-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-yellow-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-yellow-800/50 group-hover:stroke-yellow-800/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-green-800/50 group-hover:stroke-green-800/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-blue-800/50 group-hover:stroke-blue-800/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-indigo-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-indigo-700/50 group-hover:stroke-indigo-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-purple-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-violet-700/50 group-hover:stroke-violet-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-pink-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-pink-800/50 group-hover:stroke-pink-800/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Flat

Component summary: This is a flat badge component collection that implements a simple yet versatile design pattern for status indicators or labels. The component showcases eight color variants (gray, red, yellow, green, blue, indigo, purple, and pink), each featuring a light background color with matching darker text, rounded corners, and consistent padding - making them ideal for categories, status indicators, or tags in user interfaces. The badges use a minimal, flat design approach with `inline-flex` layout and small text sizing, ensuring they remain compact and visually harmonious within any application context.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Pill with border and dot

Component summary: This component presents a collection of pill-shaped badges with a thin border and a colored status dot, implemented using Tailwind CSS and SVG elements. Each badge features a consistent design pattern combining a small circular dot (implemented as an inline SVG) with text, wrapped in a rounded container with a subtle gray border using the `ring` utility class. The component offers seven color variations (red, yellow, green, blue, indigo, purple, and pink) making it ideal for status indicators, category labels, or system state representations in user interfaces where visual distinction through color coding is beneficial.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Pill with border

Component summary: This component showcases a collection of pill-shaped badges with subtle border rings, implementing a consistent design pattern across different color variants. Each badge features a rounded-full shape, light pastel background, and a semi-transparent ring border, creating a refined and modern appearance with excellent visual hierarchy. These badges would be particularly useful for status indicators, tags, or category labels in applications where color-coding is important, such as displaying priority levels, project statuses, or content categories while maintaining a cohesive and sophisticated design language.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small flat pill with dot

Component summary: This component presents a collection of small, pill-shaped badges with leading dot indicators in various color schemes (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge combines a small SVG circle icon with text, styled using a rounded-full design, subtle background colors, and coordinated text colors for optimal contrast. This design pattern is particularly useful for status indicators, category labels, or tags in user interfaces where visual distinction between different states or categories is needed while maintaining a compact, modern appearance.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small flat pill

Component summary: This component presents a collection of small, pill-shaped badges implemented using Tailwind CSS, each featuring a different color scheme with matching background and text colors. The badges are designed with a minimal, flat aesthetic using rounded-full corners, small padding (px-1.5 py-0.5), and a consistent text size (text-xs), making them ideal for displaying status indicators, categories, or labels in a space-efficient manner. The component includes eight color variations (gray, red, yellow, green, blue, indigo, purple, and pink) with pastel backgrounds and darker text for optimal contrast and visual hierarchy.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small flat with dot

Component summary: This component represents a collection of small, flat badge elements with leading dot indicators, available in various color schemes (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge combines a tiny SVG circle icon with text, using a consistent design pattern of subtle background colors (`bg-{color}-100`), darker text (`text-{color}-700`), and rounded corners, making them ideal for status indicators, labels, or categorical tags in applications. The badges are designed to be compact and lightweight, using small text (`text-xs`) and minimal padding, making them perfect for dense UI layouts where space efficiency is important while maintaining visual hierarchy and color-coding capabilities.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-gray-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small flat

Component summary: This component represents a collection of small, flat badge elements designed with a minimal and consistent style across different color variations. Each badge features a subtle rounded appearance with a light background color and corresponding darker text, using a small text size and medium font weight for optimal readability. The component is particularly useful for status indicators, categories, or labels in interfaces where space is limited and visual distinction between different types of information is needed while maintaining a flat, modern aesthetic.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small pill with border

Component summary: This component implements a collection of small, pill-shaped badges with subtle borders using Tailwind CSS's utility classes. Each badge features a rounded-full design with a light background color, complementary text color, and a thin ring border (using ring-1) with reduced opacity, creating a delicate and modern appearance. These badges would be particularly useful for displaying status indicators, tags, categories, or labels in applications where a subtle yet visually distinct element is needed, with multiple color variants (gray, red, yellow, green, blue, indigo, purple, and pink) available to convey different meanings or states.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-50 px-1.5 py-0.5 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / Small with border

Component summary: This component presents a collection of small, color-coded badge elements with subtle borders, designed for inline status indicators or labels in a UI. Each badge features a consistent design pattern with rounded corners, light background colors, and a thin ring border, while utilizing a coordinated color scheme where the text color is a darker shade of the badge's primary color. These badges would be particularly useful for categorizing items, indicating statuses, or highlighting metadata in applications where space efficiency is important, as they maintain a compact footprint with their small text size and minimal padding.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-1.5 py-0.5 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / With border and dot on dark

Component summary: This is a dark-themed badge component that combines a small colored dot indicator with text, designed for use on dark backgrounds. The component features a subtle border created using Tailwind's ring utilities, rounded corners, and comes in various color variations (red, yellow, green, blue, indigo, purple, and pink) through the dot indicator while maintaining consistent white text and dark border styling. This type of badge would be particularly useful in dashboards, admin interfaces, or status indicators where you need to visually categorize or indicate different states or categories with a sophisticated, dark-mode friendly design.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-400">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / With border and dot

Component summary: This component showcases a collection of bordered badge elements, each featuring a small colored dot indicator and text label. The badges are designed with a consistent structure using Tailwind's utility classes to create a subtle border (using ring-1), rounded corners, and uniform padding, while incorporating small SVG circles in various colors (red, yellow, green, blue, indigo, purple, and pink) as status indicators. This badge pattern is particularly useful for displaying status information, categories, or labels in applications where visual distinction is needed through both color coding and a clean, bordered design.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
          <circle r={3} cx={3} cy={3} />
        </svg>
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / With border and remove button

Component summary: This component showcases a collection of dismissible badges in various colors (gray, red, yellow, green, blue, indigo, purple, and pink), each featuring a subtle border and an interactive remove button. The badges are designed with consistent styling patterns including a light background, matching text color, and a thin ring border, while incorporating a small "x" remove button that provides hover feedback. This pattern is particularly useful in interfaces where users need to manage tags, filters, or selected items, such as in tag management systems, filter interfaces, or multi-select components where items can be individually removed.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-red-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-red-600/50 group-hover:stroke-red-600/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-yellow-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-yellow-700/50 group-hover:stroke-yellow-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-green-700/50 group-hover:stroke-green-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-blue-700/50 group-hover:stroke-blue-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-indigo-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-indigo-600/50 group-hover:stroke-indigo-600/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-purple-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-violet-600/50 group-hover:stroke-violet-600/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
      <span className="inline-flex items-center gap-x-0.5 rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
        <button type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-pink-600/20">
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-pink-700/50 group-hover:stroke-pink-700/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / With border on dark

Component summary: This component showcases a collection of subtle, bordered badge elements designed specifically for dark-mode interfaces. Each badge features a semi-transparent background color (using opacity modifiers like `/10`), matching text color, and a thin ring border with slightly higher opacity, creating a cohesive and sophisticated visual hierarchy. The badges are implemented as inline-flex containers with consistent padding, rounded corners, and small text size, making them perfect for displaying status indicators, tags, or labels in dark-themed applications where visual distinction needs to be maintained while keeping the interface elegant.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">
        Badge
      </span>
    </>
  )
}




/* 
Tailwind UI pre-built component
                                    
Component category and name: application-ui / elements / badges / With border

Component summary: This component showcases a collection of subtle, bordered badge variants implemented with Tailwind CSS, each featuring a different color scheme (gray, red, yellow, green, blue, indigo, purple, and pink). Each badge is styled with a rounded appearance, light background color, matching text color, and a subtle ring border effect using the ring-inset utility, making them perfect for status indicators, tags, or labels in user interfaces. The badges are designed to be compact and inline-friendly, using consistent padding and small text size (text-xs) with medium font weight, making them ideal for highlighting metadata, categories, or status information within application layouts.
*/
export default function Example() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
    </>
  )
}