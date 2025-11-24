export type ContentBlock = {
  title: string;
  content: React.ReactNode;
};

export type SubTopic = {
  title: string;
  blocks: ContentBlock[];
};

export type MainTopic = {
  id: string;
  title: string;
  description: string;
  subTopics: SubTopic[];
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};
