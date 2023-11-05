const AboutUs = () => {
    return (
        <div>
            <p className="text-center text-5xl font-bold pb-10">
                About Us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-xl font-bold p-5">
                    <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co/58SRMr2/local-tours-passion.jpg" alt="" />
                    <p className="text-center mb-5 text-2xl">Passion for Bangladesh</p>
                    <p className="text-justify">
                        We are deeply passionate about showcasing the natural beauty, rich culture, and hidden gems of Bangladesh. Our love for this country drives us to create unique and memorable travel experiences.
                    </p>
                </div>
                <div className="bg-white shadow-xl font-bold p-5">
                    <img className="h-16 mx-auto mb-5" src="https://i.ibb.co/nChQvSy/local-tours-expertise.jpg" alt="" />
                    <p className="text-center mb-5 text-2xl">Local Expertise</p>
                    <p className="text-justify">
                        Our team comprises experienced local guides who are eager to share their knowledge and enthusiasm. They bring you closer to the heart of Bangladesh, ensuring your journey is authentic and immersive.
                    </p>
                </div>
                <div className="bg-white shadow-xl font-bold p-5">
                    <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co/LN5RFJG/local-tours-our-mission.jpg" alt="" />
                    <p className="text-center mb-5 text-2xl">Our Mission</p>
                    <p className="text-justify">
                        Our mission is to be your gateway to the wonders of Bangladesh. We&apos;re dedicated to providing responsible and enriching travel experiences, fostering a deeper understanding of this remarkable nation, and creating lasting memories for all who explore with us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;