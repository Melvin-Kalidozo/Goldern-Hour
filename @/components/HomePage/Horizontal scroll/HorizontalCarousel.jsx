import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalCarousel = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8  font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCarousel;

const cards = [
  {
    url: "https://images.pexels.com/photos/4897373/pexels-photo-4897373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dreamy Landscape - Cinematic",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Urban Exploration - Drama",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/29818231/pexels-photo-29818231/free-photo-of-elegant-portrait-in-cappadocia-s-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cappadocia Serenity - Cinematic",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/28690609/pexels-photo-28690609/free-photo-of-elegant-portrait-of-woman-in-traditional-ao-dai-hanoi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Traditional Elegance - Drama",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/28462500/pexels-photo-28462500/free-photo-of-joyful-black-woman-in-vibrant-orange-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Joyful Portrait - Cinematic",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/28720548/pexels-photo-28720548/free-photo-of-elegant-outdoor-portrait-of-woman-in-nigerian-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nigerian Fashion - Drama",
    id: 6,
  },
  {
    url: "https://images.pexels.com/photos/29818231/pexels-photo-29818231/free-photo-of-elegant-portrait-in-cappadocia-s-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Scenic Elegance - Cinematic",
    id: 7,
  },
];
