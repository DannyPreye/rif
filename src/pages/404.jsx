import Layout from "@/components/layout/Layout";
import React from "react";

const ErrorPage = () => {
    return (
        <Layout>
            <section className="error">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-content">
                                <h2>404</h2>
                                <h4>Oops, page not found!</h4>
                                <p>
                                    Mauris urna velit in fermentum in in
                                    natoque. Tincidunt pellentesque et risus
                                    tincidunt <br /> dignissim proin auctor.
                                </p>
                                <a href="index.html" className="btn-1">
                                    Back to home <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ErrorPage;
