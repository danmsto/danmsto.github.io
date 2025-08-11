import { Svg, Tech } from "./enums.ts";

export type Project = {
    title: string;
    description: string;
    madeWith: string;
    link: string;
    linkActive: boolean;
    image: string;
    logo: string;
    active: boolean;
    stack: Tech[];
}

export type Experience = {
    heading: string;
    subtitle: string;
    bulletPoints: string[];
    image: Svg;
    location: string;
    dates: string;
}

export type TechDetail = {
    label: string;
    char: string;
} 

export type TechDetails = {
    [key in Tech]: TechDetail;
}

export type SvgDetails = {
    [key in Svg]: string;
}

export type Competency = {
    icon: TechDetail;
    label: string;
}

export type Introduction = {
    header: string;
    subHeader: string;
    lines: string[];
    summary: string;
}
