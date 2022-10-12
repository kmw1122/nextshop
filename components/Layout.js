import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ title, children }) {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <div>
      <Head>
        <title> {title ? title + ' - NextShop' : 'NextShop'}</title>
        <meta name="description" content="nexthome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 item-center px-4 justify-between shodow-md bg-slate-200">
            <Link href="/">
              <a className="text-lg font-bold">NextShop</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart{' '}
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 NextShop</p>
        </footer>
      </div>
    </div>
  )
}
