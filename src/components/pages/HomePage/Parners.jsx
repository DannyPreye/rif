import React from "react";

const Parners = () => {
    return (
        <div className="sponsor">
            <div className="container">
                <h2 className="text-[32px] text-center leading-[49px] lg:text-[62px] lg:leading-[80px]">
                    Partners
                </h2>
                <p className="text-center my-7">
                    In spite of the tremendous progress we are making daily, we
                    choose to lean on the powerful words of Helen Keller-
                    <q>
                        Alone, we can do so little; together, we can do so much.
                    </q>
                </p>
                <div className="row justify-center gap-8 items-center">
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                </div>

                <div className="flex flex-col gap-7 items-center mt-8">
                    <p className="text-center">
                        Please click the butto below to contact us and a
                        Designated RIF Representative will speak with you
                        immediately.{" "}
                    </p>
                    <div class="header-link-btn">
                        <a href="donate.html" class="btn-1">
                            Become A Sponsor
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parners;

const Sponsor = ({ img, alt }) => {
    return (
        <div
            className="owl-item cloned"
            style={{ width: " 156px", marginRight: "24px" }}
        >
            <div className="sponsore-logo">
                <img src="assets/images/brand/brand-03.png" alt="logo" />
            </div>
        </div>
    );
};
