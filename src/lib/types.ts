export type TechStackItem = {
  name: string;
  type: 'language' | 'framework' | 'database' | 'infrastructure' | 'platform';
};

export type AppData = {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  protocols: string[];
  backend: TechStackItem[];
  frontend: TechStackItem[];
  useCase: string;
  coreConcepts: string[];
  keyTech: string[];
  technicalExplanation: string;
  dataFlow: { step: string; detail: string }[];
};

export type Category = {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  apps: AppData[];
};

export type EmailDifference = {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    keyDifferences: {
        title: string;
        comparison: {
            name: string;
            details: string;
        }[];
    }[];
};
