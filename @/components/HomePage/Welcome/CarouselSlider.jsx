import * as React from "react";
import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

export default function CarouselSlider() {
  // Define the image URLs array inside the component
  const imageUrls = [
    "https://images.pexels.com/photos/29784189/pexels-photo-29784189/free-photo-of-casual-portrait-by-the-sea-in-ho-chi-minh-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14037648/pexels-photo-14037648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14162172/pexels-photo-14162172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28452387/pexels-photo-28452387/free-photo-of-beautiful-girl-carrying-a-milk-container.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/22498607/pexels-photo-22498607/free-photo-of-girl-holding-american-football-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <Carousel className="md:w-[80%] w-[98%] m-auto">
      <p className="md:hidden text-center text-[#FFCC00]">👈 Swipe 👉</p>{" "}
      {/* Show swipe text on mobile */}
      <CarouselContent className="h-[70vh]">
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">
              <Card className="h-full">
                <CardContent className="flex items-center justify-center p-0 h-full">
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Show arrows on large screens, hide on mobile */}
      <div className="hidden md:flex justify-between w-full absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <CarouselPrevious className="text-2xl" />
        <CarouselNext className="text-2xl" />
      </div>
    </Carousel>
  );
}
