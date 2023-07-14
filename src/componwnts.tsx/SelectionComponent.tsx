import {
  DivFormHolder,
  DivSelectionBottomContent,
  DivSelectionBottomContentOne,
  DivSelectionBottomContentTwo,
  DivSelectionButtons,
  DivSelectionContent,
  DivSelectionTitle,
} from "../styles/tsx/Auth/AuthStyle";
import "../styles/css/style.css";
import {
  SelectionBTitleOne,
  SelectionBTitleThree,
  SelectionBTitleTwo,
  SelectionTitleOne,
  SelectionTitleTwo,
} from "../styles/TextStyle";
import RegisterType from "../Register/RegisterType";

const SelectionComponent = () => {
  return (
    <DivFormHolder>
      <DivSelectionContent>
        <DivSelectionTitle>
          <SelectionTitleOne>Welcome to UNIK!</SelectionTitleOne>
          <SelectionTitleTwo>Pick Your Choice</SelectionTitleTwo>
        </DivSelectionTitle>

        <DivSelectionButtons>
          <RegisterType />
        </DivSelectionButtons>

        <DivSelectionBottomContent>
          <DivSelectionBottomContentOne>
            <SelectionBTitleOne>Already have an account?</SelectionBTitleOne>
            <SelectionBTitleTwo>Login Here</SelectionBTitleTwo>
          </DivSelectionBottomContentOne>

          <DivSelectionBottomContentTwo>
            <SelectionBTitleThree>Need help?</SelectionBTitleThree>
          </DivSelectionBottomContentTwo>
        </DivSelectionBottomContent>
      </DivSelectionContent>
    </DivFormHolder>
  );
};

export default SelectionComponent;
