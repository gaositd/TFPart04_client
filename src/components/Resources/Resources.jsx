

function Resources() {


    return (
        <div>
            <h1>TABLA PARA MOSTRAR PRODUCTOS DESDE ADMIN Y PODER ELIMINAR O EDITAR</h1>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                        <div class="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>Red</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Marjy Ferencz</div>
                                        <div class="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                            </td>
                            <td>Crimson</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* <!-- row 4 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Yancy Tear</div>
                                        <div class="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td>Indigo</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>

            <br></br><br></br><br></br><br></br>

            <h1>BOTONES</h1>

            <button class="btn gap-2">
                Button
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>

            <button class="btn btn-block">block</button>

            <div class="dropdown dropdown-hover">
                <label tabindex="0" class="btn m-1">Hover</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <br /> <br /> <br /> <br />

            {/* <!-- The button to open modal --> */}
            <label for="my-modal-3" class="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>


            <h2>ALERTS</h2>

            <div class="alert alert-success shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your purchase has been confirmed!</span>
                </div>
            </div>

            <br /> <br /> <br /> <br />

            <div class="alert alert-warning shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Warning: Invalid email address!</span>
                </div>
            </div>

            <br /> <br /> <br /> <br />

            <h1>INPUT PARA FORMS</h1>
            <div class="indicator">
                <span class="indicator-item badge">Required</span>
                <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />

            </div>

            <h1>SELECT</h1>

            <select class="select select-warning w-full max-w-xs">
                <option disabled selected>Pick a pizza</option>
                <option>Cheese</option>
                <option>Veggie</option>
                <option>Pepperoni</option>
                <option>Margherita</option>
                <option>Hawaiian</option>
            </select>

            <h1>TEXT AREA</h1>

            <textarea class="textarea textarea-warning" placeholder="Bio"></textarea>



            <h1>CAJON DE OPCIONES</h1>

            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

            <h1>FOOTER</h1>

            <footer class="footer footer-center p-10 bg-primary text-primary-content">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p class="font-bold">
                        ACME Industries Ltd. <br />Providing reliable tech since 1992
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>

            <h1>LOGIN</h1>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1>SEARCH BAR</h1>
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-bordered" />
                    <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <h1>SELECT COPADO</h1>

            <div class="form-control">
                <div class="input-group">
                    <select class="select select-bordered">
                        <option disabled selected>Pick category</option>
                        <option>T-shirts</option>
                        <option>Mugs</option>
                    </select>
                    <button class="btn">Go</button>
                </div>
            </div>


        </div >

    )
}

export default Resources;