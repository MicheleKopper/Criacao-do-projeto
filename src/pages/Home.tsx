import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import { SectionCards } from "../components/SectionCards";
import { Divider } from "../components/styleds/Divider";

export function Home() {
  return (
    <>

    <header>
<nav>

<img src="" alt="" />
<a href="">Home</a>
<a href="">Sobre nós</a>
</nav>

    </header>
      <Banner />

      <SectionCards />
      <Divider />

      <Gallery />
      <Divider />
    </>
  );
}
