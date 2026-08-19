import { User, Grid, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Me: User,
  "for Bussiness": Grid,
};

type TopBarWithNotificationsProps = {
  title: string;
  icon?: string;
};

export default function TopBarWithNotifications({ title, icon }: TopBarWithNotificationsProps) {
  const Icon = iconMap[title];

  return (
    <div className="nav-item">
      <div className="nav-item__icon-wrap">
        {Icon ? (
          <Icon size={24} className="nav-item__icon" />
        ) : (
          <img className="nav-item__img" src={icon} alt="logo-icon" />
        )}
      </div>
      <p className="nav-item__label">
        {title}
        <ChevronDown size={12} className="nav-item__chevron" />
      </p>
    </div>
  );
}
