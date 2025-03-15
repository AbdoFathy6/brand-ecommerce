import React from "react";
import '../../assets/css/main.css'
const Subscrip = () => {
    return (
        <section className="subscrib-1 d-flex justify-content-center">
            <div className="subscrib pt-4">
                <div className="title-sub text-black">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="text-secondary">
                        Get daily news on upcoming offers from many suppliers all over the world
                    </p>
                </div>
                <div className="d-flex justify-content-center gap-1">
                    <input
                        type="email"
                        className="form-control ms-auto w-50"
                        placeholder="Email"
                        aria-label="Email"
                    />
                    <input
                        className="btn btn-primary me-auto w-40 submit"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </div>
        </section>
    );
};

export default Subscrip;
