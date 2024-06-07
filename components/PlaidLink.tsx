import { useCallback, useEffect, useState } from "react";
import { PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createLinkToken } from "@/lib/actions/user.actions";

function PlaidLink({ user, variant }: PlaidLinkProps) {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback(
    async (public_token: StyledString) => {
      // await exchangePublicToken({
      //  publicToke: public_token,
      //  user,
      // });

      router.push("/");
    },
    [user],
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
      )}
    </>
  );
}

export default PlaidLink;
