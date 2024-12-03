import SnowAnimation from "./SnowAnimation";

const About = ({ fontClass, fontClass1 }) => {
  return (
    <section id="about" className="bg-gradient-to-b from-red-700 via-red-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Falling Snow Animation */}
      <SnowAnimation/>

      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-4 text-center ${fontClass}`}>About PlayboySanta</h2>
        <p className={`text-lg mb-6 ${fontClass1}`}>
          "You blew it. Again. Maxed out the credit card on a meme that didn’t moon. Spent your last BNB on a ‘sure thing.’ But this time, it’s different. You’ve got Playboy Santa on your side—jolly, reckless, and high as the North Pole. $PLAYBOYSANTA is the token for the naughty list. Let’s ride this sleigh to the moon and prove that even Santa knows how to make it rain."
        </p>
        <img
          src="/images/featuresImg4.png"
          alt="About"
          className="mx-auto rounded-lg shadow-lg w-3/4 md:w-1/2"
        />
      </div>
    </section>
  );
};

export default About;
