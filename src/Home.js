import Menu from "./Menu";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Home() {
    return (
        <>
            <Menu />
            <div id="featured">&nbsp;</div>
            <div id="wrapper">
                <div id="page" class="container">
                    <div id="content">
                        <div class="title">
                            <h2>Welcome to HomePage</h2>
                            <span class="byline">Side to describe our site...</span> </div>
                        <img src="images/pic03.jpg" width="700" height="200" alt="" class="image image-full" />
                        <p>This is <strong>Soft Hued</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
                        <div id="onecolumn">
                            <div class="title">
                                <h2>Pellentesque quis lectus gravida blandit</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem.</p>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>
    )
} export default Home;