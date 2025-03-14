"use client";

import LoginComponent from "@/components/sign/loginComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.isAuthenticated) {
          router.replace('/');
        }
      } catch (error) {
        console.error('인증 상태 확인 중 오류 발생:', error);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <main className="container-xl">
      <LoginComponent />
    </main>
  );
} 