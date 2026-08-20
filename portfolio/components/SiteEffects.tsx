"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSiteEffects } from "@/lib/site-effects";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    initSiteEffects();
  }, [pathname]);

  return null;
}
