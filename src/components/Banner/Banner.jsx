const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/5v5vWK6/local-tours-banner.gif" className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Unveil the Secrets of Bangladesh, One Adventure at a Time.</h1>
                    <p className="py-6">Explore the enchanting landscapes, traditions, and flavors of Bangladesh with our passionate local guides. From bustling markets to serene natural wonders, our curated tours offer an authentic taste of this beautiful nation. Start your journey today.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;