'use client'

export default function LogoCloud() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-neutral-dark/80">
          Trusted by developers and agencies worldwide
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="col-span-2 max-h-12 w-full object-contain opacity-60 hover:opacity-100 transition-opacity lg:col-span-1"
              src={logo}
              alt="Client Logo"
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 