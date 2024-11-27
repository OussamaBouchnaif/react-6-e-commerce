import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg max-w-xs bg-white shadow-md">
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn("github", { callbackUrl: "/", prompt: "login" });
          }}
        >
          <button
            type="submit"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-700 transition duration-200"
          >
            Sign in with GitHub
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("google",);
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>
      </div>
    </div>
  );
}
