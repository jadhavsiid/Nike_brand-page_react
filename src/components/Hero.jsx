const Hero = () => {
    return <main className="hero container ">
        <div className="hero-content">
            <h1>
                YOUR <a> FEET </a> DESERVE THE BEST
            </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non nulla ducimus voluptate quidem? Soluta adipisci odio, architecto excepturi omnis distinctio. Dicta laudantium illum labore!</p>

            <div className="hero-btn">
                <button> Shop Now </button>
                <button className="second-btn"> Category </button>
            </div>

            <div className="shopping">
                <p> Also Availabe on </p>
                <div className="brand-icons">
                    <img src="/images/amazone.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero-image"></div>
        <img src="/images/hero-shoe.png" alt="" />
    </main>
};

export default Hero