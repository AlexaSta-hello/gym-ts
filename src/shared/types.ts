export enum SelectedPage { 
    Home = "home",
    Benefits = "benefits",
    OurClasses = "unserekurse",
    ContactUs = "kontakt",
  }

export interface BenefitType {
  icon: JSX.Element;
  title: string,
  description: string
}

export interface ClassType {
  name: string; 
  description?: string; /* mit ? -> description optional */
  image: string
}