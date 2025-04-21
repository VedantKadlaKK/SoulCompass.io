
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Soul Compass</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-purple-200 transition-colors">
            Home
          </Link>
          <Link to="/tests" className="font-medium hover:text-purple-200 transition-colors">
            Assessments
          </Link>
          <Link to="/about" className="font-medium hover:text-purple-200 transition-colors">
            About
          </Link>
          <Button asChild variant="secondary" className="bg-white text-purple-700 hover:bg-purple-100">
            <Link to="/tests">Start Assessment</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-b from-purple-700 to-indigo-800 text-white">
              <nav className="flex flex-col space-y-6 mt-10">
                <SheetClose asChild>
                  <Link to="/" className="font-medium hover:text-purple-200 transition-colors">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/tests" className="font-medium hover:text-purple-200 transition-colors">
                    Assessments
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/about" className="font-medium hover:text-purple-200 transition-colors">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="secondary" className="bg-white text-purple-700 hover:bg-purple-100 w-full">
                    <Link to="/tests">Start Assessment</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
