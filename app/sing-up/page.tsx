import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <h1>Sing up</h1>
      <p>Please create your account to continue</p>
      <form>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          New password
          <input type="password" name="newPassword" required />
        </label>
        <label>
          Repeat password
          <input type="password" name="confirmPassword" required />
        </label>
        <label>
          <input type="checkbox" name="remember" required />
          Keep me logger in
        </label>
        <button type="submit">Sing in</button>
      </form>
      <p>
        Have you alredy account?<Link href="/">Login </Link>
      </p>
    </div>
  );
}
