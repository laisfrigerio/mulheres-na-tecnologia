import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import { articles } from "@/data/articles";
import { books } from "@/data/books";
import { youtubeChannels } from "@/data/youtube-channels";
import { videos } from "@/data/videos";
import { communities } from "@/data/communities";
import { communityArticles } from "@/data/community-articles";
import { instagram } from "@/data/instagram";

const Index = () => {
  return (
    <>
      <main>
        <ThemeToggle />
        <Hero />

        <ContentSection
          title="⚡ Artigos"
          items={articles}
          sectionClassName="artigos-section content-section container"
          id="conteudos"
        />

        <ContentSection
          title="⚡ Livros & E-books"
          items={books}
          sectionClassName="books-section content-section container"
        />

        <ContentSection
          title="📺 Canais do YouTube"
          items={youtubeChannels}
          sectionClassName="content-section container"
          listClassName="round-list"
          id="youtube-channels"
          variant="round"
        />

        <ContentSection
          items={videos}
          sectionClassName="content-section container"
          id="videos-articles"
        />

        <ContentSection
          title="🎀 Comunidades"
          items={communities}
          sectionClassName="content-section container container-communities"
          listClassName="round-list"
          id="women-communities"
          variant="round"
        />

        <ContentSection
          items={communityArticles}
          sectionClassName="content-section container community-articles"
          id="community-articles"
        />

        <ContentSection
          title="📲 Instagram"
          items={instagram}
          sectionClassName="content-section container last-article-section"
          listClassName="round-list"
          id="instagram-accounts"
          variant="round"
        />

        <CommunitySection />
      </main>

      <BackToTop />
      <Footer />
    </>
  );
};

export default Index;
