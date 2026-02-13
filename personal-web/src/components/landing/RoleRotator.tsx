import React from "react";

type RoleRotatorProps = {
  roles: string[];
  intervalMs?: number;
  ariaLabel?: string;
};

export const RoleRotator: React.FC<RoleRotatorProps> = ({
  roles,
  intervalMs = 2500,
  ariaLabel = "Cycle roles",
}) => {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    if (roles.length === 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, roles.length]);

  const handleRoleClick = () => {
    if (roles.length === 0) {
      return;
    }

    setRoleIndex((prev) => (prev + 1) % roles.length);
  };

  return (
    <span
      className="role-rotator"
      role="button"
      tabIndex={0}
      onClick={handleRoleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleRoleClick();
        }
      }}
      aria-label={ariaLabel}
    >
      {roles.map((role, index) => (
        <span
          key={role}
          className={
            index === roleIndex
              ? "role-rotator__item role-rotator__item--active"
              : "role-rotator__item"
          }
        >
          {role}
        </span>
      ))}
    </span>
  );
};

export default RoleRotator;
