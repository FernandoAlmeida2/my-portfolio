import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export type Service = {
  name: string;
  description: string;
  features: string[];
};

export type ServiceData = {
  title: string;
  services: Service[]
};

export function getServices(): Service [] {
  const filePath = path.join(process.cwd(), "content/services.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const data = yaml.load(fileContents) as ServiceData;

  return data.services;
}