import AtomButton from "~/components/@atoms/AtomButton";
import AtomIcon from "~/components/@atoms/AtomIcon";
import AtomImage from "~/components/@atoms/AtomImage";
import AtomText from "~/components/@atoms/AtomText";
import AtomWrapper from "~/components/@atoms/AtomWrapper";

export default function Index() {
  return (
    <AtomWrapper>
      <AtomText backgroundColor="#0072FF" padding="10px">
        alkdsnadslfk
      </AtomText>
      <AtomText color="red">alkdsnadslfk</AtomText>
      <AtomIcon src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg" />
      <AtomButton>EXAMPLE</AtomButton>
      <AtomButton margin="10px" backgroundColor="#da1f1f" disabled>
        EXAMPLE
      </AtomButton>
      <AtomButton margin="10px" backgroundColor="#e78ce7">
        EXAMPLE
      </AtomButton>
      <AtomButton margin="10px" backgroundColor="#0072FF">
        EXAMPLE
      </AtomButton>
      <AtomButton margin="10px" backgroundColor="#41c052">
        EXAMPLE
      </AtomButton>
      <AtomButton margin="10px" backgroundColor="#00ff95">
        EXAMPLE
      </AtomButton>
      <AtomButton margin="10px">EXAMPLE</AtomButton>
      <AtomImage
        src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
        width="150px"
        height="150px"
      />
    </AtomWrapper>
  );
}
