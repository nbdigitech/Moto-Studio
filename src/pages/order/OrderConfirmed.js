import React from 'react'
import Image from "next/image";
import tick from '../../../public/images/tick.png';
import Router from 'next/router';

function OrderConfirmed() {
    return (
        <div className="card m-auto m-5 p-0 p-sm-5">
            <div className="card-body text-center p-0 p-sm-5 mb-5">
              <Image
                src={tick}
                alt="tick"
                width={100}
                height={100}
              />
                <h2 className={'text-success fw-bold mt-4'}>Order Confirmed</h2>
                <p className='px-5'>Your order confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery for your items.</p>

                <div className="mt-5">
                  <button className="btn btn-lg border me-4" onClick={()=>Router.push('/product')}>CONTINUE SHOPPING </button>
                  <button className="btn btn-lg btn-success rounded-0 ms-4" onClick={()=>Router.push({pathname:'/auth/UserProfile', query: { activeTab: 2  }})}>VIEW ORDER</button>
                </div>
            </div>
            <style jsx>{`
             .card-body {
               font-family: 'Lora';
             }
            `}           
            </style>
        </div>
    )
}

export default OrderConfirmed
