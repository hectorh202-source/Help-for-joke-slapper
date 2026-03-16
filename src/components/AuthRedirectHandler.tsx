import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const POST_AUTH_REDIRECT_KEY = "post_auth_redirect_path";

export function setPostAuthRedirectPath(path: string) {
  try {
    localStorage.setItem(POST_AUTH_REDIRECT_KEY, path);
  } catch {
    // ignore
  }
}

function popPostAuthRedirectPath() {
  try {
    const v = localStorage.getItem(POST_AUTH_REDIRECT_KEY);
    if (v) localStorage.removeItem(POST_AUTH_REDIRECT_KEY);
    return v;
  } catch {
    return null;
  }
}

export default function AuthRedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const maybeRedirect = async () => {
      const path = popPostAuthRedirectPath();
      if (!path) return;

      const { data, error } = await supabase.auth.getSession();
      if (cancelled) return;
      if (error || !data.session?.user) return;

      if (location.pathname !== path) {
        navigate(path, { replace: true });
      }
    };

    void maybeRedirect();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, navigate]);

  return null;
}

