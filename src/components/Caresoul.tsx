import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import p1 from "../assets/backend/1_validator.png";
import p2 from "../assets/backend/2_jwt.png";
import p3 from "../assets/backend/3_rbac.png";
import p4 from "../assets/backend/4_oath2.png";
import p5 from "../assets/backend/5_mvc.png";

const images = [
  { src: p1.src, alt: "Image 1" },
  { src: p2.src, alt: "Image 2" },
  { src: p3.src, alt: "Image 3" },
  { src: p4.src, alt: "Image 4" },
  { src: p5.src, alt: "Image 5" },
];

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-[1100px]">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="m-1px">
                <CardContent className="flex items-center justify-center p-1">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img
                    className="object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
