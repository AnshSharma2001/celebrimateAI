"use client";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { useProModel } from "@/hooks/use-pro-model";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {
  isPro: boolean;
}

export const Navbar = ({ isPro }: NavbarProps) => {
  const proModel = useProModel();
  return (
    <div
      className="fixed w-full z-50 flex justify-between 
    items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16"
    >
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            celebrimate.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button onClick={proModel.onOpen} size="sm" variant="premium">
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white" />
          </Button>
        )}
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  );
};
