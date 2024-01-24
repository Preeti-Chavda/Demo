import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function About() {
    return (
        <>
            <Menu />
            <div id="featured">&nbsp;</div>
            <div id="wrapper">
                <div id="page" class="container">
                    <div id="content">
                        <div class="title">
                            <h2>Welcome to About Page</h2>
                            <span class="byline">Mauris vulputate dolor sit amet nibh</span><p>This is <strong>Soft Hued</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p> </div>
                        <p>This is <strong>Soft Hued</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
                        <div id="onecolumn">
                            <div class="title">
                                <h2>Pellentesque quis lectus gravida blandit</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} export default About;