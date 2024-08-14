import LoginedHeader from "@/components/Header/LoginedHeader";

export default function LoginedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoginedHeader />
      {children}
    </>
  );
}
