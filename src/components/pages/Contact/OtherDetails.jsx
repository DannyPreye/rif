import Link from 'next/link';
import React from 'react';

function OtherDetails() {
    return (
        <section className='contact-container'>
            <div className='container'>
                <div className='row  md:gap-0 justify-center'>
                    <div
                        data-aos='fade-up-right'
                        className='col-xl-4 col-lg-4'
                    >
                        <div
                            className='contact-containt wow fadeInLeft animated'
                            style={{
                                visibility: 'visible',
                                animationName: 'fadeInLeft',
                            }}
                        >
                            <h5>Quick Contact</h5>
                            <div className='contact-info'>
                                <div className='contact-info-left'>
                                    <Link href='tel:+2348173265698'>
                                        <i className='fa fa-phone' />
                                    </Link>
                                </div>
                                <div className='contact-info-right'>
                                    <p>Main Office</p>
                                    <Link href='tel:+2348173265698'>
                                        (+234)817 3265 698
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos='fade-up-left'
                        className='col-xl-4 col-lg-4'
                    >
                        <div
                            className='contact-containt wow fadeInUp animated'
                            style={{
                                visibility: 'visible',
                                animationName: 'fadeInUp',
                            }}
                        >
                            <h5>Email Address</h5>
                            <div className='contact-info'>
                                <div className='contact-info-left'>
                                    <a href='mailto:d.eyo-enoette@atuwateseii.com'>
                                        <i className='fa fa-envelope' />
                                    </a>
                                </div>
                                <div className='contact-info-right'>
                                    <p>Mail to</p>
                                    <Link href='mailto:d.eyo-enoette@atuwateseii.com'>
                                        admin2@atuwateseii.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-xl-4 col-lg-4">
                        <div
                            className="contact-containt wow fadeInRight animated"
                            style={{
                                visibility: "visible",
                                animationName: "fadeInRight",
                            }}
                        >
                            <h5>Mailing Address</h5>
                            <div className="contact-info">
                                <div className="contact-info-left">
                                    <a href="#">
                                        <i className="flaticon-location"></i>
                                    </a>
                                </div>
                                <div className="contact-info-right">
                                    <p>
                                        3891 Ranchview Dr. Richardson, <br />
                                        California 62639
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default OtherDetails;
