const EachGoal = ({ serviceNumber, title, content, icon, delay }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay || 100}
            className="col-xl-4 col-lg-6 col-md-6"
        >
            <div
                className="service-container wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                }}
            >
                <div className="service-container-overlay"></div>
                <div className="service-number">
                    <span>{serviceNumber}</span>
                </div>
                <div className="service-container-inner">
                    <div className="service-image">
                        <img
                            src="assets/images/icons/service-shape-01.png"
                            alt="shape"
                        />
                    </div>
                    <div className="service-icon">
                        <span className={`${icon}`}></span>
                    </div>
                    <h5>{title}</h5>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default EachGoal;
