import { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import PostItem from "../components/Post/PostItem";
import CreatePostLink from "../components/Community/CreatePostLink";
import Recommendations from "../components/Community/Recommendations";
import Premium from "../components/Community/Premium";
import PersonalHome from "../components/Community/PersonalHome";
import PageContentLayout from "../components/Layout/PageContent";

const Home: NextPage = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Welcome to Reddit Clone",
      body: "This is a dummy post to get you started.",
      userDisplayText: "admin",
      voteStatus: 10,
      numberOfComments: 2,
      createdAt: { seconds: Date.now() / 1000 },
      communityId: "general",
    },
    {
      id: "2",
      title: "Another Post",
      body: "Here's another dummy post.",
      userDisplayText: "user1",
      voteStatus: 5,
      numberOfComments: 1,
      createdAt: { seconds: Date.now() / 1000 },
      communityId: "general",
    },
  ]);

  return (
    <PageContentLayout>
      <>
        <CreatePostLink />
        <Stack>
          {posts.map((post, index) => (
            <PostItem
              key={post.id}
              post={post}
              postIdx={index}
              onVote={() => {}}
              onDeletePost={() => {}}
              userVoteValue={0}
              userIsCreator={false}
              onSelectPost={() => {}}
              homePage
            />
          ))}
        </Stack>
      </>
      <Stack spacing={5} position="sticky" top="14px">
        <Recommendations />
        <Premium />
        <PersonalHome />
      </Stack>
    </PageContentLayout>
  );
};

export default Home;
