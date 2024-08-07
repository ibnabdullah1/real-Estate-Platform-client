import SingleFeedCardGrid from "../../components/SingleFeedCardGrid";
import { feeds } from "../../Data/dummyData";

const Feeds = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">blog post</h1>
        <h1 className="heading">latest newsfeeds</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        {feeds.slice(0, 4).map((feed) => (
          <SingleFeedCardGrid key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
