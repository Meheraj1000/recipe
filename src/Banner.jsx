
const Banner = () => {
    return (
        <div className="pt-6 ">
            <div className="hero h-96 rounded-3xl" style={{backgroundImage: "url(https://i.ibb.co.com/60Gp0NN/patrick-tomasso-GXXYk-Swnd-P4-unsplash.jpg)",}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className=" flex gap-3 justify-center">
                        <button className="btn">Explore Now</button>
                        <button className="btn">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;