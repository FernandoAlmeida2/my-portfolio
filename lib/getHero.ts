import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export type SocialLink = {
  label: string;
  url: string;
};

export type HeroData = {
  title: string;
  subtitle: string;
  description: string;
  about: string;
  socials: SocialLink[];
};

export function getHero(): HeroData {
  const filePath = path.join(process.cwd(), "content/hero.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const data = yaml.load(fileContents) as HeroData;

  return {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    about: data.about,
    socials: data.socials || [],
  };
}
