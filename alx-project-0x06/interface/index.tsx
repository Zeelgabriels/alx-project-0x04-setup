// ButtonProps for Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// LayoutProps for Layout component
export interface LayoutProps {
  children: React.ReactNode;
}

// PageRouteProps for Home page routing
export interface PageRouteProps {
  pageRoute: string;
}
