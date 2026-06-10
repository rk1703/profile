export interface NavLink {
  id: string;
  title: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: any;
}

export interface Tag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: any;
  website_link: string;
  source_code_link: string;
}
