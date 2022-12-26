import Avatar from "components/FUI/Avatar";
import Button from "components/FUI/Button";
import Divider from "components/FUI/Divider";
import RoundedBox from "components/FUI/RoundedBox";

const Home = async ({}) => {
  return (
    <>
      <h1 className="text-3xl">Blank project for Next13 & Tailwind</h1>
      <p>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. In a free hour, when our power of choice is
        untrammelled and when nothing prevents our being able to do what we like
        best, every pleasure is to be welcomed and every pain avoided. But in
        certain circumstances and owing to the claims of duty or the obligations
        of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds
        in these matters to this principle of selection: he rejects pleasures to
        secure other greater pleasures, or else he endures pains to avoid worse
        pains.
      </p>
      <p>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. In a free hour, when our power of choice is
        untrammelled and when nothing prevents our being able to do what we like
        best, every pleasure is to be welcomed and every pain avoided. But in
        certain circumstances and owing to the claims of duty or the obligations
        of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds
        in these matters to this principle of selection: he rejects pleasures to
        secure other greater pleasures, or else he endures pains to avoid worse
        pains.
      </p>
      <Avatar src="/avatar.jpg" alt="Dan Fellini" size={50} />
      <Button tw="mt-4" variant="primary">
        Primary
      </Button>
      <Button tw="mt-4" variant="more">
        More
      </Button>
      <Divider />
      <RoundedBox>This is a rounded box</RoundedBox>
    </>
  );
};

export default Home;
