import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
export function AstroAccordionComponent() {
  const [content, setContent] = useState<string>("seo");
  const handleContent = (value: string) => {
    setContent(value);
  };

  return (
    <div className="flex flex-col justify-start items-start w-[1000px] h-[500px] gap-4">
      <div className="w-full mx-auto flex justify-center items-center">
        <img
          src="/icons/astro-logo-dark.svg"
          alt="Astro"
          width={1000}
          height={1000}
        />
        {/* <img
          className="rounded-lg overflow-hidden"
          src={
            content === "docker" ? "/icons/docker.webp" : "/icons/coolify.jpeg"
          }
          alt={content === "docker" ? "Docker" : "Coolify"}
        /> */}
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="seo"
        className="w-full"
      >
        <AccordionItem value="seo" onClick={() => handleContent("seo")}>
          <AccordionTrigger className="text-lg">
            Per-page Metadata and SEO
          </AccordionTrigger>
          <AccordionContent className="text-base font-light">
            One of the main reasons I chose Astro for this portfolio is its
            strong SEO support. Astro outputs fully rendered HTML instead of
            relying on a purely client-side rendering approach, which makes page
            content easier for search engines to read and index. It also allows
            me to define metadata for each page individually, including titles
            and descriptions, so every section of the portfolio can be presented
            more clearly in search results. For a showcase website, this is
            especially important because it improves discoverability and helps
            each project page communicate its purpose more effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="island" onClick={() => handleContent("island")}>
          <AccordionTrigger className="text-lg">
            Island Architecture and Faster Loading
          </AccordionTrigger>
          <AccordionContent className="text-base font-light">
            Astro’s island architecture is another reason it works so well for
            portfolio websites. Instead of sending unnecessary JavaScript for
            the entire page, Astro only hydrates the components that actually
            need interactivity. This means static sections can remain
            lightweight, while interactive elements such as React components can
            still function where needed. Combined with Astro’s built-in loading
            and prefetching strategies, this approach helps pages load faster,
            reduces client-side overhead, and creates a smoother browsing
            experience for visitors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="image" onClick={() => handleContent("image")}>
          <AccordionTrigger className="text-lg">
            Built-in Image Optimization
          </AccordionTrigger>
          <AccordionContent className="text-base font-light">
            Astro also provides a built-in Image component that makes image
            optimization much easier. Since portfolio websites often rely
            heavily on visual presentation, image performance has a direct
            impact on user experience. By using Astro’s Image component, images
            can be optimized automatically for different screen sizes and
            formats, which improves loading speed and responsiveness across
            devices. This allows me to maintain visual quality while reducing
            unnecessary performance costs, making the website both attractive
            and efficient.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
