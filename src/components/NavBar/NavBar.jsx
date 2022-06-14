/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

// let navigation = [
//   { name: 'Landing', href: '/' },
//   { name: 'Home', href: '/home' },
//   { name: 'About', href: '/about' },
//   { name: 'Cart', href: '/cart' },
//   { name: 'Admin', href: '/admin' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBarBro() {
  const dispatch = useDispatch();
  let numberOfCartItems = useSelector(state => state.cartItems)
  useEffect(() => {
  }, [numberOfCartItems])
  const navigate = useNavigate();
  let dataCart = JSON.parse(localStorage.getItem("cartProduct"));

  let navigation;
  localStorage.user ? navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Cart', href: '/cart' },
  ] : navigation = [
    { name: 'Login', href: '/' },

  if (localStorage.usertype === 'Admin') {
    navigation.push({ name: 'Admin', href: '/admin' })
  }

  return (
    <Disclosure as="nav" className="bg-primary h-20 mb-2">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <p className="font-bold text-white">CODECAMP</p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => (isActive
                          ? 'nav-link bg-secondary text-gray-800 px-3 py-2 rounded-md text-sm font-medium'
                          : 'text-gray-800 hover:bg-secondary hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium')}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavLink to="/cart" className="text-white">
                  <div
                    className="bg-secondary p-1 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                  grid grid-cols-2"
                  >
                    <div>
                      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p>{dataCart && dataCart.length}</p>
                    </div>
                  </div>
                </NavLink>
                {localStorage.user ?
                  <>
                    <div className='bg-secondary p-1 px-3 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      {localStorage.user.split('@')[0]}
                    </div>
                    <button
                      onClick={() => dispatch(logout())}
                      className='bg-secondary p-1 px-3 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    >Logout
                    </button>
                  </>
                  : <div>
                    <NavLink to="/"
                      className="bg-secondary p-1 px-3 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      Login
                    </NavLink>
                    <NavLink to="/"
                      className="bg-secondary p-1 px-3 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      Sign Up
                    </NavLink>
                  </div>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
