import { Home, Users, Briefcase, MessageSquare, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  "My Network": Users,
  Jobs: Briefcase,
  Messaging: MessageSquare,
  Notifications: Bell,
};

type TopBarElementsProps = {
  title: string;
  count?: number | string;
};

export default function TopBarElements({ title, count = 0 }: TopBarElementsProps) {
  const Icon = iconMap[title];
  const numericCount = Number(count);

  return (
    <div className="nav-item">
      <div className="nav-item__icon-wrap">
        {Icon && <Icon size={24} className="nav-item__icon" />}
        {numericCount > 0 && (
          <span className="nav-item__badge">
            {numericCount > 99 ? "99+" : numericCount}
          </span>
        )}
      </div>
      <p className="nav-item__label">{title}</p>
    </div>
  );
}
