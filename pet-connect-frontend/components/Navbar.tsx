"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Menu, PawPrint, User } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar2 = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("user_data");
    setIsLogin(userData ? true : false);
  }, []);
 

  return (
    <div className="shadow-sm p-2 bg-white sticky top-0 z-50 ">
      <section className="flex items-center justify-between max-w-7xl mx-auto px-2">
        {/*logo  */}
        <div>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PawPrint className="h-6 w-6" />
            <span className="font-bold text-xl">PetAdopt</span>
          </Link>
        </div>
        {/* NavIttems */}
        <NavItems />
        {/* login */}
        {isLogin ? (
          <>
            <Link href="/profile" className="hidden md:flex">
              <Avatar>
                <AvatarImage src="/profile.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button className="hidden md:flex">
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
          </>
        )}

        {/* MobileVersion */}
        <MobileNav />
      </section>
    </div>
  );
};

export default Navbar2;

const NavItems = () => {
  return (
    <NavigationMenu className="md:inline-flex hidden">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/carehub"
          >
            Care Hub
          </Link>
        </NavigationMenuItem>

        {/* About Us */}
        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/about"
          >
            About Us
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = () => {
  const isLogin = true;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {" "}
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <PawPrint className="h-6 w-6" />
            <span className="font-bold">PetAdopt</span>
          </Link>
        </SheetTitle>
        <SheetDescription className="hidden">description</SheetDescription>
        <div className="flex flex-col space-y-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/dashboard" className="text-sm hover:underline">
                Dashboard
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/carehub" className="text-sm hover:underline">
                Care Hub
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/about" className="text-sm hover:underline">
                About Us
              </Link>
            </SheetTrigger>
          </nav>
          {isLogin ? (
            <>
              <SheetTrigger asChild>
                <Link href="/profile">
                  <Button className="w-full" variant="default">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                </Link>
              </SheetTrigger>
            </>
          ) : (
            <>
              <SheetTrigger asChild>
                <Link href="/login">
                  <Button className="w-full" variant="default">
                    <User className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
              </SheetTrigger>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
