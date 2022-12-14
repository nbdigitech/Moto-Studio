import React from 'react'
import {Row, Col,} from "react-bootstrap";
import Image from "next/image";
import honey from "../../../public/images/honey.png";


function GourmetFoods() {
    return (
        <>
          <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list p-3 m-3">
            <Row>
              <Col md={8} lg={8}>
                <Row>
                <Col md={3}lg={3}>
                <div className='text-center'>
                <div className='vector-img'>
                  <div className="vector-div"></div>
                </div>
                <div className='honey-img'>
                 <Image src={honey} alt="honey"/>
                </div>
                <span className="Wildforest">Wildforest Honey</span>
                </div>
                
              </Col>
              <Col md={3}lg={3}>
                <div className='text-center'>
                <div className='vector-img'>
                </div>
                <div className='honey-img'>
                 <Image src={honey} alt="honey"/>
                </div>
                <span className="Wildforest">Sweets</span>
                </div>
               
              </Col>
              <Col md={3}lg={3}>
              <div  className='text-center'>
              <div>
                 <Image src={honey} alt="honey"/>
                </div>
                <span className="Wildforest">Amla Products</span>
                  </div>
              </Col>
              <Col md={3}lg={3}>
              <div className='text-center'>
              <div >
                 <Image src={honey} alt="honey"/>
                </div>
                <span className="Wildforest">Cashews</span>
                  </div>
              </Col>
                </Row>
              </Col>
              <Col md={4} lg={4}>
              <Col md={12}lg={12}>
               <div  className='Health-Personal-Care'>
               <div className='text-start'>
                  <h6 className="Grocery-foods">Health&Personal Care</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
               </div>
              </Col>
              </Col>
            </Row>
          </div>
        </div>
      </div>
        </>
    )
}
export default GourmetFoods;