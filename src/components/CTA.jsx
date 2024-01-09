import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const includedFeatures = [
  'Creation assistance',
  'Verification assistance',
  'Removal assitance',
  'Audit location',
]

export const CTA = () => {
      return (
    <div className="bg-customDarkBg2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-customGrayText">
            Our pricing is transparent and up-front with no hidden fees.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGrayBorder sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Try it for free</h3>
            <p className="mt-6 text-base leading-7 text-customGrayText">
              We help you create, audit, fix, remove or verify one location on the Google, Bing or Apple ecosystem.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-white">What’s included</h4>
              <div className="h-px flex-auto bg-customGrayBorder" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                    <CheckArrowIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-customDarkBg3 py-10 text-center ring-1 ring-inset ring-customGrayBorder lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white">No credit card required</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$0</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  target="_blank"
                  href="https://xp.panx.io/free-signup"
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                >
                  Start now
                </a>
                <p className="mt-6 text-xs leading-5 text-customGrayText">
                  Listing and reputation dashboard aren't included in the free plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
