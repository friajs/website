import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Container, Grid} from "../components/common";
import {Post} from "../utils/models";
import {Card} from "../components/card";
import styled from "styled-components";
import TagList from "../components/tag-list";
import {Link, StaticQuery, graphql} from "gatsby";
import SidebarContent from "../components/sidebar-content";
import SEO from "../components/seo";
import Theme from "../styles/theme";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
    postsPerPage: number;
  };
  location: Location;
}

const HomeContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) .25fr;
  grid-column-gap: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

const PostsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "latest latest" ". .";
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: -30px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    display: block;
    padding: 0;

    article {
      margin-bottom: 30px;
    }
  }
`;

const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    margin: 30px auto;
    border-top: 2px #e5eff5 solid;
    padding: 20px;
    width: 100%;
  }
`;

const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const ArchiveLink = styled(Link)`
  font-size: .8em;
  padding: 10px;
  border-radius: .3em;
  transition: background-color .5s;
  background-color: #f2f2f2;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <HomeContainer>
      <PostsContainer>
      <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                id
                title
                content
                published_at
                categories{
                  id
                  name
                }
                
                image {
                  id
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        data.allStrapiArticle.edges.map((post, index) => (
          <Card
            title={post.node.title}
            path={"article/"+post.node.strapiId}
            featuredImage={post.node.image.publicURL }
            content={post.node.content}
            key={index}
            meta={
              {
                time: post.node.published_at,
                timePretty: post.node.published_at,
                tag: post.node.categories.length > 0 ? post.node.categories[0].name : null,
              }
            }
            style={{gridArea: index === 0 ? 'latest' : undefined}}
            halfImage={index === 0}
          />
        ))
      )}
    />
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
