import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { store } from '../utils/Store'

export default function CartSreen() {
  const router = useRouter()
  const { state, dispatch } = useContext(store)

  const {
    cart: { cartltems },
  } = state

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart os Empty. <Link href="/"> Go Shopping</Link>
        </div>
      ) : (
        <div className="gird md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <talble className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/$(item.slug)`}>
                        <a className="flex-items-center">
                          <Image
                            src={item.Image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">{item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <Xcirclecon className="h-5 W-5"></Xcirclecon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </talble>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartltems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  )
}
