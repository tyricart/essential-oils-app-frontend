import logo from "../assets/Pictures/tyrene.jpg"

const About = () => {
  return (
    <div className="container-about">
      <h3>About the Master Practitioner, Tyrene Ricart</h3>
      <img className="container-img" src={logo} alt="" width={300} />
        <p>Tyrene has been practicing alternative healing, energy work and natrual remedies since 2015. 
        She was her first client and learned the art of Reiki as she practice on herself. With consistency and 
        determination she became a Reiki Shihan in October 2020.
        </p> <br />
        <p>Since the beginning of her self healing journey, Tyrene has been researching, studying, and seeking 
        for the spiritual root of inbalance and disharmony in the physical body. She draws from her studies of Kabbalah to attune and empower her clients
        with the 72 names of G-d. 
        </p> <br />
        <p>By integrating the esoteric mysteries of Kabbalah, Reiki, and Astrology with the holistic treatments of sound frequency and essential oils, Tyrene 
        is supporting clients in their journey to soul aligmnet and physical rejuvenation. </p>
    </div>
  );
};

export default About;
