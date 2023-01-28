import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";
import Accessorys from "./pages/Accessorys"
const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/", component: HomePage },
  { path: "/about", component: AboutUs },
  { path: "/", component: HomePage },
  { path: "/accessorys", component: Accessorys },
  { path: "/post/:id([0-9])?", component: PostPage },
  { component: NotFound },
];

export default routes;
