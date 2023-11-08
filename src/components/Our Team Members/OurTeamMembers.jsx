const OurTeamMembers = () => {
    return (
        <div className="pt-20">
            <p className="text-center text-5xl font-bold pb-10">
                Our Team Members
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-5">
                <div>
                    <img className="h-28 rounded-full border-4 border-[#36D399]" src="https://i.ibb.co/N7rJm6S/Kowshik.jpg" alt="" />
                    <p className="font-bold text-xl">Kowshik Chakraborty</p>
                    <p className="font-bold pb-5">Founder/CEO</p>
                    <p className="text-justify">The visionary founder and CEO of Tales From Bangla. With a deep-rooted love for his homeland, Bangladesh, he is a passionate advocate for showcasing the beauty and culture of this remarkable nation to the world.</p>
                </div>
                <div>
                    <img className="h-28 rounded-full border-4 border-[#36D399]" src="https://i.ibb.co/PGz2w8r/local-tours-team-members-1.jpg" alt="" />
                    <p className="font-bold text-xl">Mohammad Ali</p>
                    <p className="font-bold pb-5">Adventure Specialist</p>
                    <p className="text-justify">Mohammad is the adventurer in our team. He specializes in thrilling outdoor experiences, from hiking to wildlife safaris. Get ready for an adrenaline-pumping journey with him.</p>
                </div>
                <div>
                    <img className="h-28 rounded-full border-4 border-[#36D399]" src="https://i.ibb.co/BwJ4qr3/local-tours-team-members-3.jpg" alt="" />
                    <p className="font-bold text-xl">Rina Akter</p>
                    <p className="font-bold pb-5">Eco-Tourism Specialist</p>
                    <p className="text-justify">Rina is dedicated to responsible and eco-friendly tourism. She leads eco-tours that allow you to connect with nature and promote sustainable travel.</p>
                </div>
                <div>
                    <img className="h-28 rounded-full border-4 border-[#36D399]" src="https://i.ibb.co/16SC8fN/local-tours-team-members-2.jpg" alt="" />
                    <p className="font-bold text-xl">Farid Ahmed</p>
                    <p className="font-bold pb-5">Historical Enthusiast</p>
                    <p className="pb-5">Farid is your history buff. With a keen interest in Bangladesh&apos;s past, he&apos;ll guide you through ancient ruins, archaeological sites, and historic landmarks.</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeamMembers;