import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import Download from "./components/Download";

function App() {
    return ( 
        <Layout >
            <Routes>
                {/* {
                    routes.map((route, index) => ( 
                        <Route {...route }
                        key = { index }
                        />
                    ))
                } */}
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/blogs/:id" element={<Blog/>} />
                <Route path="/blogs" element={<BlogPage/>} /> 
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/post/:id([0-9]+)?" element= {<PostPage/>} />
                <Route path="/profile/*" element={<Profile/>} >
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="download" element={<Download/>} />
                </Route>
                
            </Routes> 
        </Layout>
    );
}

export default App;