import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
export function AccordionComponent() {
  const [content, setContent] = useState<string>("docker");
  const handleContent = (value: string) => {
    setContent(value);
  };

  return (
    <div className="flex justify-center items-start max-w-[1600px] w-full gap-4">
      <div className="w-[50%]">
        <img
          className="rounded-lg overflow-hidden"
          src={
            content === "docker" ? "/icons/docker.webp" : "/icons/coolify.jpeg"
          }
          alt={content === "docker" ? "Docker" : "Coolify"}
        />
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue={content}
        className="w-[50%]"
      >
        <AccordionItem value="docker" onClick={() => handleContent("docker")}>
          <AccordionTrigger className="text-lg">Docker</AccordionTrigger>
          <AccordionContent className="text-[clamp(0.8rem,1.2vw,1.6rem)] font-light">
            In my personal project JokeShare, I used Docker to containerize the
            application by creating a Docker image based on the project
            configuration. I then ran containers from this image to test the
            application in an isolated, production-like environment, ensuring it
            could run reliably on a server without dependency or configuration
            issues. After verifying everything worked as expected, I deployed
            the same image to my VPS, where the application was successfully
            launched. This approach ensured a consistent and reproducible
            deployment process across environments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="coolify" onClick={() => handleContent("coolify")}>
          <AccordionTrigger className="text-lg">Coolify</AccordionTrigger>
          <AccordionContent className="text-[clamp(0.8rem,1.2vw,1.6rem)] font-light">
            After containerizing and testing the application with Docker, I used
            Coolify to handle deployment and infrastructure management. I
            deployed the JokeShare frontend through Coolify and configured it to
            run in a production environment. For the backend, I connected my
            GitHub repository and used Coolify’s Git-based deployment to
            automatically build and deploy the Express API. In addition, I
            provisioned both MySQL and MongoDB databases directly within
            Coolify, allowing the backend services to connect securely through
            internal networking. This setup centralized deployment, database
            management, and environment configuration in one place, making the
            entire full-stack application easier to maintain and scale.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
