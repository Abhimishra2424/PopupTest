import { useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "semantic-ui-react";

const Options = ({ OptionProps, setOptionProps }) => {
  useEffect(() => {
    const handleUp = (event) => {
      if (event.key === "b") {
        setOptionProps({
          ...OptionProps,
          isbillShow: OptionProps.isbillShow === true ? false : true
        });
      }
    };

    window.addEventListener("keyup", handleUp);

    return () => {
      window.removeEventListener("keyup", handleUp);
    };
  }, [setOptionProps, OptionProps]);

  return (
    <Container className="optionHolderDiv heightSetOption">
      <Table
        basic="very"
        selectable
        collapsing
        className="widthTable tableOfOption"
      >
        <TableBody>
          <TableRow
            onClick={() =>
              setOptionProps({
                ...OptionProps,
                isbillShow: OptionProps.isbillShow === true ? false : true
              })
            }
          >
            <TableCell className="widthExtrmRightCell colorFontGrey">
              L
            </TableCell>
            <TableCell className="widthRightCell"></TableCell>
            <TableCell className="widthMiddleCell">isbillShow</TableCell>
            <TableCell className="widthLeftCell">
              {OptionProps.isbillShow === true ? "Yes" : "No"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Options;
