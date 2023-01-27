import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Accessorys from "./pages/Accessorys"
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";

import Gaiter from "./components/Gaiter";
import Hat from "./components/Hat";
import Whip from './components/Whip';

function App() {
    return ( 
        <Layout >
            <Routes>
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/blogs/:id" element={<Blog/>} />
                <Route path="/blogs" element={<BlogPage/>} /> 
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/post/:id([0-9]+)?" element= {<PostPage/>} />
                <Route path="/accessorys/*" element={<Accessorys/>} >
                    <Route path="hat" element={<Hat/>} />
                    <Route path="gaiter" element={<Gaiter/>} />
                    <Route path="whip" element={<Whip/>} />
                </Route>
                
            </Routes> 
        </Layout>
    );
}

export default App;