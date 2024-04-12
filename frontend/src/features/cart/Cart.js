import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },

  // More products...
];

const Cart = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className=" border-b border-gray-200 pb-6 pt-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="flex justify-between">
            <div className="mt-8 w-2/3">
              <div className="flow-root ">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-3 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-lg font-medium tracking-tight text-gray-600">
                Order Summary
              </h1>

              <ul role="list" className="-my-3 divide-y divide-gray-200">
                <li className=" py-6 ">
                  <div className="ml-3 flex  flex-col">
                    <div className="flex justify-between">
                      <div className="text-base font-medium text-gray-500">
                        <h3>Subtotal</h3>
                      </div>
                      <div className="mr-2 text-sm">
                        <p className="text-gray-500">$99</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" py-6 ">
                  <div className="ml-3 flex  flex-col">
                    <div className="flex justify-between">
                      <div className="text-base font-medium text-gray-500">
                        <h3>Shipping extimate</h3>
                      </div>
                      <div className=" mr-2 text-sm">
                        <p className="text-gray-500">$99</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" py-6 ">
                  <div className="ml-3 flex  flex-col">
                    <div className="flex justify-between">
                      <div className="text-base font-medium text-gray-500">
                        <h3>Tax extimate</h3>
                      </div>
                      <div className="mr-2 text-sm">
                        <p className="text-gray-500">$99</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;