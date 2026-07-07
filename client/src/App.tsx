import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense, useState, useCallback } from "react";
import PageLoader from "./components/PageLoader";
import { ScrollProgress } from "./components/AnimationKit";

// Eager load Home for fast first paint
import Home from "./pages/Home";

// Lazy load other pages
const Bikes = lazy(() => import("./pages/Bikes"));
const Hire = lazy(() => import("./pages/Hire"));
const Lease = lazy(() => import("./pages/Lease"));
const Buy = lazy(() => import("./pages/Buy"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

function InlinePageLoader() {
  return (
    <div className="min-h-screen bg-spinwell-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-spinwell-red/20 border-t-spinwell-red rounded-full" style={{ animation: "spin-slow 1s linear infinite" }} />
        <span className="text-spinwell-plum/50 text-sm font-medium">Loading...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<InlinePageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/hire" component={Hire} />
        <Route path="/lease" component={Lease} />
        <Route path="/buy" component={Buy} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaderComplete = useCallback(() => setLoaded(true), []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {!loaded && <PageLoader onComplete={handleLoaderComplete} />}
          <ScrollProgress />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
