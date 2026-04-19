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

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import p1 from "../assets/backend/1_validator.png";
import p2 from "../assets/backend/2_jwt.png";
import p3 from "../assets/backend/3_rbac.png";
import p4 from "../assets/backend/4_oath2.png";
import p5 from "../assets/backend/5_mvc.png";

const images = [
  { id: 1, name: "Express-Validator", src: p1.src, alt: "Image 1" },
  { id: 2, name: "JWT", src: p2.src, alt: "Image 2" },
  { id: 3, name: "RBAC", src: p3.src, alt: "Image 3" },
  { id: 4, name: "Oath2", src: p4.src, alt: "Image 4" },
  { id: 5, name: "MVC", src: p5.src, alt: "Image 5" },
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

  const handleClick = (id: number) => {
    setCurrent(id);
    api?.scrollTo(id - 1);
  };

  return (
    <>
      <ToggleGroup
        className="max-[700px]:flex-col max-[700px]:gap-1"
        size="lg"
        variant="outline"
        type="single"
        defaultValue={images[0].id.toString()}
      >
        {images.map((image) => (
          <ToggleGroupItem
            className=" h-8 first-of-type:w-42 w-20 cursor-pointer hover:bg-zinc-200 data-[state=on]:bg-zinc-400 data-[state=on]:text-white data-[state=on]:shadow-lg"
            key={image.id}
            value={image.id.toString()}
            onClick={() => handleClick(image.id)}
          >
            <p className="text-base">{image.name}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="mx-auto max-w-[1100px]">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <Card className="m-[12px]">
                  <CardContent className="flex items-center justify-center">
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
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        {/* <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div> */}
      </div>
    </>
  );
}
