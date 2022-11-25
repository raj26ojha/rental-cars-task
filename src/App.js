import './App.css';
import {FiPlus, FiEdit} from 'react-icons/fi';

function App() {
  return (
    <div className='container mb-3'>
      <section className='d-flex mt-3'>
        <h3>Apple iPhone 12 - White, 128 GB</h3>
        <p className='green-background ms-4'>SALE COMPLETE</p>
      </section>

      <div className="row mt-5">
        <div className="col-md-8 col-sm-12">
          <section className='product-details'>
            <p className='dark-text'>Product Details</p>
            <div className="cards mt-2">
              <div className="row">
                <div className="col-md-2 col-sm-3 text-center">
                  <img src="./assets/images/iPhone-12-PNG-Pic.png" alt="pic" className='img-fluid phone-img' />
                </div>
                <div className="col-md-10 col-sm-9">
                  <div className="d-flex justify-content-between">
                    <div className="left">
                      <p className='dark-text'>Apple iPhone 12 - White, 128 GB</p>
                      <div className="mt-3">
                        <p className='text-head'>Serial Number: <span className='text-body'>654665468428</span></p>
                        <p className='text-head'>Condition: <span className='text-body'>Mint</span></p>
                        <p className='text-head'>Listing: <span className='text-green'>LWKA34987</span></p>
                      </div>
                    </div>
                    <div className="right ">
                      <p className='green-background ms-4'>PAID</p>
                    </div>
                  </div>
                  <div className="table-box table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <td>Ask Price</td>
                          <td>Buyer Fee</td>
                          <td>Seller Fee</td>
                          <td>Shipping</td>
                          <td>Tax</td>
                          <td>Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='text-data'>$525.00</th>
                          <th className='text-data'>$17.42</th>
                          <th className='text-data'>$17.42</th>
                          <th className='text-data'>$0.00</th>
                          <th className='text-data'>$0.00</th>
                          <th>$561.84</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="payments mt-4">
            <p className="dark-text">Payments</p>
            <div className="mt-2">
              <div className="cards">
                <div className="table-responsive w-100">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <td>Date / Time</td>
                        <td>Status</td>
                        <td>Amount</td>
                        <td>Payment Reference ID</td>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <th className='text-data'>Sep 30, 2022 2:16PM</th>
                        <th className='text-green'>PAID</th>
                        <th className='text-data'>$530.14</th>
                        <th className='text-data'>8WP19853SXHS54545</th>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Payer</td>
                        <td>Reciever</td>
                      </tr>
                      <tr>
                        <th className='text-data'>Payment to seller</th>
                        <th className='text-data'>abcde@gmail.com</th>
                        <th className='text-data'>jhsdsdb@gmail.com</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="shipping mt-4">
            <div className="d-flex justify-content-between">
              <p className="dark-text">Shipping</p>
              <p className='text-green'>< FiPlus /> Add Shipment</p>
            </div>
            <div className="mt-2">
              <div className="cards">
                <div className="table-responsive w-100">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <td>Date / Time</td>
                        <td>Status</td>
                        <td>Carrier</td>
                        <td>Tracking</td>
                        <td className='text-green'>< FiEdit /></td>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <th className='text-data'>Sep 30, 2022 2:16PM</th>
                        <th className='text-green'>SHIPPED</th>
                        <th className='text-data'>UPS</th>
                        <th className='text-data'>HS4554DHG545748</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-4 col-sm-12">
        <section className='product-details'>
            <p className='dark-text'>Sale Summary</p>
            <div className="table-box bg-white table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th className='text-data'>Seller Payout</th>
                          <th className='text-end'>$540.00</th>
                        </tr>
                        <tr>
                          <td>Sent through <img className='img-fluid paypal' src="./assets/images/pic.png" alt="" /></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Sale ID</td>
                          <th className='text-data text-end'>hgcadscf52adfjh</th>
                        </tr>
                        <tr>
                          <td>Date Sold</td>
                          <th className='text-data text-end'>Sep 30, 2022</th>
                        </tr>
                        <tr>
                          <td>Date Completed</td>
                          <th className='text-data text-end'>Oct 10, 2022</th>
                        </tr>
                        <tr>
                          <td>Order Total</td>
                          <th className='text-data text-end'>$540.00</th>
                        </tr>
                        <tr>
                          <td>Tax</td>
                          <th className='text-data text-end'>$0.00</th>
                        </tr>
                        <tr>
                          <td>Add-On(s)</td>
                          <th className='text-data text-end'>$0.00</th>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <th className='text-data text-end'>$0.00</th>
                        </tr>
                        <tr>
                          <td>Buyer Fee</td>
                          <th className='text-data text-end'>$17.42</th>
                        </tr>
                        <tr>
                          <td>Ask Price</td>
                          <th className='text-data text-end'>$525.00</th>
                        </tr>
                        <tr>
                          <td>Seller Fee</td>
                          <th className='text-data text-end'>$17.00</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
