import React, { useEffect } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import { getArticleFeed } from "../redux-store/actions/get-article-actions";
import { getToken } from "../utilities/authentication";
import { Section, mixins } from "../styles/shared";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import FollowingCard from "../components/FeedArticles/FollowingArticle";
import TrendingCard from "../components/FeedArticles/TrendingArticle";
import RegularCard from "../components/FeedArticles/RegularArticle";
import Loader from "./Loader";

const Container = styled(Section)`
  margin-top: 8rem;
  min-width: 90vw;
  h1 {
    font-family: ${theme.fonts.Oswald};
    font-size: ${theme.fontSizes.ttl};
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.purple};
  }
  h2 {
    font-family: ${theme.fonts.Oswald};
    font-size: ${theme.fontSizes.xxl};
  }
`;

const StyledTrending = styled.div`
  width: 100%;
  .trending-content {
    display: flex;
    justify-content: space-between;
    max-height: 47vh;
    ${media.phablet`flex-direction: column; max-height: none;`};
    .big {
      width: 49%;
      ${media.phablet`width: 100%;`};
    }
    .small {
      width: 24%;
      ${media.phablet`width: 100%;`};
    }
  }
`;

const StyledFeed = styled.div`
  width: 100%;
  ${mixins.flexBetween};
  margin-top: 10rem;
  align-items: flex-start;
  ${media.tablet`margin-bottom: 4rem;`};
  ${media.phablet`flex-direction: column; margin-top: 5rem;`};
  .interests {
    h2 {
      line-height: 1.2em;
    }

    width: 55%;
    ${media.phablet`width: 100%;`};
    #dynamic-card {
      width: 5vw;
    }
  }
  .following {
    width: 40%;
    h2 {
      line-height: 1.2em;
    }
    @media (min-width: 540px) and (max-width: 890px) {
      width: 55%;
    }
    ${media.phablet`width: 100%; margin-top: 5rem;`};
    .following-container {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      background-color: #fef9e1;
      height: 100%;
      max-height: 60vh;
      border: 2rem solid #fef9e1;
      overflow-y: auto;
      margin-top: 2rem;
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.purple};
        border-radius: 10px;
        &:hover {
          background: #765279;
          cursor: pointer;
        }
      }
      .no-following {
        min-height: 30vh;
        width: 95%;
        margin: 0 auto;
        background-color: white;
        text-align: center;
        display: flex;
        align-items: center;
        h5 {
          width: 80%;
          margin: 0 auto;
          span {
            color: ${theme.colors.purple};
          }
        }
      }
    }
  }
`;

export function Feed(props) {
  const { getArticleFeed, articles } = props;
  const token = getToken();

  useEffect(() => {
    getArticleFeed();
  }, [getArticleFeed]);

  return (
    <>
      {token ? <AuthedNavigation /> : <DefaultNavigation />}

      <Container>
        <StyledTrending>
          <h1>TRENDING NOW</h1>
          {articles.loading ? (
            <Loader />
          ) : (
            articles.data.trending && (
              <div className="trending-content">
                <div className="big">
                  <TrendingCard
                    insight={articles.data.trending[0]}
                    type="jumbo"
                  />
                </div>
                {articles.data.trending.slice(1, 3).map(article => (
                  <div className="small" key={article.id}>
                    <TrendingCard insight={article} type="reg" />
                  </div>
                ))}
              </div>
            )
          )}
        </StyledTrending>
        <StyledFeed>
          <div className="interests">
            {!articles.loading && (
              <h2>
                {articles.data.interests
                  ? "INSIGHTS BASED ON YOUR INTERESTS"
                  : "EXPLORE INSIGHTS"}
              </h2>
            )}
            {!articles.loading &&
              (articles.data.mainFeed || articles.data.interests) &&
              (
                articles.data.interests || articles.data.mainFeed
              ).map(insight => (
                <RegularCard insight={insight} key={insight.id} />
              ))}
          </div>
          <div className="following">
            {!articles.loading && <h2>INSIGHTS BASED ON YOUR FOLLOWING</h2>}
            {!articles.loading && (
              <div className="following-container">
                {articles.data.following ? (
                  articles.data.following.map(insight => (
                    <FollowingCard insight={insight} />
                  ))
                ) : (
                  <div className="no-following">
                    <h5>
                      <span>Oops!</span> Looks like you're not following any of
                      our wonderful authors just yet.
                    </h5>
                  </div>
                )}
              </div>
            )}
          </div>
        </StyledFeed>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps, { getArticleFeed })(Feed);
