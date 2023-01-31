import { type AppType } from 'next/dist/shared/lib/utils'
import { Roboto_Slab } from '@next/font/google'

import '../styles/globals.css'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${robotoSlab.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
