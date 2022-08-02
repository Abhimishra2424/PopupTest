import { Button, Icon, Popup } from "semantic-ui-react";
import Options from "./options";

const Pop = ({ OptionProps, setOptionProps }) => {
  return (
    <Popup
      content={
        <Options OptionProps={OptionProps} setOptionProps={setOptionProps} />
      }
      on="click"
      pinned
      wide
      huge
      position="bottom right"
      className="optionPopContent"
      trigger={
        <Button
          type="Button"
          className="ledgerOptionExportBtn borderRightNone textColorBlue"
        >
          <Icon className="textColorBlue" name="options" />
          Options
        </Button>
      }
    />
  );
};

export default Pop;
