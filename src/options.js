import { useCallback, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "semantic-ui-react";

const Options = ({ OptionProps, setOptionProps }) => {
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "b") {
        setOptionProps({
          ...OptionProps,
          isbillShow: OptionProps.isbillShow === true ? false : true
        });
      }
    },
    [OptionProps, setOptionProps]
  );

  useEffect(() => {
    window.addEventListener("keyup", (e) => handleKeyPress(e));
    return () => {
      window.removeEventListener("keyup", (e) => handleKeyPress(e));
    };
  }, [handleKeyPress]);

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
