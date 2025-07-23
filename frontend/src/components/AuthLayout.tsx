// src/components/AuthLayout.tsx
import "../styles/AuthLayout.css";

type AuthLayoutProps = {
  children: React.ReactNode;
  sideContent?: React.ReactNode;
};

export default function AuthLayout({ children, sideContent }: AuthLayoutProps) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form">
          {children}
        </div>
        <div className="auth-side">
          {sideContent}
        </div>
      </div>
    </div>
  );
}
