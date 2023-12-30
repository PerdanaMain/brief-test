import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function SignIn() {
  const handleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have successfully logged in!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem(
            "credentialResponse",
            JSON.stringify(tokenResponse.access_token)
          );
          window.location.href = "/admin";
        }
      });
    },
    onError: (error) => console.log(error),
  });
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="item-center mt-[10vh] flex w-full max-w-full flex-col items-center justify-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Use your Google account to sign in.
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <button
            onClick={handleSignIn}
            className="text-sm font-medium text-navy-700 dark:text-white"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
