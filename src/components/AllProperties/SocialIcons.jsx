import { socials } from "../../Data/dummyData";

const SocialIcons = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Social Media</h1>
      <div className="flex-wrap gap-2 mt-3 flex-align-center">
        {socials.map((Icon, i) => (
          <div
            key={i}
            className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-white"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
