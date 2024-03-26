export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  data: number;
  relevanceScore: number;
  daysAgo: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type SortBy = "relevant" | "recent";

export type PageDirection = "prev" | "next";
