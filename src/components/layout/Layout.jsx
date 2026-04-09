import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import IntroVideo from "../../modules/IntroVideo/IntroVideo";
import introDesktop from "../../assets/videos/intro-desktop.mp4";
import introWebm from "../../assets/videos/intro-desktop.webm";
export default function Layout({ children, title = "Wedding Day" }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Wedding Day — Владислав и Татьяна" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <IntroVideo
                    desktopSrc={introDesktop}
                    introWebmSrc={introWebm}
                >
                    <Header />

                    <main className="flex-1 overflow-hidden">
                        {children}
                    </main>

                    <Footer />
                </IntroVideo>
            </div>
        </HelmetProvider>
    );
}
