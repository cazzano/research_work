'use client';
import {
  MessageSquare,
  Phone,
  MessagesSquare,
  Video,
  Briefcase,
  Mail,
  MessageCircle,
  Send,
  Lock,
  Apple,
  Mic,
  VideoIcon,
  Group,
  MessageSquareText,
  Code,
  Users,
  Slack,
  type LucideProps,
} from 'lucide-react';

const iconMap = {
  MessageSquare,
  Phone,
  MessagesSquare,
  Video,
  Briefcase,
  Mail,
  MessageCircle,
  Send,
  Lock,
  Apple,
  Mic,
  VideoIcon,
  Group,
  MessageSquareText,
  Code,
  Users,
  Slack,
  Default: MessageSquare,
};

type TechIconName = keyof typeof iconMap;

interface TechIconProps extends LucideProps {
  name: string;
}

export function TechIcon({ name, ...props }: TechIconProps) {
  const IconComponent = iconMap[name as TechIconName] || iconMap.Default;
  return <IconComponent {...props} />;
}
