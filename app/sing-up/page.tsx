'use client'

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useSignUp } from "../features/auth/signUp/hooks";
import { useSearchParams } from "next/navigation";

export default function SignUp() {

  const searchParams = useSearchParams();
  const role = (searchParams.get("role") as "candidate" | "company") ?? "candidate";
  const { mutate, isPending, isError, error } = useSignUp();
  const userRole = role ?? "candidate";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    mutate({
      email,
      password,
      confPassword: confirmPassword,
      role: "candidate",
    });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <p>Please create your account to continue</p>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          New password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Repeat password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <label>
          <input type="checkbox" required />
          Keep me logged in
        </label>

        <button type="submit" disabled={isPending}>
          {isPending ? "Signing up..." : "Sign up"}
        </button>
      </form>

      {isError && (
        <p style={{ color: "red" }}>
          Error: {String(error)}
        </p>
      )}

      <p>
        Have you already account? <Link href="/">Login</Link>
      </p>
    </div>
  );
}
