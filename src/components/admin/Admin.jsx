import React from "react";
import "./admin.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <section className="banner text-6xl font-bold text-slate-100">
        <span className="admin_title">Welcome Admin</span>
      </section>

      <main>
        <div>
          <Link to="/addPackage">
            <button>Add Package</button>
          </Link>
        </div>

        <section className="mt-12 mb-16 bg-[#fff]">
          <div className="px-24">
            <div className="uppercase text-center py-6">
              <h1 className="text-2xl text-[#2ED89B]">Active Packages</h1>
              <p className="text-[8px]">Click to view detials</p>
            </div>

            <div className="my-4">
              <button className="accordion text-xl font-bold uppercase">Kuakata</button>

              <div className="panel uppercase text-xl">
                <div className="py-2">
                  <p className="py-2">Bus No</p>
                  <div className="flex gap-4 text-slate-50">
                    <div className="bg-[#7ECC71] px-4 py-2">1</div>
                    <div className="bg-[#D9D9D9] px-4 py-2">2</div>
                    <div className="bg-[#D9D9D9] px-4 py-2">3</div>
                  </div>
                </div>
{/*======================================================New code Start===============================================================*/}

                <div className="grid">
                    <div className="flex justify-between items-center my-4 gap-6">
                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A1</button>
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A2</button>
                      </div>

                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A3</button>
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A4</button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center my-4 gap-6">
                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A5</button>
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A6</button>
                      </div>

                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A7</button>
                        <button className="bg-[#7ECC71] px-4 py-2 flex justify-center items-center">A8</button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center my-4 gap-6">
                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#F3BCBC] px-4 py-2 flex justify-center items-center">G1</button>
                        <button className="bg-[#F3BCBC] px-4 py-2 flex justify-center items-center">G2</button>
                      </div>

                      <div className="flex gap-6 text-gray-800">
                        <button className="bg-[#F3BCBC] px-4 py-2 flex justify-center items-center">G3</button>
                        <button className="bg-[#F3BCBC] px-4 py-2 flex justify-center items-center">G4</button>
                      </div>
                    </div>
                    
                </div>

{/*======================================================New code End===============================================================*/}

                  <div className="bg-[#D9D9D9] text-gray-700 mr-27">
                    <table id="first_table" className="text-sm">
                      <thead>
                        <tr>
                          <th className="p-2">SEAT NO</th>
                          <th className="p-2">PASSENGER NAME</th>
                          <th className="p-2">dESTINATION</th>
                          <th className="p-2">pAYMENT STATUS</th>
                        </tr>
                      </thead>

                      <tbody className="text-center font-semibold">
                        <tr>
                          <td className="py-1 px-2">A1</td>
                          <td className="py-1 px-2">Medhedi Salem</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">A2</td>
                          <td className="py-1 px-2">Nusrat Jahan Shorna</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">A3</td>
                          <td className="py-1 px-2">Farzana Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">A4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">B1</td>
                          <td className="py-1 px-2">Rashed khan</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">B2</td>
                          <td className="py-1 px-2">Mosnur Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">B3</td>
                          <td className="py-1 px-2">Farzana Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">B4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">C1</td>
                          <td className="py-1 px-2">Rashed Khan</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">C2</td>
                          <td className="py-1 px-2">Mosnur Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">C3</td>
                          <td className="py-1 px-2">Mehedi Saleh Munna</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">C4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">D1</td>
                          <td className="py-1 px-2">Medhedi Salem</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">D2</td>
                          <td className="py-1 px-2">Nusrat Jahan Shorna</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">D3</td>
                          <td className="py-1 px-2">Farzana Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">D4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">E1</td>
                          <td className="py-1 px-2">Rashed khan</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">E2</td>
                          <td className="py-1 px-2">Mosnur Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">E3</td>
                          <td className="py-1 px-2">Farzana Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">E4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">F1</td>
                          <td className="py-1 px-2">Rashed Khan</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">F2</td>
                          <td className="py-1 px-2">Mosnur Ahmed</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">F3</td>
                          <td className="py-1 px-2">Mehedi Saleh Munna</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2">F4</td>
                          <td className="py-1 px-2">Layes Uddin</td>
                          <td className="py-1 px-2">Kuakata</td>
                          <td className="py-1 px-2">Paid</td>
                        </tr>
                        <tr className="bg-[#f3b9b9] text-[#FF0000]">
                          <td className="py-1 px-2">G1</td>
                          <td className="py-1 px-2">Optimize Seat</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                        </tr>
                        <tr className="bg-[#f3b9b9] text-[#FF0000]">
                          <td className="py-1 px-2">G2</td>
                          <td className="py-1 px-2">Optimize Seat</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                        </tr>
                        <tr className="bg-[#f3b9b9] text-[#FF0000]">
                          <td className="py-1 px-2">G3</td>
                          <td className="py-1 px-2">Optimize Seat</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                        </tr>
                        <tr className="bg-[#f3b9b9] text-[#FF0000]">
                          <td className="py-1 px-2">G4</td>
                          <td className="py-1 px-2">Optimize Seat</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                          <td className="py-1 px-2 text-gray-700">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="my-12 text-md">
                  <p className="my-4 normal-case text-gray-800">Selected Seat: G1</p>
                  <button className="btn bg-green-500 px-8 py-1 uppercase rounded-sm">Optimize Seat</button>
                </div>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
